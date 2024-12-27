import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ve-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-ve"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <g id="ve-d" transform="translate(0 -36)">
          <g id="ve-c">
            <g id="ve-b">
              <path id="ve-a" fill="#fff" d="M0-5-1.5-.2l2.8.9z" />
              <use
                xlink:href="#ve-a"
                width="180"
                height="120"
                transform="scale(-1 1)"
              />
            </g>
            <use
              xlink:href="#ve-b"
              width="180"
              height="120"
              transform="rotate(72)"
            />
          </g>
          <use
            xlink:href="#ve-b"
            width="180"
            height="120"
            transform="rotate(-72)"
          />
          <use
            xlink:href="#ve-c"
            width="180"
            height="120"
            transform="rotate(144)"
          />
        </g>
      </defs>
      <path fill="#cf142b" d="M0 0h512v512H0z" />
      <path fill="#00247d" d="M0 0h512v341.3H0z" />
      <path fill="#fc0" d="M0 0h512v170.7H0z" />
      <g id="ve-f" transform="translate(256.3 358.4)scale(4.265)">
        <g id="ve-e">
          <use
            xlink:href="#ve-d"
            width="180"
            height="120"
            transform="rotate(10)"
          />
          <use
            xlink:href="#ve-d"
            width="180"
            height="120"
            transform="rotate(30)"
          />
        </g>
        <use
          xlink:href="#ve-e"
          width="180"
          height="120"
          transform="rotate(40)"
        />
      </g>
      <use
        xlink:href="#ve-f"
        width="180"
        height="120"
        transform="rotate(-80 256.3 358.4)"
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
export class SvgVeFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
