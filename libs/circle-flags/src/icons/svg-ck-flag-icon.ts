import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ck-flag-icon',
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
        <path fill="#0052b4" d="M256 0h256v512H0V256Z" />
        <path
          fill="#eee"
          d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
        />
        <path
          fill="#d80027"
          d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
        />
        <path
          fill="#eee"
          d="m345 256 4.8 14.6H365l-12.4 9 4.7 14.6-12.4-9-12.4 9 4.8-14.6-12.4-9h15.3zm-63 26 13.7 7 10.9-10.8-2.4 15.1 13.6 7-15.1 2.4-2.4 15.1-7-13.6-15.1 2.4 10.8-10.9zm-26 63 14.6-4.7V325l9 12.4 14.6-4.8-9 12.4 9 12.4-14.6-4.7-9 12.4v-15.3zm26 63 7-13.6-10.8-10.9 15.1 2.4 7-13.6 2.4 15 15.1 2.5-13.6 7 2.4 15-10.9-10.8zm63 26-4.7-14.5H325l12.4-9-4.8-14.6 12.4 9 12.4-9-4.7 14.6 12.4 9h-15.3zm63-26-13.6-7-10.9 10.9 2.4-15.2-13.6-7 15-2.3 2.5-15.1 7 13.6 15-2.4-10.8 10.9zm26-63-14.5 4.8V365l-9-12.4-14.6 4.7 9-12.4-9-12.4 14.6 4.8 9-12.4v15.3zm-26-63-7 13.7 10.9 10.9-15.2-2.4-7 13.6-2.3-15.1-15.1-2.4 13.6-7-2.4-15.1 10.9 10.8z"
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
export class SvgCkFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
