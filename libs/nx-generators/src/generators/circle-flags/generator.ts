import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import * as path from 'path';

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
    'languages',
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
  const exports = [];
  tree.children(iconsSourcePath).forEach((fileName) => {
    const name = path.parse(fileName).name;

    const svgContent1 = tree.read(
      path.join(iconsSourcePath, fileName),
      'utf-8',
    );

    const re = /(<svg)/;
    const svgContent = svgContent1.replace(re, '$1 [ngClass]="class()"');

    const svgClassName = `Svg${names(name).className}CircleFlagIcon`;
    const svgFileName = `svg-${names(name).fileName}-circle-flag-icon`;
    const svgSelector = `svg-${names(name).fileName}-circle-flag-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    const o = { svgContent, svgClassName, svgFileName, svgSelector };

    generateFiles(
      tree,
      path.join(__dirname, '..', 'heroicons', 'files', 'component'),
      path.join(iconsDestinationPath, 'icons'),
      o,
    );
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));
}

export default circleFlagsGenerator;
