import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-arrow-turn-up-left-icon',
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
        d="M16.25 17a.75.75 0 0 1-.75-.75v-7.5H4.56l1.97 1.97a.75.75 0 1 1-1.06 1.06L2.22 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 1.06L4.56 7.25h11.69A.75.75 0 0 1 17 8v8.25a.75.75 0 0 1-.75.75Z"
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
export class SvgArrowTurnUpLeftIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
