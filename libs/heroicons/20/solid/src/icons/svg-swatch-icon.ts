import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-swatch-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M3.5 2A1.5 1.5 0 0 0 2 3.5V15a3 3 0 1 0 6 0V3.5A1.5 1.5 0 0 0 6.5 2h-3Zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 0 1 2.122 0l2.121 2.121a1.5 1.5 0 0 1 0 2.122ZM8.364 18H16.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-2.136l-6 6ZM5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clip-rule="evenodd"
      />
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
export class SvgSwatchIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
