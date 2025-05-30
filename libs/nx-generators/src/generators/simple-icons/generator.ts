import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  workspaceRoot,
  writeJsonFile,
} from '@nx/devkit';
import * as fs from 'fs';
import { decode } from 'html-entities';
import * as path from 'path';

import { getSvgAttributes, getSvgTagContent } from '../../utils';
import { SimpleIconsGeneratorSchema } from './schema';

interface SimpleIcon {
  title: string;
  hex: string;
}

function getSvgTitle(svgContent: string) {
  const regex = /<title>(.*?)<\/title>/;

  const match = regex.exec(svgContent);

  if (match) {
    return match[1];
  }

  return '';
}

const simpleIconTitle: string[] = [];

export async function simpleIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: SimpleIconsGeneratorSchema,
) {
  const iconsLibPath = 'libs/simple-icons';

  const iconsSourcePath = 'node_modules/simple-icons/icons';
  const iconsDestinationPath = path.join(iconsLibPath, 'src');

  generateIconsComponents(tree, iconsSourcePath, iconsDestinationPath);

  await formatFiles(tree);
}

function generateIconsComponents(
  tree: Tree,
  iconsSourcePath: string,
  iconsDestinationPath: string,
) {
  //remove icons
  fs.rmSync(path.join(workspaceRoot, iconsDestinationPath, 'icons'), {
    recursive: true,
    force: true,
  });

  const exports = [];
  tree.children(iconsSourcePath).forEach((fileName) => {
    const svgFileContent = tree.read(
      path.join(iconsSourcePath, fileName),
      'utf-8',
    );

    const title = getSvgTitle(svgFileContent);
    const title2 = decode(title);
    const title3 = title2
      .replace(/\./g, 'dot')
      .replace(/&/g, 'and')
      .replace(/'/g, '-')
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase();
    const name = path.parse(title3).name;

    const svgTagContent = getSvgTagContent(svgFileContent);

    const svgFileName = `${names(name).fileName}-icon`;
    const svgClassName = `Si${names(name).className}Icon`;
    const svgSelector = `si-${names(name).fileName}-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    const svgAttributes = getSvgAttributes(svgFileContent);

    const width = svgAttributes.width;
    const height = svgAttributes.height;
    const viewBox = svgAttributes.viewBox;
    let fill = svgAttributes.fill;
    const stroke = svgAttributes.stroke;
    const strokeWidth = svgAttributes.strokeWidth;
    const strokeLinecap = svgAttributes.strokeLinecap;
    const strokeLinejoin = svgAttributes.strokeLinejoin;

    //Colors

    const simpleIconsPackageJsonPath = path.join(
      workspaceRoot,
      'node_modules',
      'simple-icons',
      'package.json',
    );
    const packageJson = JSON.parse(
      fs.readFileSync(simpleIconsPackageJsonPath, 'utf-8'),
    ) as { version: string };
    const [major] = packageJson.version.split('.');
    const simpleIconsJsonPath = path.join(
      workspaceRoot,
      'node_modules',
      'simple-icons',
      Number(major) >= 15 ? 'data' : '_data',
      'simple-icons.json',
    );
    const simpleIconsJson: SimpleIcon[] = readJsonFile(simpleIconsJsonPath);
    const simpleIcon = simpleIconsJson.find(
      (icon: SimpleIcon) => icon.title === title2,
    );

    if (!simpleIcon) {
      console.log(`Cannot find Icon with Title ${title}`);
      simpleIconTitle.push(title);
    }

    const hex = simpleIcon?.hex;

    if (hex) {
      fill = `#${hex}`;
    }

    const o = {
      svgTagContent,
      svgFileName,
      svgClassName,
      svgSelector,
      width,
      height,
      viewBox,
      fill,
      stroke,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
    };

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'component'),
      path.join(iconsDestinationPath, 'icons'),
      o,
    );
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));

  writeJsonFile(
    path.join(
      workspaceRoot,
      'apps',
      'showcase',
      'public',
      'simple-icons-color-issue.json',
    ),
    simpleIconTitle,
  );
}

export default simpleIconsGenerator;
