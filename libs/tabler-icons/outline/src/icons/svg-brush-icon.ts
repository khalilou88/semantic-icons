import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-brush-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brush"
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
      <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
      <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
      <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
      <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
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
export class SvgBrushIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
