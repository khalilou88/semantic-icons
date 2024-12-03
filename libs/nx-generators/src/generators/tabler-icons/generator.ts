import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import * as path from 'path';

import { TablerIconsGeneratorSchema } from './schema';

export async function tablerIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: TablerIconsGeneratorSchema,
) {
  const iconsDestinationPath = 'libs/tabler-icons';

  //1
  const filledIconsSourcePath = 'node_modules/@tabler/icons/icons/filled';
  const filledIconsDestinationPath = path.join(
    iconsDestinationPath,
    'filled',
    'src',
  );

  generateIconsComponents(
    tree,
    filledIconsSourcePath,
    filledIconsDestinationPath,
  );

  //2
  const outlineIconsSourcePath = 'node_modules/@tabler/icons/icons/outline';
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

  version(tree);
}

function version(tree: Tree) {
  const version = JSON.parse(
    tree.read('node_modules/@tabler/package.json').toString(),
  ).version;

  const packageJson = JSON.parse(
    tree.read('libs/tabler-icons/package.json').toString(),
  );
  packageJson.version = `0.5.0-${version}`;

  tree.write(path.join('libs/tabler-icons/package.json'), packageJson);
}

export default tablerIconsGenerator;
