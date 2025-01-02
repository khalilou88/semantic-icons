import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
  writeJsonFile,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { getSvgAttributes, getSvgContent } from '../../utils';
import { HeroiconsGeneratorSchema } from './schema';

interface HeroIcon {
  size: 16 | 20 | 24;
  type: 'solid' | 'outline';
  name: string;
}

export async function heroiconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: HeroiconsGeneratorSchema,
) {
  const iconsDestinationPath = 'libs/heroicons';

  //1
  const solid16IconsSourcePath = 'node_modules/heroicons/16/solid';
  const solid16IconsDestinationPath = path.join(
    iconsDestinationPath,
    '16',
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    solid16IconsSourcePath,
    solid16IconsDestinationPath,
    16,
    'solid',
  );

  //2
  const solid20IconsSourcePath = 'node_modules/heroicons/20/solid';
  const solid20IconsDestinationPath = path.join(
    iconsDestinationPath,
    '20',
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    solid20IconsSourcePath,
    solid20IconsDestinationPath,
    20,
    'solid',
  );

  //3
  const outline24IconsSourcePath = 'node_modules/heroicons/24/outline';
  const outline24IconsDestinationPath = path.join(
    iconsDestinationPath,
    '24',
    'outline',
    'src',
  );

  generateIconsComponents(
    tree,
    outline24IconsSourcePath,
    outline24IconsDestinationPath,
    24,
    'outline',
  );

  //4
  const solid24IconsSourcePath = 'node_modules/heroicons/24/solid';
  const solid24IconsDestinationPath = path.join(
    iconsDestinationPath,
    '24',
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    solid24IconsSourcePath,
    solid24IconsDestinationPath,
    24,
    'solid',
  );

  await formatFiles(tree);
}

const icons: HeroIcon[] = [];

function generateIconsComponents(
  tree: Tree,
  iconsSourcePath: string,
  iconsDestinationPath: string,
  iconSize: 16 | 20 | 24,
  iconType: 'solid' | 'outline',
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

    icons.push({
      name: name,
      size: iconSize,
      type: iconType,
    });

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

  writeJsonFile(
    path.join(workspaceRoot, 'apps', 'showcase', 'public', 'heroicons.json'),
    icons,
  );
}

export default heroiconsGenerator;
