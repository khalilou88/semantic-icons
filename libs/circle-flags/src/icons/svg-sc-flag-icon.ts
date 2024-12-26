import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sc-flag-icon',
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
        <path fill="#0052b4" d="M0 0v332l150.9-138.5L225.2 0z" />
        <path fill="#ffda44" d="M273.1 253.3 512 0H225.2L0 332v80.2z" />
        <path fill="#d80027" d="M512 0 0 412.2v50.4L277.9 390 512 256z" />
        <path fill="#eee" d="M0 462.6 512 256v133.5l-223.9 78.8L0 488.4z" />
        <path fill="#6da544" d="m512 389.5-512 99V512h512z" />
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
export class SvgScFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
