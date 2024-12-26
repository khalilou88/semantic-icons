import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-re-flag-icon',
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
          d="M64 0 0 64v160l32 32-32 32v224l256-32 256 32V288l-32-32 32-32V64L448 0H288l-32 32-32-32H64z"
        />
        <path fill="#d80027" d="M256 256 0 512h512z" />
        <path fill="#ffda44" d="M0 224v64l512-64v64z" />
        <path
          fill="#ffda44"
          d="M256 256 0 64V0h64zm0 0L448 0h64v64zm0 0L224 0h64z"
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
export class SvgReFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
