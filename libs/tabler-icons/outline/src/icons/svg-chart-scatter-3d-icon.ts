import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-chart-scatter-3d-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-chart-scatter-3d"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 20l9 -7" />
      <path d="M12 3v10l9 7" />
      <path d="M17 12v.015" />
      <path d="M17 4.015v.015" />
      <path d="M21 8.015v.015" />
      <path d="M12 19.015v.015" />
      <path d="M3 12.015v.015" />
      <path d="M7 8.015v.015" />
      <path d="M3 4.015v.015" />
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
export class SvgChartScatter3dIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
