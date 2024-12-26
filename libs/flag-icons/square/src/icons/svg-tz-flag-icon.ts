import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-tz-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-tz"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="tz-a">
          <path fill-opacity=".7" d="M102.9 0h496v496H103z" />
        </clipPath>
      </defs>
      <g clip-path="url(#tz-a)" transform="translate(-106.2)scale(1.0321)">
        <g fill-rule="evenodd" stroke-width="1pt">
          <path fill="#09f" d="M0 0h744.1v496H0z" />
          <path fill="#090" d="M0 0h744.1L0 496z" />
          <path
            fill="#000001"
            d="M0 496h165.4L744 103.4V0H578.7L0 392.7v103.4z"
          />
          <path
            fill="#ff0"
            d="M0 378 567 0h56L0 415.3v-37.2zm121.1 118 623-415.3V118L177 496z"
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
export class SvgTzFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
