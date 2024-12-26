import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ss-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-ss"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#078930" d="M0 358.4h512V512H0z" />
      <path fill="#fff" d="M0 153.6h512v204.8H0z" />
      <path fill="#000001" d="M0 0h512v153.6H0z" />
      <path fill="#da121a" d="M0 179.2h512v153.6H0z" />
      <path fill="#0f47af" d="m0 0 433 256L0 512z" />
      <path fill="#fcdd09" d="M209 207.8 64.4 256l144.8 48.1-89.5-126v155.8z" />
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
export class SvgSsFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
