import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SiGithubIcon, SiNpmIcon } from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-home-page',
  imports: [SiGithubIcon, SiNpmIcon],
  template: `
    <svg class="size-36" si-github-icon></svg>

    <svg class="size-36" si-npm-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
