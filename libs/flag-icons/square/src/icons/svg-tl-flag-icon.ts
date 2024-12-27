import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-tl-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-tl"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="tl-a">
          <path fill-opacity=".7" d="M0 0h496v496H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#tl-a)" transform="scale(1.0321)">
        <path fill="#cb000f" d="M0 0h999v496H0z" />
        <path fill="#f8c00c" d="M0 0c3.1 0 496 248.7 496 248.7L0 496.1z" />
        <path fill="#000001" d="M0 0c2 0 330 248.7 330 248.7L0 496.1z" />
        <path
          fill="#fff"
          d="m181.9 288.9-59-13L93 327l-5-57.8-58.8-13 53.1-24-3.2-57.5 39 42 53.6-24.4-28 52.2 38 44.4z"
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
export class SvgTlFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
