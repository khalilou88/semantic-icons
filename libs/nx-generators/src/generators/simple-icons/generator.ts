import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { getSvgAttributes, getSvgContent } from '../../utils';
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
    const name = path.parse(fileName).name;

    const svgFileContent = tree.read(
      path.join(iconsSourcePath, fileName),
      'utf-8',
    );

    const svgContent = getSvgContent(svgFileContent);

    const svgFileName = `${names(name).fileName}-icon`;
    const svgClassName = `Si${names(name).className}Icon`;
    const svgSelector = `si-${names(name).fileName}-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    const svgAttributes = getSvgAttributes(svgFileContent);

    const width = svgAttributes.width;
    const height = svgAttributes.height;
    const viewBox = svgAttributes.viewBox;
    // const fill = svgAttributes.fill;
    const stroke = svgAttributes.stroke;
    const strokeWidth = svgAttributes.strokeWidth;
    const strokeLinecap = svgAttributes.strokeLinecap;
    const strokeLinejoin = svgAttributes.strokeLinejoin;

    //Colors
    const title = getSvgTitle(svgFileContent);
    const simpleIconsJsonPath = path.join(
      workspaceRoot,
      'node_modules',
      'simple-icons',
      '_data',
      'simple-icons.json',
    );
    const simpleIconsJson: SimpleIcon[] = readJsonFile(simpleIconsJsonPath);
    const simpleIcon = simpleIconsJson.find(
      (icon: SimpleIcon) => icon.title === title,
    );

    if (!simpleIcon) {
      console.log(`Cannot find Icon with Title ${title}`);
    }

    const fill = simpleIcon?.hex;

    const o = {
      svgContent,
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
}

export default simpleIconsGenerator;
