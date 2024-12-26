import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-arrow-small-right-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M3.75 12a.75.75 0 0 1 .75-.75h13.19l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.47-5.47H4.5a.75.75 0 0 1-.75-.75Z"
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
export class SvgArrowSmallRightIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
