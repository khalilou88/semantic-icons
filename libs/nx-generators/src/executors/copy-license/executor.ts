import { ExecutorContext, workspaceRoot } from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { CopyLicenseExecutorSchema } from './schema';

export default async function runExecutor(
  options: CopyLicenseExecutorSchema,
  context: ExecutorContext,
): Promise<{ success: boolean }> {
  const src = path.join(workspaceRoot, 'LICENSE');

  const dest = path.join(workspaceRoot, 'dist', 'libs', context.projectName);

  let success = true;
  try {
    fs.copyFileSync(src, dest);
  } catch {
    success = false;
  }

  return { success };
}
