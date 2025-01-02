import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { getSvgContent } from '../../utils';
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
    'currentColor',
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
    'none',
  );

  await formatFiles(tree);
}

function generateIconsComponents(
  tree: Tree,
  iconsSourcePath: string,
  iconsDestinationPath: string,
  fill: string,
) {
  //remove icons
  fs.rmSync(path.join(workspaceRoot, iconsDestinationPath, 'icons'), {
    recursive: true,
    force: true,
  });

  const exports = [];

  visitAllSvgFiles(
    tree,
    iconsSourcePath,
    iconsDestinationPath,
    exports,
    fill,
    a,
  );

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
  fill: string,
  callback: (
    tree: Tree,
    filePath: string,
    iconsDestinationPath: string,
    exports: string[],
    fill: string,
  ) => void,
) {
  tree.children(path).forEach((fileName) => {
    const filePath = `${path}/${fileName}`;
    if (!tree.isFile(filePath)) {
      visitAllSvgFiles(
        tree,
        filePath,
        iconsDestinationPath,
        exports,
        fill,
        callback,
      );
    } else {
      callback(tree, filePath, iconsDestinationPath, exports, fill);
    }
  });
}

const a = function f(
  tree: Tree,
  filePath: string,
  iconsDestinationPath: string,
  exports: string[],
  fill: string,
) {
  const name = path.parse(filePath).name;

  const svgFileContent = tree.read(path.join(filePath), 'utf-8');

  const svgContent = getSvgContent(svgFileContent);

  const svgFileName = `${names(name).fileName}-icon`;
  const svgClassName = `Si${names(name).className}Icon`;
  const svgSelector = `si-${names(name).fileName}-icon`;

  exports.push(`export * from './icons/${svgFileName}';`);

  const o = { svgContent, svgFileName, svgClassName, svgSelector, fill };

  generateFiles(
    tree,
    path.join(__dirname, 'files', 'component'),
    path.join(iconsDestinationPath, 'icons'),
    o,
  );
};

export default flowbiteIconsGenerator;
