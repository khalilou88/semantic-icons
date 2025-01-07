import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { getSvgAttributes, getSvgTagContent } from '../../utils';
import { MaterialDesignIconsGeneratorSchema } from './schema';

export async function materialDesignIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: MaterialDesignIconsGeneratorSchema,
) {
  const iconsDestinationPath = 'libs/material-design-icons';

  //1
  const filledIconsSourcePath =
    'node_modules/@material-design-icons/svg/filled';
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
  const outlinedIconsSourcePath =
    'node_modules/@material-design-icons/svg/outlined';
  const outlinedIconsDestinationPath = path.join(
    iconsDestinationPath,
    'outlined',
    'src',
  );

  generateIconsComponents(
    tree,
    outlinedIconsSourcePath,
    outlinedIconsDestinationPath,
  );

  //3
  const roundIconsSourcePath = 'node_modules/@material-design-icons/svg/round';
  const roundIconsDestinationPath = path.join(
    iconsDestinationPath,
    'round',
    'src',
  );

  generateIconsComponents(
    tree,
    roundIconsSourcePath,
    roundIconsDestinationPath,
  );

  //4
  const sharpIconsSourcePath = 'node_modules/@material-design-icons/svg/sharp';
  const sharpIconsDestinationPath = path.join(
    iconsDestinationPath,
    'sharp',
    'src',
  );

  generateIconsComponents(
    tree,
    sharpIconsSourcePath,
    sharpIconsDestinationPath,
  );

  //5
  const twoToneIconsSourcePath =
    'node_modules/@material-design-icons/svg/two-tone';
  const twoToneIconsDestinationPath = path.join(
    iconsDestinationPath,
    'two-tone',
    'src',
  );

  generateIconsComponents(
    tree,
    twoToneIconsSourcePath,
    twoToneIconsDestinationPath,
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
}

export default materialDesignIconsGenerator;
