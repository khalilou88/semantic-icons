import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-py-flag-icon',
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
          fill="#eee"
          d="m0 144.7 255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"
        />
        <path fill="#d80027" d="M0 0h512v144.7H0z" />
        <path fill="#0052b4" d="M0 367.3h512V512H0z" />
        <path
          fill="#6da544"
          d="m319 182-23.6 23.5a55.5 55.5 0 0 1-39.4 95 55.7 55.7 0 0 1-39.3-95L193 182a89 89 0 1 0 126 0z"
        />
        <path
          fill="#ffda44"
          d="m256 211.5 8.3 25.5H291l-21.7 15.8 8.3 25.5-21.7-15.8-21.7 15.8 8.3-25.5-21.7-15.8h26.8z"
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
export class SvgPyFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
