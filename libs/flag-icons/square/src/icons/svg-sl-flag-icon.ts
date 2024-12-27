import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sl-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-sl"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="sl-a">
          <rect width="384" height="512" rx="4.6" ry="7.6" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        clip-path="url(#sl-a)"
        transform="scale(1.33333 1)"
      >
        <path fill="#0000cd" d="M0 341.7h512V512H0z" />
        <path fill="#fff" d="M0 171.4h512v170.3H0z" />
        <path fill="#00cd00" d="M0 0h512v171.4H0z" />
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
export class SvgSlFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
