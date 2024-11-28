import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SvgMaIcon } from '@semantic-icons/flag-icons/square';
import { SvgBellIcon } from '@semantic-icons/flowbite-icons/solid';

@Component({
  selector: 'app-icon-page',
  standalone: true,
  imports: [SvgBellIcon, SvgMaIcon],
  template: `
    <svg-bell-icon class="size-6 text-blue-500" />
    <svg-ma-icon class="size-36" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPageComponent {}
