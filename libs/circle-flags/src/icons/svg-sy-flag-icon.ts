import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sy-flag-icon',
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
          d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
        />
        <path fill="#d80027" d="M0 0h512v167H0z" />
        <path fill="#333" d="M0 345h512v167H0z" />
        <path
          fill="#6da544"
          d="m153 194.8 13.8 42.5h44.7l-36.2 26.3 13.8 42.5-36.1-26.3-36.2 26.3 13.8-42.5-36.2-26.3h44.7zm206 0 13.9 42.5h44.7l-36.2 26.3 13.8 42.5-36.2-26.3-36.1 26.3 13.8-42.5-36.2-26.3h44.7z"
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
export class SvgSyFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
