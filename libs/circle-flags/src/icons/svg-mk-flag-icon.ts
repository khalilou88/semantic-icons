import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-mk-flag-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#ffda44"
          d="M0 0h68.2l86 33.6L216.5 0h78.8l61.2 34.8L443.8 0H512v68.3l-31.4 88 31.4 60.2v78.8L477.4 356l34.6 87.8V512h-68.2l-77-37.3-71.3 37.3h-78.8l-61-39.7L68.2 512H0v-68l40.3-88.2L0 295.5v-78.8L40.3 157 0 68.2z"
        />
        <path
          fill="#d80027"
          d="M295.5 512h148.3L256 256zm-79-512H68.2L256 256zm.2 512L256 256 68.2 512zM0 216.7 256 256 0 68.2zm0 227.2L256 256 0 295.5zM512 68.3 256 256l256-39.5zM443.8 0H295.3L256 256zM512 443.8V295.3L256 256z"
        />
        <circle cx="256" cy="256" r="89" fill="#d80027" />
        <circle cx="256" cy="256" r="66.8" fill="#ffda44" />
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
export class SvgMkFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
