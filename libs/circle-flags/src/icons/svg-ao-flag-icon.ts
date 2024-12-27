import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ao-flag-icon',
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
        <path fill="#d80027" d="M0 0h512v256l-253 36.6L0 256z" />
        <path fill="#333" d="M0 256h512v256H0z" />
        <g fill="#ffda44">
          <path
            d="m220.9 203.6 21.7 15.8-8.3 25.5L256 229l21.7 15.7-8.3-25.5 21.7-15.7h-26.8L256 178l-8.3 25.5z"
          />
          <path
            d="M320 145.1a127.2 127.2 0 0 0-64-17v33.3a94 94 0 0 1 47.3 12.7 94.7 94.7 0 0 1-94.6 163.8 94 94 0 0 1-31.6-29.8l-27.9 18.4a128.1 128.1 0 0 0 217.7-6.5A128.1 128.1 0 0 0 320 145.1z"
          />
          <path
            d="M182.2 233.7a33.4 33.4 0 0 0 13.3 45.4l108.4 59.2c-7.4 13.5-3.4 30 10 37.3l29.3 16a27.8 27.8 0 0 0 37.8-11l16-29.3z"
          />
        </g>
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
export class SvgAoFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
