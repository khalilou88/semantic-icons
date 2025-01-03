import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SiBirdIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiBirdIcon],
  template: `
    <svg class="text-blue-500 size-6" si-bird-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
