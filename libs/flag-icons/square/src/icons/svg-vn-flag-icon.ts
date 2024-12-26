import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-vn-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-vn"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="vn-a">
          <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        clip-path="url(#vn-a)"
        transform="translate(-128)scale(.72249)"
      >
        <path fill="#da251d" d="M0 0h1063v708.7H0z" />
        <path
          fill="#ff0"
          d="m661 527.5-124-92.6-123.3 93.5 45.9-152-123.2-93.8 152.4-1.3L536 129.8 584.3 281l152.4.2-122.5 94.7z"
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
export class SvgVnFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
