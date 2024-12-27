import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-deepgram-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Deepgram</title>
      <path
        d="M11.203 24H1.517a.364.364 0 0 1-.258-.62l6.239-6.275a.366.366 0 0 1 .259-.108h3.52c2.723 0 5.025-2.127 5.107-4.845a5.004 5.004 0 0 0-4.999-5.148H7.613v4.646c0 .2-.164.364-.365.364H.968a.365.365 0 0 1-.363-.364V.364C.605.164.768 0 .969 0h10.416c6.684 0 12.111 5.485 12.01 12.187C23.293 18.77 17.794 24 11.202 24z"
      />
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
export class SvgDeepgramIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
