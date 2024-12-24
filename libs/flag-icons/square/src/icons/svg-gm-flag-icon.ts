import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-gm-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gm"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="red" d="M0 0h512v170.7H0z" />
        <path fill="#fff" d="M0 170.7h512V199H0z" />
        <path fill="#009" d="M0 199.1h512V313H0z" />
        <path fill="#fff" d="M0 312.9h512v28.4H0z" />
        <path fill="#090" d="M0 341.3h512V512H0z" />
      </g>
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
export class SvgGmFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
