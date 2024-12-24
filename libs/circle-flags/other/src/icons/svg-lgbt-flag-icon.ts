import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-lgbt-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#9c27b0" d="m0 425 256-32 256 32v87H0Z" />
        <path fill="#0052b4" d="m0 340 256-32 256 32v85H0Z" />
        <path fill="#6da544" d="m0 255 256-32 256 32v85H0Z" />
        <path fill="#ffda44" d="m0 170 256-32 256 32v85H0Z" />
        <path fill="#ff9811" d="m0 85 256-32 256 32v85H0Z" />
        <path fill="#d80027" d="M0 0h512v85H0z" />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLgbtFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
