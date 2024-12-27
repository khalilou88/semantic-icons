import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-cl-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-cl"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="cl-a">
          <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g fill-rule="evenodd" clip-path="url(#cl-a)" transform="scale(.9375)">
        <path fill="#fff" d="M256 0h512v256H256z" />
        <path fill="#0039a6" d="M0 0h256v256H0z" />
        <path
          fill="#fff"
          d="M167.8 191.7 128.2 162l-39.5 30 14.7-48.8L64 113.1l48.7-.5L127.8 64l15.5 48.5 48.7.1-39.2 30.4z"
        />
        <path fill="#d52b1e" d="M0 256h768v256H0z" />
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
export class SvgClFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
