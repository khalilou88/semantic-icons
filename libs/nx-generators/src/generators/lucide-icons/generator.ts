import {
  Tree,
  formatFiles,
  generateFiles,
  names,
  workspaceRoot,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { LucideIconsGeneratorSchema } from './schema';

export async function lucideIconsGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: LucideIconsGeneratorSchema,
) {
  const iconsLibPath = 'libs/lucide-icons';

  const iconsSourcePath = 'node_modules/lucide-static/icons';
  const iconsDestinationPath = path.join(iconsLibPath, 'src');

  generateIconsComponents(tree, iconsSourcePath, iconsDestinationPath);

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

    const regex = /<svg[^>]*>([\s\S]*)<\/svg>/;
    const matches = regex.exec(svgFileContent) ?? [];
    let svgContent = matches.length > 1 ? matches[1] : '';

    // Define the prefix
    const prefix = 'svg:';

    // Add prefix to all SVG tags (like <circle>, <rect>, <path>, etc.)
    svgContent = svgContent.replace(
      /<(\/?)(circle|rect|path|line|polygon|polyline|ellipse|text)([^>]*)>/gi,
      (match, closing, tagName, attributes) => {
        return `<${closing}${prefix}${tagName}${attributes}>`;
      },
    );

    const svgFileName = `${names(name).fileName}-icon`;
    const svgClassName = `Si${names(name).className}Icon`;
    const svgSelector = `si-${names(name).fileName}-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    const o = { svgContent, svgFileName, svgClassName, svgSelector };

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'component'),
      path.join(iconsDestinationPath, 'icons'),
      o,
    );
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));
}

export default lucideIconsGenerator;
