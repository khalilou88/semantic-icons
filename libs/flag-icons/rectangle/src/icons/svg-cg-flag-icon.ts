import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-cg-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-cg"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="cg-a">
          <path fill-opacity=".7" d="M-79.5 32h640v480h-640z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#cg-a)"
        transform="translate(79.5 -32)"
      >
        <path fill="#ff0" d="M-119.5 32h720v480h-720z" />
        <path fill="#00ca00" d="M-119.5 32v480l480-480z" />
        <path fill="red" d="M120.5 512h480V32z" />
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
export class SvgCgFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
