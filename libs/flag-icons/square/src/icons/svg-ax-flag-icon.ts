import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ax-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-ax"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="ax-a">
          <path fill-opacity=".7" d="M166 0h850v850H166z" />
        </clipPath>
      </defs>
      <g clip-path="url(#ax-a)" transform="translate(-100)scale(.6024)">
        <path fill="#0053a5" d="M0 0h1300v850H0z" />
        <g fill="#ffce00">
          <path d="M400 0h250v850H400z" />
          <path d="M0 300h1300v250H0z" />
        </g>
        <g fill="#d21034">
          <path d="M475 0h100v850H475z" />
          <path d="M0 375h1300v100H0z" />
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
export class SvgAxFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
