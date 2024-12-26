import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-building-tunnel-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-building-tunnel"
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
      <path d="M5 21h14a2 2 0 0 0 2 -2v-7a9 9 0 0 0 -18 0v7a2 2 0 0 0 2 2z" />
      <path d="M8 21v-9a4 4 0 1 1 8 0v9" />
      <path d="M3 17h4" />
      <path d="M17 17h4" />
      <path d="M21 12h-4" />
      <path d="M7 12h-4" />
      <path d="M12 3v5" />
      <path d="M6 6l3 3" />
      <path d="M15 9l3 -3l-3 3z" />
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
export class SvgBuildingTunnelIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
