import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-za-flag-icon',
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
          d="m0 0 192 256L0 512h47l465-189v-34l-32-33 32-33v-34L47 0Z"
        />
        <path fill="#333" d="M0 142v228l140-114z" />
        <path fill="#ffda44" d="M192 256 0 95v47l114 114L0 370v47z" />
        <path
          fill="#6da544"
          d="M512 223H223L0 0v94l161 162L0 418v94l223-223h289z"
        />
        <path fill="#d80027" d="M512 0H47l189 189h276z" />
        <path fill="#0052b4" d="M512 512H47l189-189h276z" />
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
export class SvgZaFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
