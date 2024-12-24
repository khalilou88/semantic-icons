import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-barrier-block-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-barrier-block"
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
        d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"
      />
      <path d="M7 16v4" />
      <path d="M7.5 16l9 -9" />
      <path d="M13.5 16l6.5 -6.5" />
      <path d="M4 13.5l6.5 -6.5" />
      <path d="M17 16v4" />
      <path d="M5 20h4" />
      <path d="M15 20h4" />
      <path d="M17 7v-2" />
      <path d="M7 7v-2" />
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
export class SvgBarrierBlockIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
