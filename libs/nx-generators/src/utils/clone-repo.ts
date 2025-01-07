import simpleGit from 'simple-git';
import { dirSync } from 'tmp';

const repoUrl = 'https://github.com/google/material-design-icons.git';

// Create a temporary directory
const tempDir: string = dirSync({
  prefix: 'material-design-icons-',
  unsafeCleanup: true,
}).name;

// Initialize simple-git
const git = simpleGit();

async function cloneRepo(): Promise<void> {
  try {
    console.log(
      `Cloning repository from ${repoUrl} into temporary directory: ${tempDir}...`,
    );
    await git.clone(repoUrl, tempDir);
    console.log('Repository cloned successfully!');
    console.log(`Cloned files are available at: ${tempDir}`);
  } catch (error) {
    console.error('Failed to clone the repository:', (error as Error).message);
  }
}
