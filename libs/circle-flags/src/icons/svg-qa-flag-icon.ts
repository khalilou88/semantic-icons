import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-qa-flag-icon',
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
        <path fill="#eee" d="M0 0h173l61 255.8L173.4 512H0z" />
        <path
          fill="#751a46"
          d="m173 0-72.7 30.8L176 63l-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.1 75.7 32.2-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.2 75.7 32.1-75.7 32.2 73.1 31H512V0z"
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
export class SvgQaFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
