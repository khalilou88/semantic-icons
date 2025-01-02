import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { getSvgAttributes, getSvgContent } from '../../utils';
import { CircleFlagsGeneratorSchema } from './schema';

export async function circleFlagsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: CircleFlagsGeneratorSchema,
) {
  const iconsLibPath = 'libs/circle-flags';

  //1
  const iconsSourcePath = 'node_modules/circle-flags/flags';
  const iconsDestinationPath = path.join(iconsLibPath, 'src');

  generateIconsComponents(tree, iconsSourcePath, iconsDestinationPath);

  //2
  const otherIconsSourcePath = 'node_modules/circle-flags/flags/other';
  const otherIconsDestinationPath = path.join(iconsLibPath, 'other', 'src');

  generateIconsComponents(
    tree,
    otherIconsSourcePath,
    otherIconsDestinationPath,
  );

  //3
  const languagesIconsSourcePath = 'node_modules/circle-flags/flags/language';
  const languagesIconsDestinationPath = path.join(
    iconsLibPath,
    'language',
    'src',
  );

  generateIconsComponents(
    tree,
    languagesIconsSourcePath,
    languagesIconsDestinationPath,
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
    const filePath = path.join(iconsSourcePath, fileName);

    if (tree.isFile(filePath)) {
      const name = path.parse(fileName).name;

      const svgFileContent = tree.read(
        path.join(iconsSourcePath, fileName),
        'utf-8',
      );

      const svgContent = getSvgContent(svgFileContent);

      const svgFileName = `${names(name).fileName}-flag-icon`;
      const svgClassName = `Si${names(name).className}FlagIcon`;
      const svgSelector = `si-${names(name).fileName}-flag-icon`;

      exports.push(`export * from './icons/${svgFileName}';`);

      const svgAttributes = getSvgAttributes(svgFileContent);

      const width = svgAttributes.width;
      const height = svgAttributes.height;
      const fill = svgAttributes.fill;
      const stroke = svgAttributes.stroke;
      const strokeWidth = svgAttributes.strokeWidth;
      const strokeLinecap = svgAttributes.strokeLinecap;
      const strokeLinejoin = svgAttributes.strokeLinejoin;

      const o = {
        svgContent,
        svgFileName,
        svgClassName,
        svgSelector,
        width,
        height,
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
    }
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));
}

export default circleFlagsGenerator;
