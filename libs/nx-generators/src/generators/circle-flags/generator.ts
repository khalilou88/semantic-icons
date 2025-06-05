import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  updateJson,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { getSvgAttributes, getSvgTagContent } from '../../utils';
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

  generateIconsComponents(
    tree,
    iconsLibPath,
    iconsSourcePath,
    iconsDestinationPath,
  );

  //2
  const otherIconsSourcePath = 'node_modules/circle-flags/flags/other';
  const otherIconsDestinationPath = path.join(iconsLibPath, 'other', 'src');

  generateIconsComponents(
    tree,
    iconsLibPath,
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
    iconsLibPath,
    languagesIconsSourcePath,
    languagesIconsDestinationPath,
  );

  await formatFiles(tree);
}

function generateIconsComponents(
  tree: Tree,
  iconsLibPath: string,
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

      const svgTagContent = getSvgTagContent(svgFileContent);

      const svgFileName = `${names(name).fileName}-flag-icon`;
      const svgClassName = `Si${names(name).className}FlagIcon`;
      const svgSelector = `si-${names(name).fileName}-flag-icon`;

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
    }
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));

  const circleFlagsIconsPackageJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    'circle-flags',
    'package.json',
  );
  const packageJson = JSON.parse(
    fs.readFileSync(circleFlagsIconsPackageJsonPath, 'utf-8'),
  ) as { version: string; description: string };
  const packageVersion = packageJson.version;

  updateJson(tree, path.join(iconsLibPath, 'package.json'), (packageJson) => {
    packageJson.description = `Icons generated based on circle-flags v${packageVersion}`;
    return packageJson;
  });
}

export default circleFlagsGenerator;
