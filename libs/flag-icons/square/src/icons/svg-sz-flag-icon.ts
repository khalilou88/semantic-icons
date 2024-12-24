import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sz-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sz"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#3e5eb9" d="M0 0h512v512H0Z" />
      <path fill="#ffd900" d="M0 96h512v320H0Z" />
      <path fill="#b10c0c" d="M0 128h512v256H0Z" />
      <g
        fill="#ffd900"
        stroke="#000"
        transform="translate(-42.4 58.8)scale(.98607)"
      >
        <g id="sz-a">
          <path fill="#fff" d="m492.9 154.3-24.3 8.6 24.2 8.5 24.3-8.5z" />
          <rect
            width="357.1"
            height="5.7"
            x="122.8"
            y="160"
            rx="3.1"
            ry="2.9"
          />
          <path
            d="M471.4 165.7a3 3 0 0 0 2.9-2.8 3 3 0 0 0-2.9-2.9m-2.8 5.7a3 3 0 0 0 2.8-2.8 3 3 0 0 0-2.8-2.9m-2.9 5.7a3 3 0 0 0 2.9-2.8 3 3 0 0 0-2.9-2.9"
          />
        </g>
        <use xlink:href="#sz-a" width="100%" height="100%" x="-23.3" y="17.1" />
        <rect
          width="485.7"
          height="8.6"
          x="59.8"
          y="195.7"
          stroke-width="1.1"
          rx="4.2"
          ry="4.3"
        />
      </g>
      <path
        fill="#fff"
        stroke="#000"
        d="M394.2 256c-28.1 28.2-65.7 84.5-140.8 84.5-65.8 0-112.7-56.3-141-84.5 28.3-28.2 75.2-84.5 141-84.5 75 0 112.7 56.3 140.8 84.5z"
      />
      <path
        d="M243.5 200.9c7.5 8.4 1.3 11.8 9.2 12.4 8.4.6 3.6 8.9 10.7 9.2 4.9.2-.5 19.8 4.2 26.3 4.8 6.8 8.9 2 9 6.9 0 5-13.2 4.5-13.4 20-.4 9-11.2 9.6-11.7 15.4-.6 5.4 21.2 8.5 21 13.3-.4 4.9-23.6 4.1-24.7 9.6-.5 5 32 9 34.7 23.4a130 130 0 0 1-29.1 3.1c-65.8 0-112.7-56.3-140.9-84.5 28.2-28.2 75.1-84.5 140.9-84.5 0 0-19.5 17.8-9.9 29.4"
      />
      <g stroke="#fff" transform="translate(-42.4 58.8)scale(.98607)">
        <g id="sz-d" stroke-width="6.9">
          <g id="sz-c">
            <path id="sz-b" d="M214 192.4v-22.9m13.8 0v22.9m13.8-22.9v22.9" />
            <use xlink:href="#sz-b" width="100%" height="100%" y="38.1" />
          </g>
          <use xlink:href="#sz-c" width="100%" height="100%" x="41.6" />
        </g>
      </g>
      <use
        xlink:href="#sz-d"
        width="100%"
        height="100%"
        x="104.8"
        stroke="#000"
        transform="translate(-42.4 58.8)scale(.98607)"
      />
      <g fill="#a70000">
        <path
          fill="#333"
          stroke="#000"
          stroke-width=".9"
          d="M461.8 252.7c-4.3 7.3 3.3-2.5 21.7 9.8a17.7 17.7 0 0 1 6.4 12.6c-.9-.5-1.5-1.8-2.5-2.6-1.3 1.3 1.4 7.4 1.7 10.3-2.9-1.6-2.6-2.3-3.6-4.3.2 2.4-.5 9 .7 11.5-2.3-.7-2.1-2.5-3.3-2.8.8 2.8-.7 5.9-.3 9.2-1.3-1.3-2.8-2.4-3.4-3-.1 1.7-2.5 5.7-2.6 7.1a3.7 3.7 0 0 1-1.6-2.4 48.6 48.6 0 0 0-6.7 10.2c-3.8-3.4-13.6-11.6-14.9-16-1.1 2.5-2.8 3.3-6 5.1-1.2-6.9-6-14.6-3.5-20.6a61.8 61.8 0 0 0-5 3.5 40.7 40.7 0 0 1 23-27.6z"
        />
        <path
          fill="#b3b3b3"
          d="M445.9 289.3c1.8-3.6 3.4-4.7 4.6-7 2-4 2.3-7.2 4-6.7 1.8.5 1.8 2.1-.5 6-2.2 4-3.3 4.9-8.1 7.7m12 8.4c-.2-2.6.6-3.8.4-5.5-.2-3.1-1.5-5.2.2-5.4 1.5 0 2.3 1 2.3 4s-.4 4-3 6.9zm9.1 5.3c-.7-3.8-.2-5.4-.7-7.9-.7-4.2-2.3-7-.8-7.5 1.5-.4 2.4 1 3 5.4.5 4.3.3 5.5-1.5 10m9.5-26.3c-2.3-1.8-3.6-1.9-5-3-2.5-2-3.8-3.9-4.6-2.9-.8 1-.2 2.1 2.4 3.9s3.6 1.9 7.2 2m-1.6 12.4c-1.2-2.5-2.4-3-3.2-4.6-1.3-2.8-1.3-5.1-2.8-4.6-1.4.7-1.6 2 0 4.6 1.6 2.7 2.4 3.1 6 4.6"
        />
        <path
          fill="#333"
          stroke="#000"
          stroke-width="1.1"
          d="M37.3 259.8c-.3-2.1.2-2.4-1.1-4 2 .7 2 3 4.3 1.4.9-.5 1.2-.5.2-2.9 2.4.1 10.4 2.9 11.7 3 3.4 0 9.5-3.6 13.8 1 4 4 2.7 8.4 2.7 14-1.6-.7-.9-1-2.6-3.1 1.3 5 0 14 0 19.4-.7-1.4-.6-.8-1.3-2-1.7 4.7-3.8 5.7-3.8 11.5-.7-2.3 0-1.8-.7-3-1.7 3.7-13.2 6.9-8.7 10.5-4-2.3-5.7-2-7.5-4.1-.8.5-1.4 1.5-2.1 2.7-7-3.2-4.5-10-10-14.7-1 2-.4 1.7-1.5 4.8-1-4.4-1.4-7.1-2.6-10.3-1 1.7-1 1-3 3.7-.8-5.3-2-6.6-1.6-10-2 1.4-.6.8-2.7 2.6 2-13.6 10.4-23.7 16.4-20.5z"
        />
        <path
          fill="#b3b3b3"
          d="M28.7 282c1.8-4.4 3.4-5.7 4.6-8.5 2-5 2.3-9 4-8.4 1.7.6 1.7 2.6-.6 7.5-2.3 5-3.3 6-8 9.4m6.8 11c.7-4 1.8-5.3 2.3-7.9.9-4.4.4-7.7 2-7.6 1.6.2 2 2 .9 6.3-1.1 4.5-1.8 5.5-5.3 9.2zm8 7.7c.3-3.8 1.2-5.3 1.3-7.8.3-4.3-.6-7.4 1-7.4 1.5 0 2 1.5 1.6 5.9-.5 4.3-1 5.4-3.8 9.3zm17.5-25c-3.3-3.3-5.3-4-7.5-6-3.7-3.8-5.6-7.3-7-6-1.3 1.2-.5 3 3.5 6.6 4 3.6 5.4 4.1 11 5.4m-2 12.9c-2.1-3.3-3.8-4.3-5.2-6.4-2.5-3.8-3.2-7-4.7-6.2-1.4.8-1 2.5 1.6 6.2 2.7 3.6 3.7 4.3 8.3 6.4"
        />
        <path
          fill="#333"
          stroke="#000"
          stroke-width=".8"
          d="M207.9 186.5c-4 7.5 6.8-2.5 23.6 10.2a29 29 0 0 1 7.6 15.9 50.7 50.7 0 0 1-9.9-4.4s7.5 7.5 7.5 16.1c-2.7-1.6-4-1.4-5-3.4 0 2.8 2.5 4.5 2.5 8.8a34.8 34.8 0 0 0-5.2-3.4c2.5 4.3-4.5 12.7-1 15.4a21.9 21.9 0 0 1-14.9-9c-1.3.8-1.4 2.2-1.5 3.7.2.2-9.3-7-8.4-9.8a8.3 8.3 0 0 0-1.8 4.8 26 26 0 0 1-7.9-11.4l-3.2 4c-1.1-7-1.1-6.8 1.2-12.8a56.7 56.7 0 0 0-4.6 3.5 41 41 0 0 1 21-28.2z"
        />
        <path
          fill="#b3b3b3"
          d="M198.2 223.3c.7-5.2 2-7 2.4-10.5.8-5.8-.1-10.2 2-10 2 .1 2.6 2.3 1.6 8.1-1 6-2 7.3-6 12.5zm11 9.6c-.5-4.4.3-6.3 0-9.1-.4-5-2-8.3-.2-8.6 1.9-.3 2.8 1.3 3 6.4.2 5-.3 6.3-2.9 11.3zm17 7.8c-1.9-3.8-3.5-5-4.7-7.4-2-4.3-2.6-7.8-4.2-7.2-1.6.7-1.5 2.5.8 6.7 2.4 4.2 3.4 5 8 7.9zm5.9-34c-4.8-2.5-7.2-2.6-10.2-4.1-5.4-2.9-8.5-6-9.6-4.2-1 1.7.4 3.4 5.9 6 5.5 2.5 7.2 2.6 13.8 2.2zm1.7 14.1c-3.5-2.8-5.5-3.2-7.7-5-4-3.3-5.9-6.4-7.1-5.1-1.3 1.3-.5 3 3.6 6 4 3 5.5 3.4 11.2 4.1"
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
export class SvgSzFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
