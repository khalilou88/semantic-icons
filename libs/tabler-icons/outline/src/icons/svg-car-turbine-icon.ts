import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-car-turbine-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-car-turbine"
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
      <path d="M11 13m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M18.86 11c.088 .66 .14 1.512 .14 2a8 8 0 1 1 -8 -8h6" />
      <path d="M11 9c2.489 .108 4.489 .108 6 0" />
      <path
        d="M17 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
      />
      <path d="M11 13l-3.5 -1.5" />
      <path d="M11 13l2.5 3" />
      <path d="M8.5 16l2.5 -3" />
      <path d="M11 13l3.5 -1.5" />
      <path d="M11 9v4" />
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
export class SvgCarTurbineIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
