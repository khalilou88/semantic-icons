import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-cn-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-cn"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <path id="cn-a" fill="#ff0" d="M1-.3-.7.8 0-1 .6.8-1-.3z" />
      </defs>
      <path fill="#ee1c25" d="M0 0h512v512H0z" />
      <use
        xlink:href="#cn-a"
        width="30"
        height="20"
        transform="translate(128 128)scale(76.8)"
      />
      <use
        xlink:href="#cn-a"
        width="30"
        height="20"
        transform="rotate(-121 142.6 -47)scale(25.5827)"
      />
      <use
        xlink:href="#cn-a"
        width="30"
        height="20"
        transform="rotate(-98.1 198 -82)scale(25.6)"
      />
      <use
        xlink:href="#cn-a"
        width="30"
        height="20"
        transform="rotate(-74 272.4 -114)scale(25.6137)"
      />
      <use
        xlink:href="#cn-a"
        width="30"
        height="20"
        transform="matrix(16 -19.968 19.968 16 256 230.4)"
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
export class SvgCnFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
