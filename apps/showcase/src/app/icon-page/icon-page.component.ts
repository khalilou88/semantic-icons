import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SvgBellIcon } from '@semantic-icons/flowbite-icons/solid';

@Component({
  selector: 'app-icon-page',
  standalone: true,
  imports: [SvgBellIcon],
  template: `
    <svg-bell-icon class="size-6 text-blue-500" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPageComponent {}
