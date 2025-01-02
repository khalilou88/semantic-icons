import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SiCakeIcon } from '@semantic-icons/tabler-icons/outline';

@Component({
  selector: 'app-home-page',
  imports: [SiCakeIcon],
  template: `
    <svg class="text-blue-500 size-6" si-cake-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
