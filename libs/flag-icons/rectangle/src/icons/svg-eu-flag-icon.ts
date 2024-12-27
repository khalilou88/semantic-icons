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
      viewBox="0 0 640 480"
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
      <path fill="#039" d="M0 0h640v480H0z" />
      <g fill="#fc0" transform="translate(320 242.3)scale(23.7037)">
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
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
