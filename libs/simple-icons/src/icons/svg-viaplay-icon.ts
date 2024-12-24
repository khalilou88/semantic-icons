import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-viaplay-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Viaplay</title>
      <path
        d="M1.2766 6.6383C.4742 8.2432 0 10.0669 0 12s.4742 3.7568 1.2766 5.3617L12 12ZM12 0C9.0456 0 6.3465 1.0578 4.231 2.845l12.5471 6.7477v4.8146L4.231 21.155C6.31 22.9422 9.0456 24 12 24c6.6383 0 12-5.3617 12-12S18.6383 0 12 0Z"
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
export class SvgViaplayIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
