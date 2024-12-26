import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-soviet-union-flag-icon',
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
        <path fill="#d80027" d="M0 0h512v512H0z" />
        <path
          fill="#ffda44"
          d="m90 243 25 25 21-21 115 115 18-18-115-115 29-29-44-6z"
        />
        <path
          fill="#ffda44"
          d="M173 166a93 93 0 0 1 44 40c22 38 16 83-14 100-22 13-52 7-75-15l-58 53 18 18 42-46c27 24 63 30 90 14 36-21 45-73 20-116a95 95 0 0 0-67-48zm-43-6 105-77H105l105 77-40-124z"
        />
        <path fill="#d80027" d="m153 129 45-34h-56l45 34-17-54z" />
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
export class SvgSovietUnionFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
