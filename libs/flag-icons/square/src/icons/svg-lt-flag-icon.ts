import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-lt-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-lt"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        transform="scale(.51314 1.0322)"
      >
        <rect
          width="1063"
          height="708.7"
          fill="#006a44"
          rx="0"
          ry="0"
          transform="scale(.93865 .69686)"
        />
        <rect
          width="1063"
          height="236.2"
          y="475.6"
          fill="#c1272d"
          rx="0"
          ry="0"
          transform="scale(.93865 .69686)"
        />
        <path fill="#fdb913" d="M0 0h997.8v164.6H0z" />
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
export class SvgLtFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
