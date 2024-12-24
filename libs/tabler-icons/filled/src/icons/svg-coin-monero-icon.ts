import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-coin-monero-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-coin-monero"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M15 11.414v4.586a1 1 0 0 0 1 1l4.66 .001a10 10 0 0 1 -17.32 0l4.66 -.001l.117 -.007a1 1 0 0 0 .883 -.993v-4.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.293zm2 -8.074a10 10 0 0 1 4.54 11.66h-4.54v-6c0 -.89 -1.077 -1.337 -1.707 -.707l-3.293 3.292l-3.293 -3.292l-.084 -.076c-.637 -.514 -1.623 -.07 -1.623 .783v6h-4.54a9.991 9.991 0 0 1 -.46 -3l.005 -.324a10 10 0 0 1 14.995 -8.336z"
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
export class SvgCoinMoneroIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
