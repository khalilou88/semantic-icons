import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-mr-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-mr"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#cd2a3e" d="M0 0h512v512H0z" />
      <path fill="#006233" d="M0 76.8h512v358.4H0z" />
      <path
        class="mr-st1"
        fill="#ffc400"
        d="M416 164.9a160 160 0 0 1-320 0 165.2 165.2 0 0 0-5.4 41.8A165.4 165.4 0 1 0 416 165z"
      />
      <path
        fill="#ffc400"
        d="m256 100-14.4 44.3h-46.5l37.6 27.3-14.3 44.2 37.6-27.3 37.6 27.3-14.4-44.2 37.7-27.3h-46.5z"
      />
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
export class SvgMrFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
