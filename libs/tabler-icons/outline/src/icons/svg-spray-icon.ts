import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-spray-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-spray"
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
      <path
        d="M4 10m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z"
      />
      <path d="M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4" />
      <path d="M15 7h.01" />
      <path d="M18 9h.01" />
      <path d="M18 5h.01" />
      <path d="M21 3h.01" />
      <path d="M21 7h.01" />
      <path d="M21 11h.01" />
      <path d="M10 7h1" />
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
export class SvgSprayIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
