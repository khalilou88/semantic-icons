import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ps-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-ps"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="ps-a">
          <path fill-opacity=".7" d="M-118 0h682.7v512H-118z" />
        </clipPath>
      </defs>
      <g clip-path="url(#ps-a)" transform="translate(110.6)scale(.9375)">
        <g fill-rule="evenodd" stroke-width="1pt">
          <path fill="#000001" d="M-246 0H778v170.7H-246z" />
          <path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
          <path fill="#090" d="M-246 341.3H778V512H-246z" />
          <path fill="red" d="m-246 512 512-256L-246 0z" />
        </g>
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
export class SvgPsFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
