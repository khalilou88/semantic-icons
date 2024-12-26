import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-chart-bar-stacked-icon',
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-chart-bar-stacked"
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
      <path d="M11 13v4" />
      <path d="M15 5v4" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="7" y="13" width="9" height="4" rx="1" />
      <rect x="7" y="5" width="12" height="4" rx="1" />
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
export class SvgChartBarStackedIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
