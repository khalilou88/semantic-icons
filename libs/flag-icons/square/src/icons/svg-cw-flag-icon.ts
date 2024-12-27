import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-cw-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-cw"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="cw-a">
          <path fill-opacity=".7" d="M0 0h9000v9000H0z" />
        </clipPath>
        <path id="cw-b" d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z" />
      </defs>
      <g clip-path="url(#cw-a)" transform="scale(.057)">
        <path fill="#002b7f" d="M0 0h13500v9000H0z" />
        <path fill="#f9e814" d="M0 5625h13500v1125H0z" />
        <use
          xlink:href="#cw-b"
          width="13500"
          height="9000"
          x="2"
          y="2"
          fill="#fff"
          transform="scale(750)"
        />
        <use
          xlink:href="#cw-b"
          width="13500"
          height="9000"
          x="3"
          y="3"
          fill="#fff"
          transform="scale(1000)"
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
export class SvgCwFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
