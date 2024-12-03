import { Tree } from '@nx/devkit';

export function version(
  tree: Tree,
  sourceLibPath: string,
  destinationLibPath: string,
) {
  const packageJsonPath = `${destinationLibPath}/package.json`;

  const version = JSON.parse(
    tree.read(`${sourceLibPath}/package.json`).toString(),
  ).version;

  const packageJson = JSON.parse(tree.read(packageJsonPath).toString());
  packageJson.version = version;

  tree.write(packageJsonPath, packageJson);
}
