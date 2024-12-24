import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-an-flag-icon',
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
          d="M0 0h171l85 32 85-32h171v171l-32 85 32 85v171H341l-85-32-85 32H0V341l32-85-32-85Z"
        />
        <path fill="#d80027" d="M171 0h170v512H171z" />
        <path fill="#0052b4" d="M512 171v170H0V171z" />
        <path
          fill="#eee"
          d="m236 247 52-37h-64l52 37-20-61zm-45 79 52-37h-64l52 37-20-61zm90 0 52-37h-64l52 37-20-61zm74-47 52-37h-64l52 37-20-61zm-238 0 52-37h-64l52 37-20-61z"
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
export class SvgAnFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
