import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pw-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-pw"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="pw-a">
          <path fill-opacity=".7" d="M61.7 4.2h170.8V175H61.7z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#pw-a)"
        transform="translate(-185 -12.5)scale(2.9973)"
      >
        <path fill="#4aadd6" d="M0 4.2h301.2V175H0z" />
        <path
          fill="#ffde00"
          d="M185.9 86.8a52 52 0 0 1-53 50.8 52 52 0 0 1-53.2-50.8c0-28 23.8-50.8 53.1-50.8s53 22.7 53 50.8z"
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
export class SvgPwFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
