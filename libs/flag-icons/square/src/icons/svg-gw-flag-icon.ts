import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-gw-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-gw"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#ce1126" d="M0 0h160v512H0z" />
      <path fill="#fcd116" d="M160 0h352v256H160z" />
      <path fill="#009e49" d="M160 256h352v256H160z" />
      <g transform="translate(-46.2 72.8)scale(.7886)">
        <g id="gw-b" transform="matrix(80 0 0 80 160 240)">
          <path
            id="gw-a"
            fill="#000001"
            d="M0-1v1h.5"
            transform="rotate(18 0 -1)"
          />
          <use
            xlink:href="#gw-a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </g>
        <use
          xlink:href="#gw-b"
          width="100%"
          height="100%"
          transform="rotate(72 160 240)"
        />
        <use
          xlink:href="#gw-b"
          width="100%"
          height="100%"
          transform="rotate(144 160 240)"
        />
        <use
          xlink:href="#gw-b"
          width="100%"
          height="100%"
          transform="rotate(-144 160 240)"
        />
        <use
          xlink:href="#gw-b"
          width="100%"
          height="100%"
          transform="rotate(-72 160 240)"
        />
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
export class SvgGwFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
