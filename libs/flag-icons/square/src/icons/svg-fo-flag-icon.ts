import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-fo-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-fo"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="fo-a">
          <path fill-opacity=".7" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" stroke-width="0" clip-path="url(#fo-a)">
        <path fill="#fff" d="M-78 0h708.2v512H-78z" />
        <path
          fill="#003897"
          d="M-75.9 199.1h198.3V0h113.3v199.1h396.6V313H235.7v199H122.4V312.9H-76z"
        />
        <path
          fill="#d72828"
          d="M-75.9 227.6h226.6V0h56.7v227.6h424.9v56.9h-425V512h-56.6V284.4H-75.9z"
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
export class SvgFoFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
