import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-mp-flag-icon',
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
        <path fill="#338af3" d="M0 0h512v512H0z" />
        <path
          fill="#eee"
          d="M248 417.2a16.7 16.7 0 0 1-15-11 16.7 16.7 0 0 1-29.7-7.6 16.7 16.7 0 0 1-27.6-13.5 16.7 16.7 0 0 1-24.3-18.9 16.7 16.7 0 0 1-17.8-5 16.7 16.7 0 0 1-2.3-18.3 16.7 16.7 0 0 1-15-26.8 16.7 16.7 0 0 1-9.2-29.4 16.7 16.7 0 0 1-3.1-30.5 16.7 16.7 0 0 1 3-30.6 16.7 16.7 0 0 1 9.2-29.4 16.7 16.7 0 0 1 15-26.9 16.7 16.7 0 0 1 2.2-18.3c4.5-5.2 11.5-7 17.7-5a16.7 16.7 0 0 1 6-17.5 16.7 16.7 0 0 1 18.3-1.4 16.7 16.7 0 0 1 27.6-13.6 16.7 16.7 0 0 1 29.7-7.7 16.7 16.7 0 0 1 30.7-1.6 16.7 16.7 0 0 1 30.4 4.6 16.7 16.7 0 0 1 28.9 10.6 16.7 16.7 0 0 1 26.1 16.2c6-2.6 13.2-1.5 18.2 3.2a16.7 16.7 0 0 1 4.1 18 16.7 16.7 0 0 1 17.7 25.1 16.7 16.7 0 0 1 15.4 10.1 16.7 16.7 0 0 1-3.2 18.2 16.7 16.7 0 0 1 6.2 30c6 2.6 10.2 8.5 10.2 15.4v.4c0 6.9-4.2 12.8-10.2 15.4a16.7 16.7 0 0 1-6.1 30 16.7 16.7 0 0 1-12.2 28.3 16.7 16.7 0 0 1-.4 18.5 16.7 16.7 0 0 1-17.1 6.8 16.7 16.7 0 0 1-4.2 18c-5 4.7-12.2 5.7-18.1 3.2a16.7 16.7 0 0 1-26 16.3 16.7 16.7 0 0 1-28.8 10.7 16.7 16.7 0 0 1-30.5 4.6 16.7 16.7 0 0 1-15.9 9.4z"
        />
        <circle cx="256" cy="256" r="111.3" fill="#338af3" />
        <path
          fill="#acabb1"
          d="M280.4 218.2c5.4-4 9-10.5 9-17.9v-11c0-12.4-10-22.3-22.3-22.3H245c-12.3 0-22.3 10-22.3 22.2v11.1c0 7.4 3.6 13.9 9 18L211.5 423s11.1 11 44.5 11 44.5-11 44.5-11z"
        />
        <path
          fill="#eee"
          d="m256 167 19.3 59.5H338l-50.6 36.8 19.3 59.5L256 286l-50.6 36.8 19.3-59.5-50.6-36.8h62.6z"
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
export class SvgMpFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
