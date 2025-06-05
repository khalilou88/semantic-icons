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
import { BootstrapIconsGeneratorSchema } from './schema';

export async function bootstrapIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: BootstrapIconsGeneratorSchema,
) {
  const iconsLibPath = 'libs/bootstrap-icons';

  const iconsSourcePath = 'node_modules/bootstrap-icons/icons';
  const iconsDestinationPath = path.join(iconsLibPath, 'src');

  generateIconsComponents(
    tree,
    iconsLibPath,
    iconsSourcePath,
    iconsDestinationPath,
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

  const bootstrapIconsPackageJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    'bootstrap-icons',
    'package.json',
  );
  const packageJson = JSON.parse(
    fs.readFileSync(bootstrapIconsPackageJsonPath, 'utf-8'),
  ) as { version: string; description: string };
  const packageVersion = packageJson.version;

  updateJson(tree, path.join(iconsLibPath, 'package.json'), (packageJson) => {
    packageJson.description = `Icons generated based on bootstrap-icons v${packageVersion}`;
    return packageJson;
  });
}

export default bootstrapIconsGenerator;
