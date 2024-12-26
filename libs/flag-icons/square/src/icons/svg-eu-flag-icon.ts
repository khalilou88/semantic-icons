import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-eu-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-eu"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <g id="eu-d">
          <g id="eu-b">
            <path id="eu-a" d="m0-1-.3 1 .5.1z" />
            <use xlink:href="#eu-a" transform="scale(-1 1)" />
          </g>
          <g id="eu-c">
            <use xlink:href="#eu-b" transform="rotate(72)" />
            <use xlink:href="#eu-b" transform="rotate(144)" />
          </g>
          <use xlink:href="#eu-c" transform="scale(-1 1)" />
        </g>
      </defs>
      <path fill="#039" d="M0 0h512v512H0z" />
      <g fill="#fc0" transform="translate(256 258.4)scale(25.28395)">
        <use xlink:href="#eu-d" width="100%" height="100%" y="-6" />
        <use xlink:href="#eu-d" width="100%" height="100%" y="6" />
        <g id="eu-e">
          <use xlink:href="#eu-d" width="100%" height="100%" x="-6" />
          <use
            xlink:href="#eu-d"
            width="100%"
            height="100%"
            transform="rotate(-144 -2.3 -2.1)"
          />
          <use
            xlink:href="#eu-d"
            width="100%"
            height="100%"
            transform="rotate(144 -2.1 -2.3)"
          />
          <use
            xlink:href="#eu-d"
            width="100%"
            height="100%"
            transform="rotate(72 -4.7 -2)"
          />
          <use
            xlink:href="#eu-d"
            width="100%"
            height="100%"
            transform="rotate(72 -5 .5)"
          />
        </g>
        <use
          xlink:href="#eu-e"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
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
export class SvgEuFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
