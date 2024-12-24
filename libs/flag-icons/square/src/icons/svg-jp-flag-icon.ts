import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-jp-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-jp"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="jp-a">
          <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#jp-a)"
        transform="translate(-128)scale(.72249)"
      >
        <path fill="#fff" d="M0 0h1063v708.7H0z" />
        <circle
          cx="523.1"
          cy="344.1"
          r="194.9"
          fill="#bc002d"
          transform="translate(-59.7 -34.5)scale(1.1302)"
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
export class SvgJpFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
