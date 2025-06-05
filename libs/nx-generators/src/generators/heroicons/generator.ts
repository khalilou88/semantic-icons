import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  updateJson,
  workspaceRoot,
  writeJsonFile,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { Icon } from '../../types';
import { getSvgAttributes, getSvgTagContent } from '../../utils';
import { formatContentSync } from '../../utils/format-content-sync';
import { HeroiconsGeneratorSchema } from './schema';

export async function heroiconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: HeroiconsGeneratorSchema,
) {
  const iconsLibPath = 'libs/heroicons';

  //1
  const solid16IconsSourcePath = 'node_modules/heroicons/16/solid';
  const solid16IconsDestinationPath = path.join(
    iconsLibPath,
    '16',
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    iconsLibPath,
    solid16IconsSourcePath,
    solid16IconsDestinationPath,
    16,
    'solid',
  );

  //2
  const solid20IconsSourcePath = 'node_modules/heroicons/20/solid';
  const solid20IconsDestinationPath = path.join(
    iconsLibPath,
    '20',
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    iconsLibPath,
    solid20IconsSourcePath,
    solid20IconsDestinationPath,
    20,
    'solid',
  );

  //3
  const outline24IconsSourcePath = 'node_modules/heroicons/24/outline';
  const outline24IconsDestinationPath = path.join(
    iconsLibPath,
    '24',
    'outline',
    'src',
  );

  generateIconsComponents(
    tree,
    iconsLibPath,
    outline24IconsSourcePath,
    outline24IconsDestinationPath,
    24,
    'outline',
  );

  //4
  const solid24IconsSourcePath = 'node_modules/heroicons/24/solid';
  const solid24IconsDestinationPath = path.join(
    iconsLibPath,
    '24',
    'solid',
    'src',
  );

  generateIconsComponents(
    tree,
    iconsLibPath,
    solid24IconsSourcePath,
    solid24IconsDestinationPath,
    24,
    'solid',
  );

  await formatFiles(tree);
}

const icons: Icon[] = [];

function generateIconsComponents(
  tree: Tree,
  iconsLibPath: string,
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

    const formattedContent = formatContentSync(
      tree.read(
        path.join(iconsDestinationPath, 'icons', `${svgFileName}.ts`),
        'utf-8',
      ),
    );

    icons.push({
      name: name,
      size: iconSize,
      type: iconType,
      id: `heroicons-${iconSize}-${iconType}-${name}`,
      svgContent: svgFileContent,
      tags: [],
      componentContent: formattedContent,
    });
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));

  const heroIconsPackageJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    'heroicons',
    'package.json',
  );
  const packageJson = JSON.parse(
    fs.readFileSync(heroIconsPackageJsonPath, 'utf-8'),
  ) as { version: string; description: string };
  const packageVersion = packageJson.version;

  updateJson(tree, path.join(iconsLibPath, 'package.json'), (packageJson) => {
    packageJson.description = `Icons generated based on heroicons v${packageVersion}`;
    return packageJson;
  });

  writeJsonFile(
    path.join(workspaceRoot, 'apps', 'showcase', 'public', 'heroicons.json'),
    icons,
  );
}

export default heroiconsGenerator;
