import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ps-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-ps"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="ps-a">
          <path fill-opacity=".7" d="M237.1 0h493.5v493.5H237.1z" />
        </clipPath>
      </defs>
      <g clip-path="url(#ps-a)" transform="translate(-246)scale(1.0375)">
        <g fill-rule="evenodd" stroke-width="1pt">
          <path fill="#000001" d="M0 0h987v164.5H0z" />
          <path fill="#fff" d="M0 164.5h987V329H0z" />
          <path fill="#090" d="M0 329h987v164.5H0z" />
          <path fill="red" d="m0 493.5 493.5-246.8L0 0z" />
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
export class SvgPsFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
