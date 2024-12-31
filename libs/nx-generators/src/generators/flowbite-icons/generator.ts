import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { FlowbiteIconsGeneratorSchema } from './schema';

export async function flowbiteIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: FlowbiteIconsGeneratorSchema,
) {
  const iconsDestinationPath = 'libs/flowbite-icons';

  //1
  const filledIconsSourcePath = 'node_modules/flowbite-icons/src/solid';
  const filledIconsDestinationPath = path.join(
    iconsDestinationPath,
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    filledIconsSourcePath,
    filledIconsDestinationPath,
  );

  //2
  const outlineIconsSourcePath = 'node_modules/flowbite-icons/src/outline';
  const outlineIconsDestinationPath = path.join(
    iconsDestinationPath,
    'outline',
    'src',
  );

  generateIconsComponents(
    tree,
    outlineIconsSourcePath,
    outlineIconsDestinationPath,
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

  visitAllSvgFiles(tree, iconsSourcePath, iconsDestinationPath, exports, a);

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));
}

/**
 * Run the callback on all files inside the specified path
 */
function visitAllSvgFiles(
  tree: Tree,
  path: string,
  iconsDestinationPath: string,
  exports: string[],
  callback: (
    tree: Tree,
    filePath: string,
    iconsDestinationPath: string,
    exports: string[],
  ) => void,
) {
  tree.children(path).forEach((fileName) => {
    const filePath = `${path}/${fileName}`;
    if (!tree.isFile(filePath)) {
      visitAllSvgFiles(tree, filePath, iconsDestinationPath, exports, callback);
    } else {
      callback(tree, filePath, iconsDestinationPath, exports);
    }
  });
}

const a = function f(
  tree: Tree,
  filePath: string,
  iconsDestinationPath: string,
  exports: string[],
) {
  const name = path.parse(filePath).name;

  const svgContent1 = tree.read(path.join(filePath), 'utf-8');

  const re = /(<svg)/;
  const svgContent = svgContent1.replace(re, '$1 [class]="classInput()"');

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
};

export default flowbiteIconsGenerator;
