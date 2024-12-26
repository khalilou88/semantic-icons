import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-circuit-changeover-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-circuit-changeover"
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
      <path d="M2 12h2" />
      <path d="M20 7h2" />
      <path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M20 17h2" />
      <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M7.5 10.5l8.5 -3.5" />
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
export class SvgCircuitChangeoverIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
