import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ne-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-ne"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#0db02b" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 0h512v341.3H0z" />
      <path fill="#e05206" d="M0 0h512v170.7H0z" />
      <circle cx="256" cy="256" r="72.5" fill="#e05206" />
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
export class SvgNeFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
