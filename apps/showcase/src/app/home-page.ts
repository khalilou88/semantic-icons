import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SiFrFlagIcon } from '@semantic-icons/circle-flags';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiFrFlagIcon],
  template: `
    <svg class="size-36" si-fr-flag-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
