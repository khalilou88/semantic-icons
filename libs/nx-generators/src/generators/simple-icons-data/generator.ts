import {
  Tree,
  formatFiles,
  readJsonFile,
  workspaceRoot,
  writeJsonFile,
} from '@nx/devkit';
import * as path from 'path';
import { SimpleIcon } from 'simple-icons';

import { SimpleIconsDataGeneratorSchema } from './schema';

export async function simpleIconsDataGenerator(
  tree: Tree,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: SimpleIconsDataGeneratorSchema,
) {
  const simpleIconsJsonPath = path.join(
    workspaceRoot,
    'node_modules',
    'simple-icons',
    'data',
    'simple-icons.json',
  );
  const simpleIconsJson: SimpleIcon[] = readJsonFile(simpleIconsJsonPath);

  const simpleIconTitles = simpleIconsJson.map(
    (icon: SimpleIcon) => icon.title,
  );

  writeJsonFile(
    path.join(
      workspaceRoot,
      'apps',
      'showcase',
      'public',
      'simple-icons-titles.json',
    ),
    simpleIconTitles,
  );

  await formatFiles(tree);
}

export default simpleIconsDataGenerator;
