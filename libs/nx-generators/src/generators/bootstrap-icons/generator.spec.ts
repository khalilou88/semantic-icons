import { Tree, readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { bootstrapIconsGenerator } from './generator';
import { BootstrapIconsGeneratorSchema } from './schema';

describe('bootstrap-icons generator', () => {
  let tree: Tree;
  const options: BootstrapIconsGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await bootstrapIconsGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
