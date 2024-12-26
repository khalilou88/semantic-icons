import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-shield-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.695 17.695 0 0 0 2.022 7.98 17.405 17.405 0 0 0 5.403 6.158 1 1 0 0 0 1.15 0 17.406 17.406 0 0 0 5.402-6.157A17.694 17.694 0 0 0 20 6.68a1 1 0 0 0-.644-.949l-7-2.666Z"
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
export class SvgShieldIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
