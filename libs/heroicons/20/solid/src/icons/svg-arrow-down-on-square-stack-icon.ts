import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-arrow-down-on-square-stack-icon',
  standalone: true,
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
        d="M8 1a.75.75 0 0 1 .75.75V6h-1.5V1.75A.75.75 0 0 1 8 1Zm-.75 5v3.296l-.943-1.048a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.114 0l2.25-2.5a.75.75 0 0 0-1.114-1.004L8.75 9.296V6h2A2.25 2.25 0 0 1 13 8.25v4.5A2.25 2.25 0 0 1 10.75 15h-5.5A2.25 2.25 0 0 1 3 12.75v-4.5A2.25 2.25 0 0 1 5.25 6h2ZM7 16.75v-.25h3.75a3.75 3.75 0 0 0 3.75-3.75V10h.25A2.25 2.25 0 0 1 17 12.25v4.5A2.25 2.25 0 0 1 14.75 19h-5.5A2.25 2.25 0 0 1 7 16.75Z"
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
export class SvgArrowDownOnSquareStackIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
