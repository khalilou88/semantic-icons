import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-carambola-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-carambola"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M17.108 22.085c-1.266 -.068 -2.924 -.859 -5.071 -2.355l-.04 -.027l-.037 .027c-2.147 1.497 -3.804 2.288 -5.072 2.356l-.178 .005c-2.747 0 -3.097 -2.64 -1.718 -7.244l.054 -.178l-.1 -.075c-6.056 -4.638 -5.046 -7.848 2.554 -8.066l.202 -.005l.115 -.326c1.184 -3.33 2.426 -5.085 4.027 -5.192l.156 -.005c1.674 0 2.957 1.76 4.182 5.197l.114 .326l.204 .005c7.6 .218 8.61 3.428 2.553 8.065l-.102 .075l.055 .178c1.35 4.512 1.04 7.137 -1.556 7.24l-.163 .003z"
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
export class SvgCarambolaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
