import * as synchronizedPrettier from '@prettier/sync';

export function formatContentSync(fileContent: string): string {
  return synchronizedPrettier.format(fileContent, { parser: 'angular-ts' });
}
