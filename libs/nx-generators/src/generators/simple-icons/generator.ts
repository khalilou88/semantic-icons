import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  updateJson,
  workspaceRoot,
  writeJsonFile,
} from '@nx/devkit';
import * as fs from 'fs';
import { decode } from 'html-entities';
import * as path from 'path';

import { getSvgAttributes, getSvgTagContent } from '../../utils';
import { SimpleIconsGeneratorSchema } from './schema';
import { titleToComponentName } from './title-to-component-name';

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

  generateIconsComponents(
    tree,
    iconsLibPath,
    iconsSourcePath,
    iconsDestinationPath,
  );

  await formatFiles(tree);
}

function generateIconsComponents(
  tree: Tree,
  iconsLibPath: string,
  iconsSourcePath: string,
  iconsDestinationPath: string,
) {
  //remove icons
  fs.rmSync(path.join(workspaceRoot, iconsDestinationPath, 'icons'), {
    recursive: true,
    force: true,
  });

  const simpleIconsPackageJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    'simple-icons',
    'package.json',
  );
  const packageJson = JSON.parse(
    fs.readFileSync(simpleIconsPackageJsonPath, 'utf-8'),
  ) as { version: string; description: string };
  const packageVersion = packageJson.version;
  const [major] = packageVersion.split('.');
  const simpleIconsJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    'simple-icons',
    Number(major) >= 15 ? 'data' : '_data',
    'simple-icons.json',
  );
  const simpleIconsJson: SimpleIcon[] = readJsonFile(simpleIconsJsonPath);

  const exports = [];
  tree.children(iconsSourcePath).forEach((fileName) => {
    const svgFileContent = tree.read(
      path.join(iconsSourcePath, fileName),
      'utf-8',
    );

    const title = getSvgTitle(svgFileContent);
    const decodedTitle = decode(title);
    const angularComponentName = titleToComponentName(decodedTitle);

    const svgTagContent = getSvgTagContent(svgFileContent);

    const svgFileName = `${names(angularComponentName).fileName}-icon`;
    const svgClassName = `Si${names(angularComponentName).className}Icon`;
    const svgSelector = `si-${names(angularComponentName).fileName}-icon`;

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

    const simpleIcon = simpleIconsJson.find(
      (icon: SimpleIcon) => icon.title === decodedTitle,
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

  updateJson(tree, path.join(iconsLibPath, 'package.json'), (packageJson) => {
    packageJson.description = `Icons generated based on simple-icons v${packageVersion}`;
    return packageJson;
  });

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
