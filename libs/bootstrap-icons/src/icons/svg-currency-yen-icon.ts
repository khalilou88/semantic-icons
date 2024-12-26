import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-currency-yen-icon',
  imports: [],
  template: `
    <svg
      class="bi bi-currency-yen"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M8.75 14v-2.629h2.446v-.967H8.75v-1.31h2.445v-.967H9.128L12.5 2h-1.699L8.047 7.327h-.086L5.207 2H3.5l3.363 6.127H4.778v.968H7.25v1.31H4.78v.966h2.47V14h1.502z"
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
export class SvgCurrencyYenIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
