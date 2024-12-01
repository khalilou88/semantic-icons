import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import * as path from 'path';

import { BootstrapIconsGeneratorSchema } from './schema';

export async function bootstrapIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: BootstrapIconsGeneratorSchema,
) {
  const iconsLibPath = 'libs/bootstrap-icons';

  const iconsSourcePath = 'node_modules/bootstrap-icons/icons';
  const iconsDestinationPath = path.join(iconsLibPath, 'src');

  generateIconsComponents(tree, iconsSourcePath, iconsDestinationPath);

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

    const svgClassName = `Svg${names(name).className}Icon`;
    const svgFileName = `svg-${names(name).fileName}-icon`;
    const svgSelector = `svg-${names(name).fileName}-icon`;

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

export default bootstrapIconsGenerator;
