import * as synchronizedPrettier from '@prettier/sync';
import * as fs from 'fs';

export function formatFileSync(filePath: string): string {
  // Read the file synchronously
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return synchronizedPrettier.format(fileContent, { parser: 'angular-ts' });
}
