import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-it-34-flag-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
    >
      <defs>
        <mask
          id="a"
          width="544"
          height="544"
          x="-16"
          y="-16"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#a)">
        <path fill="#0052b4" d="M512 0v256l-256 64L0 256V0h512Z" />
        <path fill="#ff9811" d="M512 256v256H0V256h512Z" />
        <path
          fill="#ffda44"
          d="M256 528c-72.7 0-141-28.3-192.3-79.7S-16 328.7-16 256 12.3 115 63.7 63.7 183.3-16 256-16s141 28.3 192.3 79.7S528 183.3 528 256s-28.3 141-79.7 192.3S328.7 528 256 528Zm0-512c-64.1 0-124.4 25-169.7 70.3C41 131.6 16 191.9 16 256s25 124.4 70.3 169.7C131.6 471 191.9 496 256 496s124.4-25 169.7-70.3C471 380.4 496 320.1 496 256s-25-124.4-70.3-169.7A238.4 238.4 0 0 0 256 16Z"
        />
        <path
          fill="#a2001d"
          d="M256 32a222.6 222.6 0 0 1 158.4 65.6 223.3 223.3 0 0 1 48 245.6 223.3 223.3 0 0 1-119.2 119.2A222.4 222.4 0 0 1 256 480a222.8 222.8 0 0 1-158.4-65.6 223.3 223.3 0 0 1-48-245.6A223.3 223.3 0 0 1 168.8 49.6C196.4 37.9 225.8 32 256 32m0-16a240 240 0 1 0 0 480 240 240 0 0 0 0-480Z"
        />
        <circle cx="216" cy="152" r="48" fill="#ff9811" />
        <path
          fill="#ffda45"
          d="M384 288v-16c0-31-21.5-56-48-56h-88v-72c0-12-16-24-16-24s-16 12-16 24h-72v72h32v35.7c0 7.7 0 12.3 6.5 22.3L166 287.8l-54 .2v24h112v48h-24v24h48v-48l24-24h48v48h-24v24h48v-48l24-24 40 40v8h-24v24h48v-48l-48-48Z"
        />
        <path
          fill="#eee"
          d="M264 144h136a24 24 0 0 1-24 24 24 24 0 0 1-24 24 24 24 0 0 1-24 24h-80c22.1 0 40-21.5 40-48a24 24 0 0 0-24-24Zm-80 168v64h-40a16 16 0 0 0-16 16 16 16 0 0 0-16-16H72v-64h40a16 16 0 0 1 16 16 16 16 0 0 1 16-16h40Z"
        />
        <path
          fill="#ffda44"
          d="M428 200c0-5.1-6-14.5-8.7-18.3L416 177l-3.3 4.7c-2.6 3.8-8.7 13.2-8.7 18.3a12 12 0 0 0 8 11.3V280a4 4 0 0 1-8 0v-16a12 12 0 0 0-12-12h-16v8h16a4 4 0 0 1 4 4v16a12 12 0 0 0 24 0v-68.7c4.7-1.7 8-6 8-11.3Z"
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
export class SvgIt34FlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
