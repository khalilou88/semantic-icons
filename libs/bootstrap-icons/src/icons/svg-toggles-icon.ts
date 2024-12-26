import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-toggles-icon',
  imports: [],
  template: `
    <svg
      class="bi bi-toggles"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m2.45 0A3.5 3.5 0 0 1 8 3.5 3.5 3.5 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7"
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
export class SvgTogglesIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
