import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-topology-full-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-topology-full"
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
      <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 8v8" />
      <path d="M18 16v-8" />
      <path d="M8 6h8" />
      <path d="M16 18h-8" />
      <path d="M7.5 7.5l9 9" />
      <path d="M7.5 16.5l9 -9" />
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
export class SvgTopologyFullIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
