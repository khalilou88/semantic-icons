import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-tg-flag-icon',
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
        <path
          fill="#496e2d"
          d="M256 0h256v102.4L483.8 151l28.2 53.8v102.4l-30.5 50.7 30.5 51.7V512H0V409.6l34.7-51L0 307.1z"
        />
        <path fill="#ff9811" d="M0 44.5v423V256z" />
        <path
          fill="#ffda44"
          d="M231.7 102.4v102.4H512V102.4zM0 307.2v102.4h512V307.2H256l-128.2-26.4z"
        />
        <path fill="#d80027" d="M256 307.2V0H0v307.2z" />
        <path
          fill="#eee"
          d="m141.4 122.4 16.5 51h53.7L168 205l16.6 51-43.4-31.5L98 256l16.5-51L71 173.5h53.7z"
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
export class SvgTgFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
