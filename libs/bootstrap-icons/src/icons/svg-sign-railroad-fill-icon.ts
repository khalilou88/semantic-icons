import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sign-railroad-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-sign-railroad-fill"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.224 3.162 8 6.94l3.777-3.777L9.049.435Zm3.274 7.425v-.862h.467c.28 0 .467.154.467.44 0 .28-.182.421-.475.421h-.459Z"
      />
      <path
        d="M12.838 4.223 9.06 8l3.777 3.777 2.727-2.728c.58-.58.58-1.519 0-2.098zm.03 2.361c.591 0 .935.334.935.844a.79.79 0 0 1-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521V6.584h1.064Zm-1.091 6.254L8 9.06l-3.777 3.777 2.728 2.727c.58.58 1.519.58 2.098 0zm-8.953-5.84v.861h.46c.292 0 .474-.14.474-.421 0-.286-.188-.44-.467-.44z"
      />
      <path
        d="M3.162 11.777 6.94 8 3.162 4.223.435 6.951c-.58.58-.58 1.519 0 2.098zm-.86-5.193h1.065c.592 0 .936.334.936.844 0 .39-.242.654-.485.748l.536 1.074h-.59l-.467-.994h-.473v.994h-.521V6.584Z"
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
export class SvgSignRailroadFillIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
