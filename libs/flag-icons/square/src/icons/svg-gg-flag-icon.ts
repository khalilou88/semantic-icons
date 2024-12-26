import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-gg-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-gg"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#e8112d" d="M192 0h128v512H192z" />
      <path fill="#e8112d" d="M0 187.7h512v136.6H0z" />
      <path
        id="gg-a"
        fill="#f9dd16"
        d="m46 305.8 23.3-25h210v-49.7h-210L46 206.2z"
      />
      <use
        xlink:href="#gg-a"
        width="36"
        height="24"
        transform="matrix(0 1.06667 -.9375 0 496 -17)"
      />
      <use
        xlink:href="#gg-a"
        width="36"
        height="24"
        transform="matrix(0 -1.06667 .9375 0 16 529)"
      />
      <use
        xlink:href="#gg-a"
        width="36"
        height="24"
        transform="rotate(180 256 256)"
      />
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
export class SvgGgFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
