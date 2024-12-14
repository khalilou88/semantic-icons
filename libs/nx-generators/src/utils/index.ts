import { Tree } from '@nx/devkit';
import * as path from 'path';

export function version(
  tree: Tree,
  sourceLibPath: string,
  destinationLibPath: string,
) {
  const packageJsonPath = path.join(destinationLibPath, 'package.json');

  const version = JSON.parse(
    tree.read(path.join(sourceLibPath, 'package.json'), 'utf-8'),
  ).version;

  const packageJson = JSON.parse(tree.read(packageJsonPath).toString());
  packageJson.version = version;

  tree.write(packageJsonPath, packageJson);
}
