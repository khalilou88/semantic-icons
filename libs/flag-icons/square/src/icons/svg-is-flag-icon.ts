import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-is-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-is"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="is-a">
          <path fill-opacity=".7" d="M85.4 0h486v486h-486z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="0"
        clip-path="url(#is-a)"
        transform="translate(-90)scale(1.0535)"
      >
        <path fill="#003897" d="M0 0h675v486H0z" />
        <path fill="#fff" d="M0 189h189V0h108v189h378v108H297v189H189V297H0z" />
        <path
          fill="#d72828"
          d="M0 216h216V0h54v216h405v54H270v216h-54V270H0z"
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
export class SvgIsFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
