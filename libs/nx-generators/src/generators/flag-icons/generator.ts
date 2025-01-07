import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { getSvgAttributes, getSvgTagContent } from '../../utils';
import { FlagIconsGeneratorSchema } from './schema';

export async function flagIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: FlagIconsGeneratorSchema,
) {
  const iconsDestinationPath = 'libs/flag-icons';

  //1
  const squareIconsSourcePath = 'node_modules/flag-icons/flags/1x1';
  const squareIconsDestinationPath = path.join(
    iconsDestinationPath,
    'square',
    'src',
  );

  generateIconsComponents(
    tree,
    squareIconsSourcePath,
    squareIconsDestinationPath,
  );

  //2
  const rectangleIconsSourcePath = 'node_modules/flag-icons/flags/4x3';
  const rectangleIconsDestinationPath = path.join(
    iconsDestinationPath,
    'rectangle',
    'src',
  );

  generateIconsComponents(
    tree,
    rectangleIconsSourcePath,
    rectangleIconsDestinationPath,
  );

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

    const svgTagContent = getSvgTagContent(svgFileContent);

    const svgFileName = `${names(name).fileName}-flag-icon`;
    const svgClassName = `Si${names(name).className}FlagIcon`;
    const svgSelector = `si-${names(name).fileName}-flag-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    const svgAttributes = getSvgAttributes(svgFileContent);

    const width = svgAttributes.width;
    const height = svgAttributes.height;
    const viewBox = svgAttributes.viewBox;
    const fill = svgAttributes.fill;
    const stroke = svgAttributes.stroke;
    const strokeWidth = svgAttributes.strokeWidth;
    const strokeLinecap = svgAttributes.strokeLinecap;
    const strokeLinejoin = svgAttributes.strokeLinejoin;

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
}

export default flagIconsGenerator;
