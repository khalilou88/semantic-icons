import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';
import simpleGit from 'simple-git';
import { dirSync } from 'tmp';

import { getSvgAttributes, getSvgTagContent } from '../../utils';
import { MaterialDesignIconsGeneratorSchema } from './schema';

const repoUrl = 'https://github.com/google/material-design-icons.git';

// Create a temporary directory
const tempDir: string = dirSync({
  prefix: 'material-design-icons-',
  unsafeCleanup: true,
}).name;

// Initialize simple-git
const git = simpleGit();

async function cloneRepo(): Promise<void> {
  try {
    console.log(
      `Cloning repository from ${repoUrl} into temporary directory: ${tempDir}...`,
    );
    await git.clone(repoUrl, tempDir);
    console.log('Repository cloned successfully!');
    console.log(`Cloned files are available at: ${tempDir}`);
  } catch (error) {
    console.error('Failed to clone the repository:', (error as Error).message);
  }
}

export async function materialDesignIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: MaterialDesignIconsGeneratorSchema,
) {
  cloneRepo();

  const iconsDestinationPath = 'libs/material-design-icons';

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

  const svgFileContent = tree.read(path.join(filePath), 'utf-8');

  const svgTagContent = getSvgTagContent(svgFileContent);

  const svgFileName = `${names(name).fileName}-icon`;
  const svgClassName = `Si${names(name).className}Icon`;
  const svgSelector = `si-${names(name).fileName}-icon`;

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
};

export default materialDesignIconsGenerator;
