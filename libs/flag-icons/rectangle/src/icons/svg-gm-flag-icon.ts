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
  imports: [],
  template: `
    <svg
      id="flag-icons-gm"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="gm-a">
          <path fill-opacity=".7" d="M0-48h640v480H0z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#gm-a)"
        transform="translate(0 48)"
      >
        <path fill="red" d="M0-128h640V85.3H0z" />
        <path fill="#fff" d="M0 85.3h640V121H0z" />
        <path fill="#009" d="M0 120.9h640V263H0z" />
        <path fill="#fff" d="M0 263.1h640v35.6H0z" />
        <path fill="#090" d="M0 298.7h640V512H0z" />
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
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
