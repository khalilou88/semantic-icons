import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { SvgBalloonIcon } from '@semantic-icons/bootstrap-icons';
import { SvgMaFlagIcon } from '@semantic-icons/flag-icons/square';
import { SvgBellIcon } from '@semantic-icons/flowbite-icons/solid';
import { SvgBirdIcon } from '@semantic-icons/lucide-icons';

@Component({
  selector: 'app-icon-page',
  standalone: true,
  imports: [SvgBellIcon, SvgMaFlagIcon, SvgBirdIcon, SvgBalloonIcon],
  template: `
    <svg-bell-icon class="size-6 text-blue-500" />
    <svg-bird-icon class="size-6 text-blue-500" />
    <svg-ma-flag-icon class="size-36" />
    <svg-balloon-icon class="text-blue-500 size-6" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPageComponent {}
