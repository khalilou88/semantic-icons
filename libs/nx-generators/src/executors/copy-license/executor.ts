import { ExecutorContext, logger, workspaceRoot } from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { CopyLicenseExecutorSchema } from './schema';

export default async function runExecutor(
  options: CopyLicenseExecutorSchema,
  context: ExecutorContext,
): Promise<{ success: boolean }> {
  logger.info('Copy License');
  const src = path.join(workspaceRoot, 'LICENSE');

  const dest = path.join(
    workspaceRoot,
    'dist',
    'libs',
    context.projectName,
    'LICENSE',
  );

  let success = true;
  try {
    fs.copyFileSync(src, dest);
  } catch (err) {
    logger.error(`Error: ${JSON.stringify(err)}`);
    success = false;
  }

  return { success };
}
