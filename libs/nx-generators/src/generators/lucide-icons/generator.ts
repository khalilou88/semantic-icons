import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { LucideIconsGeneratorSchema } from './schema';

export async function lucideIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: LucideIconsGeneratorSchema,
) {
  const iconsLibPath = 'libs/lucide-icons';

  const iconsSourcePath = 'node_modules/lucide-static/icons';
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

    const svgContent1 = tree.read(
      path.join(iconsSourcePath, fileName),
      'utf-8',
    );

    const re = /(<svg)/;
    const svgContent = svgContent1.replace(re, '$1 [class]="_class()"');

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

export default lucideIconsGenerator;
