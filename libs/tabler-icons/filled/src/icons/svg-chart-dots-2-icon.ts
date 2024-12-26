import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-chart-dots-2-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-chart-dots-2"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M3 2a1 1 0 0 1 1 1v17h17a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-18a1 1 0 0 1 1 -1m18.97 .757a1 1 0 0 1 -.727 1.213l-5.256 1.314a3 3 0 0 1 -.55 1.465l1.768 2.358a3.003 3.003 0 0 1 3.795 2.893a3 3 0 0 1 -5.436 1.751l-3.57 1.428a3 3 0 0 1 -5.994 -.179l.005 -.176a3 3 0 0 1 5.43 -1.576l3.57 -1.428l.015 -.17c.06 -.518 .253 -.996 .542 -1.4l-1.767 -2.357a3.003 3.003 0 0 1 -3.795 -2.893l.005 -.176a3 3 0 0 1 5.497 -1.48l5.255 -1.314a1 1 0 0 1 1.213 .727"
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
export class SvgChartDots2Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
