import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ie-flag-icon',
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
        <path fill="#eee" d="M0 0h512v512H0z" />
        <path
          fill="#d80027"
          d="M256 72a184 184 0 1 0 130 314A184 184 0 0 0 256 72zm0 48c35 0 70 13 96 40 22 22 22 57 0 79a55 55 0 0 1-79 0 104 104 0 0 0-153 6 138 138 0 0 1 136-125zm-56 136c14 0 28 6 39 17a104 104 0 0 0 153-6c-3 31-16 61-40 85-52 53-137 53-190 2l-1-1a24 24 0 0 0-1-1 55 55 0 0 1 0-79c11-11 25-17 40-17z"
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
export class SvgIeFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
