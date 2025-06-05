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
import { TablerIconsGeneratorSchema } from './schema';

export async function tablerIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: TablerIconsGeneratorSchema,
) {
  const iconsLibPath = 'libs/tabler-icons';

  //1
  const filledIconsSourcePath = 'node_modules/@tabler/icons/icons/filled';
  const filledIconsDestinationPath = path.join(iconsLibPath, 'filled', 'src');

  generateIconsComponents(
    tree,
    iconsLibPath,
    filledIconsSourcePath,
    filledIconsDestinationPath,
  );

  //2
  const outlineIconsSourcePath = 'node_modules/@tabler/icons/icons/outline';
  const outlineIconsDestinationPath = path.join(iconsLibPath, 'outline', 'src');

  generateIconsComponents(
    tree,
    iconsLibPath,
    outlineIconsSourcePath,
    outlineIconsDestinationPath,
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
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));

  const tablerIconsPackageJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    '@tabler',
    'package.json',
  );
  const packageJson = JSON.parse(
    fs.readFileSync(tablerIconsPackageJsonPath, 'utf-8'),
  ) as { version: string; description: string };
  const packageVersion = packageJson.version;

  updateJson(tree, path.join(iconsLibPath, 'package.json'), (packageJson) => {
    packageJson.description = `Icons generated based on tabler-icons v${packageVersion}`;
    return packageJson;
  });
}

export default tablerIconsGenerator;
