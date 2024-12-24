import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-dz-flag-icon',
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
        <path fill="#496e2d" d="M0 0h256l45.3 251.8L256 512H0z" />
        <path fill="#eee" d="M256 0h256v512H256z" />
        <g fill="#d80027">
          <path
            d="m311 206.9-21 29-34-11 21 28.8-21 29 34-11.1 21 29v-35.8l34-11.1-34-11z"
          />
          <path
            d="M277.2 328.3a72.3 72.3 0 1 1 34.5-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.5 8.7z"
          />
        </g>
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
export class SvgDzFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
