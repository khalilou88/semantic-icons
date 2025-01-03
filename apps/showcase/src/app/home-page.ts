import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SiIt42FlagIcon } from '@semantic-icons/circle-flags';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiIt42FlagIcon],
  template: `
    <svg class="size-36" si-it-42-flag-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
