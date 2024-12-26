import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-us-co-flag-icon',
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
          fill="#0052b4"
          d="M0 0h512v167l-64 89 64 89v167H0V345l64-89-64-89Z"
        />
        <path fill="#eee" d="M0 167h512v178H0z" />
        <path
          fill="#d80027"
          d="M344.3 299.8A128 128 0 0 1 201.8 382 128 128 0 0 1 96 256a128 128 0 0 1 105.8-126 128 128 0 0 1 142.5 82.2L224 256z"
        />
        <circle cx="224" cy="256" r="64" fill="#ffda44" />
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
export class SvgUsCoFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
