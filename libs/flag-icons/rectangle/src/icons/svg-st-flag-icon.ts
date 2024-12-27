import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-st-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-st"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
    >
      <path fill="#12ad2b" d="M0 0h640v480H0z" />
      <path fill="#ffce00" d="M0 137.1h640V343H0z" />
      <path fill="#d21034" d="M0 0v480l240-240" />
      <g id="st-c" transform="translate(351.6 240)scale(.34286)">
        <g id="st-b">
          <path
            id="st-a"
            fill="#000001"
            d="M0-200V0h100"
            transform="rotate(18 0 -200)"
          />
          <use
            xlink:href="#st-a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </g>
        <use
          xlink:href="#st-b"
          width="100%"
          height="100%"
          transform="rotate(72)"
        />
        <use
          xlink:href="#st-b"
          width="100%"
          height="100%"
          transform="rotate(144)"
        />
        <use
          xlink:href="#st-b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
        <use
          xlink:href="#st-b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
      </g>
      <use
        xlink:href="#st-c"
        width="100%"
        height="100%"
        x="700"
        transform="translate(-523.2)"
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
export class SvgStFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
