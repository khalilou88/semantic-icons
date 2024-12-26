import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-paddypower-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Paddy Power</title>
      <path
        d="M15.014 3.713a18.383 18.383 0 0 0-1.626.084c-.816.082-1.714.245-2.53.408l.57 6.368.246 1.96.654 6.857 1.55-.083 1.796-.162v-.082l-.408-4.081v-.573a19.201 19.201 0 0 0 2.04-.408 10.164 10.164 0 0 0 1.633-.816 5.257 5.257 0 0 0 1.714-2.041 6.53 6.53 0 0 0 .409-2.774 4.751 4.751 0 0 0-2.858-4.082 7.347 7.347 0 0 0-2.694-.572 18.383 18.383 0 0 0-.496-.003zm-10.775.98a18.383 18.383 0 0 0-1.626.085A14.026 14.026 0 0 0 0 5.105l.572 6.366.163 1.96.654 6.857 1.551-.082 1.795-.164-.327-4.081v-.571a19.197 19.197 0 0 0 2.041-.408 10.164 10.164 0 0 0 1.633-.817 5.257 5.257 0 0 0 1.714-2.04 5.967 5.967 0 0 0 .408-2.695A4.653 4.653 0 0 0 7.43 5.267a7.347 7.347 0 0 0-2.695-.57 18.383 18.383 0 0 0-.496-.004zM15.1 6.731a1.233 1.233 0 0 1 .085.006 3.265 3.265 0 0 1 1.468.325 2.065 2.065 0 0 1 1.062 1.633 2.596 2.596 0 0 1-.164 1.143 1.861 1.861 0 0 1-.571.817 2.449 2.449 0 0 1-1.306.572 1.78 1.78 0 0 1-.653.081l-.409-4.49a1.233 1.233 0 0 1 .488-.087zm-10.942.98a1.233 1.233 0 0 1 .17.005 3.265 3.265 0 0 1 1.47.327 2.065 2.065 0 0 1 1.06 1.633 4.947 4.947 0 0 1-.163 1.143 1.861 1.861 0 0 1-.573.816 2.449 2.449 0 0 1-1.305.57 1.78 1.78 0 0 1-.653.082l-.408-4.49a1.233 1.233 0 0 1 .402-.086zm17.801 7.27A2.04 2.04 0 1 0 24 17.023a2.04 2.04 0 0 0-2.04-2.04z"
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
export class SvgPaddypowerIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
