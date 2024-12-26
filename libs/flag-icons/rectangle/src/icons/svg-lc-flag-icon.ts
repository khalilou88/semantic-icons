import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-lc-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-lc"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#65cfff" d="M0 0h640v480H0z" />
        <path fill="#fff" d="m318.9 42 162.7 395.3-322.6.9z" />
        <path fill="#000001" d="m319 96.5 140.8 340-279 .8z" />
        <path fill="#ffce00" d="m318.9 240.1 162.7 197.6-322.6.5z" />
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
export class SvgLcFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
