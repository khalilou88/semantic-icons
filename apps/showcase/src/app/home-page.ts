import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SiAcmIcon } from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-home-page',
  imports: [SiAcmIcon],
  template: `
    <svg class="size-36" si-acm-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
