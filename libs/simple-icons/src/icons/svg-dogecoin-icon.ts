import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-dogecoin-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Dogecoin</title>
      <path
        d="M12.288 7.908h-1.715v3.38h2.697v1.415h-2.697v3.38h1.799c.462 0 3.794.052 3.789-3.933-.005-3.984-3.232-4.242-3.873-4.242zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.472 18.481H8.126v-5.778H6.594v-1.415h1.532V5.511h3.73c.882 0 6.727-.183 6.727 6.594-.001 6.888-6.111 6.376-6.111 6.376z"
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
export class SvgDogecoinIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
