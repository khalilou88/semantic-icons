import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-gu-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gu"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#be0027" fill-rule="evenodd" d="M0 0h512v512H0z" />
      <path fill="#3b5aa3" fill-rule="evenodd" d="M20.5 20.5h470v471h-470z" />
      <path
        fill="#cbe0e5"
        fill-rule="evenodd"
        d="M251.9 396.1c1.8 1 4.7 1 6.3.1 103.3-55 103.4-205.8.1-260a7.5 7.5 0 0 0-6.6.1c-100.7 55.1-101 204.2.2 259.8"
      />
      <path
        fill="#add2d9"
        fill-rule="evenodd"
        d="M251.9 398.9c1.6 1.3 4.8 1.1 6.3 0 76.1-57 76.6-92.5 73.2-92.5H180.7c-2.3 0 1.3 36.1 71.2 92.4z"
      />
      <path
        fill="#fdf9a1"
        fill-rule="evenodd"
        d="M192.6 334.6a29.3 29.3 0 0 1 20.9 1.3c5.7 3 9 3 15.1 3 6.5.1 11.5 4.9 18.5 5 12.8.4 18.3 6.7 8.3 6.8-4.7 0-14.8-3.2-19.7-2.5-10.2 1-16.7 3.3-26.3 14l11.1 7.6c9.6-4 11.2-8.3 16.5-8.5 6-.2 8-4 15-4 7.9 1.5 18.5-1 24.8-2.3 11.1-2.6 5.8-10.3-.9-13.2-5.4-2.3-15.6 0-22-2.3-4.7-1.9-.8-4.9 1.8-5.5 2.6-.5 5.4.4 8.6.9 5.8.5 13 0 18-.9 10.5-1.6 10-4.7 15.1-4.7a16 16 0 0 0 9-3.1c3-2 6-6 9.6-5.9l9.6.4L312 351l-38 38.8-19.8 7.5L211 369l-22-33.5z"
      />
      <path
        fill="#179a3b"
        fill-rule="evenodd"
        d="m242.4 305.1 87-.4 1.6-7.7-5.6-.6c-3.2-.2-8.5 3.3-12.1 3.3-2.6 0-5.5-4.6-8-4.5-4.4 0-4.8 4-9 4-3.4 0-4.8-2.6-9.2-2.4-4.6.3-4.2 2.8-10 2.7-7.7-.2-10.7-6.9-16.8-7-10.3 0-10.6 9.8-17.9 12.6"
      />
      <path
        fill="#fdf9a1"
        fill-rule="evenodd"
        d="m242.4 307 89.6-.5v-2.4l-91.6.5z"
      />
      <path
        fill="#a79270"
        fill-rule="evenodd"
        d="M279.2 334c1.4 5.2 2.9 7 8.4 8.4 5.5 1.3 13.9-4 8.7-9.2-5-4.8-10.2-6-14.6-10.4-9.4-9.2-23.5-31.9-23.5-47.8 0-13.8-1.3-41.9-1.3-68.5 0-1.8-5.2 4.8-5.2 6.5.2 23.6.2 41.3 1.1 65 1.5 17.4 9.8 29 17 39.6 3.3 5 8 10.5 9.4 16.3z"
      />
      <text
        x="465.1"
        y="269.5"
        fill="#bd0728"
        stroke="#fff"
        stroke-width="1.6"
        font-family="helvetica"
        font-size="25.6"
        transform="translate(-256.3 5)"
      >
        <tspan>G</tspan>
      </text>
      <text
        x="488.1"
        y="269.6"
        fill="#bd0728"
        stroke="#fff"
        stroke-width="1.6"
        font-family="helvetica"
        font-size="25.6"
        transform="translate(-256.3 5)"
      >
        <tspan>U</tspan>
      </text>
      <text
        x="516"
        y="269.6"
        fill="#bd0728"
        stroke="#fff"
        stroke-width="1.6"
        font-family="helvetica"
        font-size="25.6"
        transform="translate(-256.3 5)"
      >
        <tspan>A</tspan>
      </text>
      <text
        x="539.5"
        y="269.5"
        fill="#bd0728"
        stroke="#fff"
        stroke-width="1.6"
        font-family="helvetica"
        font-size="25.6"
        transform="translate(-256.3 5)"
      >
        <tspan>M</tspan>
      </text>
      <path
        fill="#239e46"
        fill-rule="evenodd"
        d="M211.9 207.3c-1.2 2.2 2.7-.6 3.6-1 5-1.7 7-8 15.6-4.3 6.8 3 16 1.3 11.2 4.2-6 3.6-17.7 7.5-18 25 1 1.7 1.2 1.4 2-.4 1.7-4 10.3-15.2 14.5-14.2 1.7.4 6.6-5 6.8-3.5.4 4.4-6.8 13.2-6.7 25 0 2.8 3.4 3.7 5 1.8 1.6-1.7 2.5-3.5 5.4-5.7 5-4.1 3.6-21.5 4.2-20.7 3.5 4.6 4 17.5 9.4 22.8 4.3 4.4 7.9 2.3 7-3.8-2-12.3-7.8-8.8-10.5-21.5-.6-2.5-.7-4.7 2.5-3.7 4 1.2 6.4 3 9.4 7.6 3 4.3 8.5 8.4 11.8 11 5.6 4.3 7.6.5 4.9-5a30 30 0 0 0-15.8-13.8c-4.6-1.6-6.3-1.7-10.4-2.5-1-.2-2.3-2.6-.3-3.8a32 32 0 0 1 14.8-5.8c5-.1 9 3.9 12.5 5 7.1 1.8 7-2.7 4-6-2.6-2.8-8-7.5-13-7-10.2 1.3-9.6 1-15.8 5.2-2.3 1.3-4.8 2.8-3.9 1.2 2.3-4.1.1-3.4 3.7-7.6 2.7-3 4.7-5.3 7.5-6 2.6-.7 6-3.4 7-4.8 2.6-3.5.4-5.5-3.5-4.3-3.4 1-5.3 3.2-7.6 3.8-5.5 1.7-10 14.3-10.6 16-.9 2.2-1.8 1.1-1.7-.7.8-8.8 1.6-23.7-1.5-29.8-4.7-9-4.3-4.8-6.1-.5a30.2 30.2 0 0 0 0 19.8c.7 3.3 3.4 7 4 9.7.3 2-1.3-.7-2.1-1.9-3-4.5-5.2-7.6-10-10a26.8 26.8 0 0 0-15.2-1.5c-1.3.4 1.5 2.4 2.7 3.3 3.2 2.6 9.3 3.4 13.4 6 3.6 2 6.3 3.5 7.4 6.5.5 2.2 1.2 5.5-.2 5.4-3.9-.2-9.9-3.5-22.2-2.2-6.3.9-11.7 6.3-15.2 12.7"
      />
      <path fill-rule="evenodd" d="M238.7 319.8h3.6v6h-3.6z" />
      <path
        fill="#fdf9ff"
        fill-rule="evenodd"
        d="M221 280.2c14.1 19.6 36.8 31 37.3 40L214 320c10.1-12.2 16.3-20.5 6.9-39.9z"
      />
      <path
        fill="#a68861"
        fill-rule="evenodd"
        d="M208.1 320.6c19.3 4.3 42.2 6.6 56.9-.6 0 4.3-4.8 10.4-8.8 10.4h-36.9c4.3-.6 6.7-1.9 13.7-2.3l-19.6.3c-2.1 0-6-5.7-5.3-7.8"
      />
      <path
        fill="#be0027"
        fill-rule="evenodd"
        d="M251.7 406a8 8 0 0 0 6.8 0c111.1-59.1 111.2-221.3.2-279.6a8 8 0 0 0-7.1 0c-108.3 59.3-108.6 219.7.1 279.5zm.6-13.4a7 7 0 0 0 5.9 0c93-54.7 94.1-199.3.1-251.1-1.8-1.3-4.4-.9-6.2 0-89 52.7-94 191.4.2 251z"
      />
      <path
        fill="#bd0728"
        d="M218.7 255.7q2.6 0 4.5 1 2.7 1.4 3.3 5h-2.4q-.5-2-2-3-1.3-.9-3.5-.9-2.5 0-4.3 2-1.7 1.9-1.7 5.7 0 3.2 1.4 5.3 1.5 2 4.7 2 2.5 0 4.1-1.4 1.7-1.4 1.7-4.7h-5.7v-2h8v9.8h-1.6l-.6-2.4q-1.2 1.4-2.2 2-1.7.9-4.2.9-3.2 0-5.6-2.1-2.6-2.7-2.6-7.3t2.5-7.3q2.4-2.6 6.2-2.6m-.4 0"
        aria-label="G"
        font-family="helvetica"
        font-size="25.6"
      />
      <path
        fill="#bd0728"
        d="M236.5 256.2v11.4q0 2 .7 3.3 1.1 2 3.8 2 3.1 0 4.3-2.1.6-1.2.6-3.2v-11.4h2.5v10.4q0 3.3-1 5.2-1.6 3.3-6.2 3.3-4.7 0-6.4-3.3-.9-1.9-.9-5.2v-10.4zm4.7 0"
        aria-label="U"
        font-family="helvetica"
        font-size="25.6"
      />
      <path
        fill="#bd0728"
        d="m271.1 267-2.8-8-3 8zm-4.1-10.8h2.8l6.7 18.4h-2.8l-1.8-5.5h-7.3l-2 5.5h-2.5z"
        aria-label="A"
        font-family="helvetica"
        font-size="25.6"
      />
      <path
        fill="#bd0728"
        d="M285.1 256.1h3.6l5.2 15.6 5.3-15.6h3.5v18.4h-2.4V259l-5.2 15.5h-2.4l-5.3-15.5v15.5h-2.3z"
        aria-label="M"
        font-family="helvetica"
        font-size="25.6"
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
export class SvgGuFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
