import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ticktick-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TickTick</title>
      <path
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3-5.128 0-9.3-4.172-9.3-9.3 0-5.128 4.172-9.3 9.3-9.3V0Zm7.4 2.583-7.505 9.371L8.388 9.08l-2.002 2.436 4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617L19.4 2.583Z"
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
export class SvgTicktickIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
