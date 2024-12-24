import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-dreamstime-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Dreamstime</title>
      <path
        d="M21.532 5.153C16.952-1.604 7.118-.402 2.764 4.628.586 7.105-.241 10.558.059 13.711c.3 2.478 1.201 4.73 2.478 6.231 3.378 4.13 9.234 4.58 13.063 1.953 5.405-3.755 5.03-9.834 2.102-13.214-5.255-6.006-14.264-.075-10.885 6.757.825 1.65 2.7 2.552 4.429 2.552 2.402 0 4.279-2.852 3.153-4.579-1.126-1.802-3.078 0-2.253 1.35.676 1.052-.75 1.653-1.35 1.503-1.577-.376-2.329-2.553-1.802-4.354.45-1.577 2.1-2.628 3.678-2.553 2.177.15 4.58 1.877 4.354 5.63-.525 6.082-8.484 7.208-11.636 2.853-4.955-6.982.9-16.366 9.835-13.513 4.58 1.5 7.958 6.907 5.855 12.688-.825 2.177-1.275 3.002-1.35 3.754-.377 2.777 8.408-5.856 1.8-15.617z"
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
export class SvgDreamstimeIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
