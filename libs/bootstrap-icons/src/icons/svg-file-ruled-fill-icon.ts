import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-file-ruled-fill-icon',
  imports: [],
  template: `
    <svg
      class="bi bi-file-ruled-fill"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z"
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
export class SvgFileRuledFillIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
