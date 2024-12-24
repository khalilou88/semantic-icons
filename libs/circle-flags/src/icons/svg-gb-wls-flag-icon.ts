import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-gb-wls-flag-icon',
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
        <path fill="#6da544" d="m0 256 256-64 256 64v256H0Z" />
        <path fill="#eee" d="M0 0h512v256H0Z" />
        <path
          fill="#d80027"
          d="M166 149c-12 0-21 9-21 21h-14c-19 0-35 15-35 34h25c3 8 10 14 17 14h7v48l2 14-16 5c-1-15-13-26-27-26-4 0-8 3-8 6v56c0 4 4 7 8 7l12-3 56-15c6 3 14 5 22 5h6v14h-13c-16 0-28 12-28 27 0 4 3 7 7 7h62c4 0 7-3 7-7v-41l9-1h49l9 15h-5c-15 0-27 12-27 27 0 4 3 7 7 7h69c4 0 7-3 7-7 0-6-2-11-5-16l-15-26h23c29 0 52-23 52-52v-3l8 2h6c3-3 4-7 2-10l-28-40-1-1c-3-2-8-2-10 1l-27 40c-1 2-2 4-1 6 1 4 5 6 9 5l8-3v3c0 10-8 18-18 18h-37c12-12 22-26 28-41l25-57 1-5c0-8-6-14-14-14h-95c-15 0-28 12-28 27v17a11 11 0 1 1-22 0v-31c12-4 21-14 21-27h-41z"
        />
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
export class SvgGbWlsFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
