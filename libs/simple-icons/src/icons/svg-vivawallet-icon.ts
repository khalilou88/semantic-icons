import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-vivawallet-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Viva Wallet</title>
      <path
        d="M7.275 17.428c.376.777.949 1.223 1.572 1.228h.01c.619 0 1.191-.435 1.575-1.194l.504-1.08-4.9-10.387-3.388 1.58zm6.367.033c.382.76.957 1.195 1.575 1.195h.006c.625-.004 1.2-.45 1.574-1.226l4.567-9.852-3.389-1.581-4.844 10.381zm-1.605 1.206c-.74 1.245-1.905 1.977-3.18 1.977h-.022c-1.391-.01-2.643-.89-3.353-2.355C3.657 14.397 1.828 10.507 0 6.617l6.99-3.259 5.039 10.683 4.985-10.685L24 6.613 18.592 18.29c-.709 1.465-1.962 2.345-3.353 2.355h-.022c-1.275 0-2.442-.732-3.18-1.977Z"
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
export class SvgVivawalletIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
