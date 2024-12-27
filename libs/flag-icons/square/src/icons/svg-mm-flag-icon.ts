import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-mm-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-mm"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#fecb00" d="M0 0h512v512H0z" />
      <path fill="#34b233" d="M0 170.7h512V512H0z" />
      <path fill="#ea2839" d="M0 341.3h512V512H0z" />
      <path
        id="mm-a"
        fill="#fff"
        stroke-width="188.7"
        d="M312.6 274H199.4L256 85.3Z"
      />
      <use
        xlink:href="#mm-a"
        width="100%"
        height="100%"
        transform="rotate(-144 256 274)"
      />
      <use
        xlink:href="#mm-a"
        width="100%"
        height="100%"
        transform="rotate(-72 256 274)"
      />
      <use
        xlink:href="#mm-a"
        width="100%"
        height="100%"
        transform="rotate(72 256 274)"
      />
      <use
        xlink:href="#mm-a"
        width="100%"
        height="100%"
        transform="rotate(144 256 274)"
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
export class SvgMmFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
