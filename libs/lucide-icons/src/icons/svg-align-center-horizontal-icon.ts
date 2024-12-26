import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-align-center-horizontal-icon',
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-align-center-horizontal"
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
      <path d="M2 12h20" />
      <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
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
export class SvgAlignCenterHorizontalIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
