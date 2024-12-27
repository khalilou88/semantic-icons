import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-bn-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-bn"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#f7e017" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 35.6V263l512 106.7v-121z" />
      <path fill="#000001" d="M0 156.4v106.7l512 213.3V369.8z" />
      <g fill="#cf1126" transform="translate(-256)scale(.71111)">
        <path
          d="M695.7 569.7a117.2 117.2 0 0 1-49.4-17.2c-2.4-1.6-4.6-3-5-3-.4 0-.6 1.9-.6 4.1 0 6.4-2.6 9.6-9 11.3-6.2 1.6-15.6-1.6-23.2-8a68.3 68.3 0 0 0-24.7-13.5 39.9 39.9 0 0 0-28 3.6 8.7 8.7 0 0 1-2.8 1.3c-1.1 0-1-6.9.2-9 1.5-3 5.1-5.8 9.4-7.3 2.2-.8 4-1.8 4-2.3 0-.4-.8-2-1.7-3.6-2.9-5.1-1.7-10 3.4-13.9 5.2-4 14-4.6 21.7-1.7a32 32 0 0 0 4 1.4c1 0 .4-1.5-2.4-5.6-3.2-4.7-3.9-7-3.5-12.7a14.7 14.7 0 0 1 13.5-13.5c5.8-.4 9.4 1.6 18 9.7a144 144 0 0 0 86 41.6c8.3 1 24.8.5 34.5-1a156 156 0 0 0 81.8-40.8c6.4-6 9.4-7.6 14.7-7.6 4.5 0 7.7 1.4 11 5 3 3.3 4 6.4 3.6 11.5-.2 3.2-.7 4.7-2.6 7.9-2.8 4.5-2.3 5 3.2 2.8 7.6-3 16.9-1.6 21.9 3.2 4.4 4.2 4.8 8.4 1.4 14-1.3 2.1-2.3 4-2.3 4.4 0 .6 1 .8 5.5 1.6 6 1 9.5 5.4 9.5 12.2 0 2-.3 3.7-.6 3.7s-2.6-.9-5-1.9c-7-2.9-11-3.6-19.2-3.5-6.2 0-8.3.3-12.6 1.7a57.5 57.5 0 0 0-19.5 11.5c-6.4 5.7-10.4 7.5-16.6 7.4-5.8 0-9.7-1.7-11.8-5-1.1-1.8-1.3-2.8-1-6.8.2-2.6.1-4.7 0-4.7-.3 0-2.5 1.4-5 3.1A80.5 80.5 0 0 1 778 560a181.6 181.6 0 0 1-82.3 9.7"
        />
        <path
          d="M706.3 525.2a136.4 136.4 0 0 1-97.9-55.7c-24.4-33.2-32-77.1-24.6-117.2 4-18.3 12-36.6 25.5-49.6a114.6 114.6 0 0 0-8.7 74.3c9 49.8 51 91.9 101.3 99.2 20 5.7 40.5-.4 59.5-6.5 42-14.8 74-54.6 77.8-99.1 3.3-24-.3-49.1-11.2-71 6.2 3.3 14 16.2 18.6 24.8 16 31 16.7 68.1 7.3 101.2-12.8 42.1-45 79-87.5 92.4a165.7 165.7 0 0 1-60 7.2z"
        />
        <g id="bn-a">
          <path
            d="M512 469.9c-2.5-.4-5.3 2.1-4.3 4.7 1.8 2.6 5 4 7.8 5.2a54.2 54.2 0 0 0 23.2 3.6 49.6 49.6 0 0 0 17-3c3-1 6.8-2 8-5.4 1.3-2.1-1-4.3-3.1-3.9-3 .7-6 2-9 2.9a57.7 57.7 0 0 1-20.3 2 54 54 0 0 1-14.4-4.2c-1.6-.7-3.1-1.7-4.9-1.9"
          />
          <path
            d="M514.8 459.5c-2.5-.4-4.7 2.6-3.7 5 2 2.8 5.3 4.3 8.4 5.6a42.4 42.4 0 0 0 17 2.9h1.5a37.6 37.6 0 0 0 14.4-2.8c2.7-1.1 6.1-2.2 7.3-5.2.9-1.7.2-4.1-2-4.3-1.8 0-3.5 1.2-5.3 1.7a44.3 44.3 0 0 1-20.6 3.2c-4.4-.5-8.5-2.1-12.5-4-1.5-.7-2.8-1.8-4.5-2z"
          />
          <path
            d="M518.3 449.6c-2.2-.3-3.7 2.2-3.3 4.1.3 1.8 1.8 3 3.1 4a30 30 0 0 0 18.6 5.3h1.6a28 28 0 0 0 12-2.8c2.5-1 5.4-2.3 6.3-5.2.4-1.3.6-3.2-.9-4-1.6-.8-3.1.5-4.5 1a34 34 0 0 1-15.5 3.9 27 27 0 0 1-13.1-4c-1.5-.7-2.7-2-4.3-2.3"
          />
          <path
            d="M481.5 302.7c-3.2 3.3-.7 9.3-1 13.5 1.8 13.2 3.9 26.5 8.8 39 6 12 18.8 18.5 26.5 29.2 2.8 5.1 1.8 11.3 2.4 17 .4 15.3.3 30.7 0 46 7 3.6 14.5 7 22.5 5.7 4.7-1.1 13.5-1.8 14.5-6.5l-1-79.5c-2.7-8.1-11-12.3-17.1-17.5a155.5 155.5 0 0 1-14.2-16.1c-2.6-4.5-12.9-6-9.2 1.6 2.2 6.7 7.7 11.6 9.1 18.6.3 3.9 5 11 1 13.2a24.5 24.5 0 0 0-10.7-10c-4.4-3.3-11.7-4.7-13.3-10.5a42.9 42.9 0 0 0-11-22c1.5-7.4 0-16.7-6.4-21.5z"
          />
          <path
            d="M491.4 304.2c-3 .5-2.8 4.2-1.5 6.2a27.2 27.2 0 0 1 1.1 13.4 44.1 44.1 0 0 1 10.6 21.7c0 3 3.2 4 5.3 5.5 4.9 3.1 10.3 5.4 14.7 9.3.9 1 1.6 2 1 0-.7-2.6-1-5.4-3-7.3-2.8-3-6.2-5.6-10.2-6.4-.3-4.2-2.3-8-4.1-11.6-2-3.5-4.1-7.2-7.5-9.4 0-6.1 0-12.5-2.6-18.2-.8-1.4-2-3.1-3.8-3.2"
          />
          <path
            d="M499.7 306.6c-2 .6-1.6 3.2-1 4.7a54 54 0 0 1 1 13.2c3.9 3 6.2 7.4 8.4 11.6 1.4 2.8 2.6 5.8 3.1 8.9 3.1 1 5.8 3 8.2 5-1-2.8-3-5-4.5-7.7s-3-5.6-3.7-8.7c-3-3.1-4.6-7.6-4-12 .2-4.7-1.3-9.6-4.5-13.2-.8-.8-1.8-1.7-3-1.8"
          />
          <path
            d="M509.2 308c-1.2.2-1.8 1.2-2.4 2.1-.3.9.8 1.8 1 2.8a21.8 21.8 0 0 1 1.4 10.4c-.1 2.5.8 5 2 7a3.9 3.9 0 0 1 3.5-2.8c.5 0 1.4.2 1-.7-.4-4.8-1.1-9.6-2.8-14a9.6 9.6 0 0 0-2.8-4.5c-.2-.2-.6-.4-1-.3z"
          />
        </g>
        <use
          xlink:href="#bn-a"
          width="100%"
          height="100%"
          transform="matrix(-1 0 0 1 1440 0)"
        />
        <path
          d="M715.7 476a35.6 35.6 0 0 1-29.9-24c.3-2.2 3 1.2 4.3 1.5a19 19 0 0 0 8 2.6c3.5 1.5 5.7 5 9.1 6.9 1.6 1.2 7.2 3.6 6.1-.3-1.3-2-2.2-4.6-1-7 1.8-4.1 4.7-7.7 7.7-11.2 2.1-.7 3.6 3.6 5.1 5 2.1 3.3 4.7 7.3 3.4 11.3-1.2 1.5-2 6 1.3 4.6 4-1.8 7.3-4.8 10.6-7.6 3-2 6.7-2.1 9.7-4 1.5-.3 4.4-3.1 5-1.6a44.9 44.9 0 0 1-7.4 12.3 32.1 32.1 0 0 1-18.8 10.9c-4.4.8-8.8 1-13.2.6"
        />
        <path
          d="M731.5 460.2c.3-2.7-.3-5.4-1.7-8-2.1-4.2-5-8-8-11.9-2.8-1.6-4.3 3.7-6.1 5.2-2.9 4.3-6.5 8.7-6.7 14-1.6 2.5-4.6-2-5.9-3.5a19 19 0 0 1-4-12 50.8 50.8 0 0 1 3.6-20.6c2-5.6 5.1-11 4.8-17 .2-4.7-.7-9.7-4.4-12.8-3.6-2.8 2.3-3.4 4.1-2 3.2.3 4.9 5.5 7.8 4.2 1.1-2.7 1.4-6 3.8-8.1 2.3-3.2 4.7 1.3 5.5 3.5 1.7 1.8 0 6.5 2.6 6.6 3.2-2.3 5.5-6 9.6-6.9 1.7-1 4.5 0 2.3 1.8-3 2.9-5.6 6.4-6.2 10.7-.9 5.3.4 10.7 2.7 15.4 4.5 9.4 8 20 5.7 30.5-1 4.6-4.2 8.6-8 11.3-.5.3-1.3.3-1.5-.4"
        />
        <path
          d="M726.7 389.6a21.2 21.2 0 0 0-5.6-7c-2.4 0-3.9 3-5.5 4.6-1.1 2.1-2.5 5.6-5.3 2.9-4.5-2.6-5.2-8.3-5.2-13-.3-7.6 2.8-14.7 5.5-21.6 1.7-4.3 1.3-9.2.2-13.6-1.3-5-5.4-8.6-8.5-12.6.2-1.5 4.2-.7 5.7-.4 3.4.9 5.4 3.8 7.9 6 1.8-.6 1-4.2 1.9-5.9 0-2.4 3.2-5.5 4.5-2.1 2 2.2 0 6.5 2.5 7.8 2.4-.9 3.6-3.5 5.8-4.7a8 8 0 0 1 7.8-.5c.9 2.2-2.6 4-3.6 6a20.4 20.4 0 0 0-3.8 18c1.4 5 3.8 9.5 4.7 14.5a40.1 40.1 0 0 1-.5 17.2c-.9 3.4-3.8 5.6-6.8 7-.8-.7-1.2-1.7-1.7-2.6"
        />
        <path
          d="M711.6 326.9c-3.4-2.5-4.5-4.8-4.5-9.5 0-2.3.5-3.6 2-5.8 2.4-3.2 2-4.2-1.3-3.3-5.3 1.5-7.8.2-8-4.3 0-2.2.4-3.1 3.3-6.7 2.4-2.8 3.3-4.3 2.8-4.8-.5-.4-3.3 2-9 7.8a124 124 0 0 1-11.4 10.6c-9.8 6.6-19.2 7.6-23.5 2.5-2.2-2.6-2.1-4 .4-5.6a27.4 27.4 0 0 0 4.4-3.7 86 86 0 0 1 16.1-11.6c3.6-1.8 4.4-3 2.1-3-3 0-12.5 6.2-19.8 12.8-2.1 2-5.2 4.2-6.8 5a25.4 25.4 0 0 1-13.9 1c-2.2-.7-6.3-4.5-6.3-5.9 0-.3 1-1.1 2-1.8a30 30 0 0 0 4.6-3.2c5.8-5 16.8-10.3 25.5-12.2 2.8-.5 1.7-2-1.4-1.8a56 56 0 0 0-25 11.7c-8.3 6.9-20.8 6.2-24.8-1.3-.7-1.3-1.2-2.5-1-2.7a92.8 92.8 0 0 0 20.4-7.8 51.5 51.5 0 0 1 18.1-6.5c2.8-.5 3-1.9.3-2.2-3.6-.4-9 1.4-18.5 6-12.3 6.1-15.8 7.2-22.2 6.8-6-.4-9.3-1.9-14-6.4-3.2-3-7.6-10.5-6.8-11.4a63.5 63.5 0 0 0 15.8 1.3c8.3 0 10.6-.2 15-1.5a84.3 84.3 0 0 0 24-12.1 57.5 57.5 0 0 1 36.8-13.6c12.4 0 20.2 2.8 27.2 9.9 2.4 2.4 4.4 3.9 4.7 3.6.3-.3.6-4.5.7-9.3 0 0 3.7-.4 4.5.7 0 7.7 0 8.4 1.2 8.4.7 0 1.5-.8 2-2 1-2.5 5-6 9.2-8.2 9-4.5 24.7-4.7 37.3-.3a62.4 62.4 0 0 1 16.7 9.5 90.2 90.2 0 0 0 24 12c6.8 2 19 2.5 25.1 1a61.9 61.9 0 0 1 5.4-1c2.3 0-1.6 7.6-6.2 12.1-8.4 8.2-19.3 8.1-34.6-.1-9.6-5.2-21-8-21-5.2 0 .6.6 1 1.5 1 3.3 0 9.7 2.2 18.7 6.5a53.7 53.7 0 0 0 18.3 6.5c2.3 0 2.4 1.5.2 4.7-2.3 3.4-6.2 5-11.7 5-5.3 0-8.3-1.1-13-5-8-6.6-27.6-14-26.9-10 .2.7 1.1 1.2 3.2 1.5a56 56 0 0 1 23.1 11l5.9 4.3c1.1.6 1.1.8.2 2.5-1.4 2.8-5.2 4.9-9.2 5.3-5.2.6-9.8-1-14.5-5-10-8.3-19.3-14.3-22.3-14.3-2.5 0-1.4 1.4 3 3.7a79.7 79.7 0 0 1 15.8 11c2 1.9 4.3 3.7 5 4.1 1.9 1 1.8 2.4-.2 5s-5.4 3.8-9.7 3.3c-8.6-.9-15.4-5-26-16a70.7 70.7 0 0 0-8.2-7.8c-1.4 0-.5 1.9 2.2 5 3.4 3.7 4 5.8 2.7 9-1.1 2.6-3 3.3-6.8 2.2-4-1-4.6 0-2 3.1 3.8 4.9 3.3 10.7-1.5 14.8a12 12 0 0 1-3.4 2.3c-.4 0-1.4-1-2.3-2.4-3-4.6-5.7-4.6-8.7 0a53.6 53.6 0 0 1-2 3 113.1 113.1 0 0 1-3-2.2"
        />
        <path d="m726.7 233-5.2 4-4.6-3.4v27.8h9.8z" />
        <path
          d="M694.9 204.3a88.3 88.3 0 0 1-9 32.3l11.1-10.3 7.7 9.2 8.4-9.4 8.5 8 8.2-8.3 8.5 10 7.4-8.2 12.6 9c-4.6-10-10.7-18.6-10-32.8-12.1 9-41 10.6-53.4.4z"
        />
        <path
          d="M717 197.6c-4.5 0-9.2.1-13.4 1a20.1 20.1 0 0 0-7.8 3c.3 8.6 41 12.1 51.9.2a20 20 0 0 0-8.2-3.3c-4-.8-8.6-.8-12.9-1v7.1H717z"
        />
        <path d="M724.9 154h-6.3v49.4h6.4z" />
        <path
          d="m724.9 155.2-2.4 23.7 24.3 11.9-12.3-16.5 16.8-5.5zm-2.7-6.1c-3.7 0-6.4 1.4-6.4 3s2.7 3 6.4 3 6.4-1.4 6.4-3-2.7-3-6.4-3"
        />
      </g>
      <g fill="#f7e017">
        <path
          d="M249.6 401c2.9-1 4.5-2.7 5.6-6a18 18 0 0 0 1-3.9c-.3-1-1.6-1-2.9.2-1 .7-1 1.1-.8 2.7.7 4-.7 5-8.3 5.8-.7 0-2.9 0-4.8-.3-3.6-.4-4.8 0-3.5 1a7 7 0 0 0 2.2 1c2 .5 9.4.2 11.5-.6zm15.7-.7c.4-.4 1.8-1 3.2-1.5 1.8-.6 2.8-1.2 3.5-2.4 2.2-3.3 1.8-6.1-1.4-10-1.8-2-2.6-2-4 .4-1.2 2-1.2 2 .6 2.5 1 .2 1.8 1 2.3 1.8 1.9 3.3 1.3 5.3-1.5 5.3-2.6 0-3.3.4-4 2a8.9 8.9 0 0 0-.6 2.1c0 .7 1 .6 1.9-.2m-5.2-3.8c.5-1.3.7-3.6.6-8.4 0-3.7-.1-6.8-.3-7-.4-.3-2.5 1-2.8 1.9-.1.5.1 1.5.5 2.3.7 1.3.8 2.5.6 7.5-.3 6.3.1 7.3 1.4 3.7"
        />
        <path
          d="M248.1 393.6c.3-1.2.6-3.6.7-5.4.2-1.7.5-4 .8-5 .8-2.4 0-3-2-1.6l-1.4 1 .3 3.5c.3 3.2-.2 9.1-1 11.4-.1.7.2.5 1-.4a9.4 9.4 0 0 0 1.6-3.6zm-10.7 1.7c2.6-2.2 2.3-6 2.9-9 0-2 1.3-4.4.4-6.1-2.4.4-4 2.7-2.7 5 .1 2.7 0 5.6-1.3 8-1.1 1.5-4.7 1-4.5-1.1.9-3.3-3-1.7-4.6-.8-1.2.8-3.7.9-2.8-1.2-.6-2.8-4.1-1-6-1-1.8 0-.2-3.7-2.8-3-4.8-.5-10.2 0-14.4-3-2.4-1.1-2-4-.8-6 1.6-2.6 2-5.9 4.4-7.9 2.4-2.3-2.2-1.3-3.3-.5-2.3 1.2-.2 4.5-2 6.3-1.2 2-2.7 4.5-5.2 4.2-3.8-.7-6-4.2-8.6-6.5-2.3-.5-1 3.7.2 4.6a23.3 23.3 0 0 0 7.9 3.8c2.8-.5 2.9 3.2 5.3 3.8 4.4 2 9.3 2.6 14 2.9 2 .1.9 3.5 3.4 2.8 1.4.4 4.5-.5 4.6 1.1-2 2.5 2 2.5 3.6 2 2-.3 4.4-1 5 1.6 1.6 1.8 4.6 1.5 6.5.5z"
        />
        <path
          d="M195 373.7c.7-1 1.9-3 2.6-4.5a17.3 17.3 0 0 1 2.1-3.7c1.3-1.4.6-2.2-1.5-1.7-1 .2-1.5.6-1.6 1.5-.6 3-1.7 6.1-2.7 7.5-1.8 2.6-1.8 2.7-1 2.7.3 0 1.2-.8 2-1.8zM168.2 357c-2 0-2 1.3-.1 2 .9.3 1.7 1 2.3 2.4 2 3.7 3 4.4 8 4.8l3.3.3.1 2c.1 1 .4 2 .6 2 .3 0 1.5-.6 2.8-1.2 2.3-1.2 4.6-4 4.6-5.7 0-1.1-2-2.4-3.6-2.4a7 7 0 0 0-3.4 1.5c-3.6 2.6-7.4 2-9.5-1.3-1.7-2.8-3.5-4.4-5.1-4.4m17.4 7c1 0 1.2.7.7 2-.4 1-1.6 1-2 0-.3-1 .3-2 1.3-2m134.9-4.4c-1.3 0-1.7.3-2.5 1.6-1.4 2-1.5 6.3-.2 7.8.7 1 .8 1 2.5.3 2.3-1 2.7-.9 2.6.3 0 3.2-4.5 9.2-9.2 12.5a8.5 8.5 0 0 0-2.5 2.1c-.4 1 1.4.7 3.5-.4 3-1.5 6.8-5.4 8.4-8.5 1.2-2.5 1.4-3.3 1.6-7.6 0-4 0-5.1-.7-6.5-.7-1.5-1-1.6-2.9-1.6zm.2 2.8c1 0 1.1.2 1.2 1.6.1 1.2 0 1.9-.7 2.5-1 .8-1 .8-1.8-.4-1-1.7-.4-3.7 1.3-3.7m-21.6 30.3a16 16 0 0 0 8.2-7.7 20.6 20.6 0 0 0 1.3-3.3c0-.6-2-1.5-3.3-1.5s-1.4-.9-1-3.2c.6-2.3 0-5.1-1-5.1-.4 0-1 .5-1.4 1.1-.7 1-.7 1.5-.2 3 .7 2 .1 3.7-1.8 5-1 .7-1.5 1.5-1.5 2.2 0 .6.1 1.1.2 1.1l2.3-1.1 2-1.2 1.3 1c.6.5 1.2 1.4 1.2 1.9 0 2.5-7.2 6.8-12.2 7.2-2.6.2-3 0-4-.8-.7-.8-1-1.4-.8-2.3l.6-2.7c.5-2.2-.5-1.9-2.1.7-1.4 2-1.8 4.4-1 5.6.6 1 4.7 1.9 7.6 1.7 1.8-.1 3.7-.6 5.6-1.6m27.7-15.5c2.6-2.6 3.8-5.8 3.8-10.7v-3.7l2.1-1c2.8-1.3 5.5-4 5.5-5.4 0-1.6-.7-1.5-1.9.2-.9 1.2-2 1.9-6.4 3.9-1.1.5-1.2.8-1.4 5.4-.3 5.3-1 7.2-4 10.9-1.8 2.1-1.9 2.4-.6 2.4.5 0 1.8-.8 3-2zm-28.5-3c.3-.7-1.2-1.2-1.8-.6-.3.3-.3.7-.1 1 .4.7 1.7.5 2-.3zm39.3-10.1c.3-.8-1.2-1.3-1.8-.7-.3.3-.3.8-.1 1 .4.7 1.7.5 2-.3zm-47.3-27.6c-1 .5-1.5 1.6-2.2 2.5-.5.3-.1.6.2 1 1.8 1.9 2.5 4.5 3.4 7 .8 2.8 1.9 5.9 1 8.9-.4 1.1-1.3 2.3-2.6 2-2.2-.2-4.3-.7-6.4-.7-2 0-3.5 1.8-5.4 1.6-1.3.1-1.2-2.5-2.4-1.8-.6 1.4-.3 2.9-.4 4.4.3.2.9 0 1.2 0h4c.2 1.4.1 3 1.1 4 1.4.5 2.9 0 4.1-.5 1.4-.6 1.6-2.3 2-3.5.4-1.4 2.2-1 3.3-1.6a6.1 6.1 0 0 0 4.1-6.1c-.1-4.1-1.7-8-2.9-11.8-.6-1.7-1-3.4-1.7-5.1 0-.1-.2-.3-.4-.2zm-6.4 23.3c1.4 0 2 1.7 1.8 2.9-.6 1.6-2.6.6-3-.6-.7-1-.2-2.4 1.2-2.3"
        />
        <path
          d="M230.4 346.5a3.6 3.6 0 0 0-2.1.7c-3.8 2.7-4.8 5.8-2.2 7 1.9.9 1.4 2-1.6 3.5-4.2 2-8 1.8-15-1.1-1.8-.8-2.3-.5-1.9 1.1.4 1.6 1.9 2.4 5.4 3.3 3.9.8 8.5.6 11.5-.7a14.9 14.9 0 0 0 4.6-3.6l2.3-2.5 2.7.3c3.3.4 3.4.5 3.4 2 0 1.3 0 1.4 3.1 1.6l5 .3c1.4 0 2.2.3 2.6 1 .6.7 1 .8 6 .3 4.6-.4 5.6-.4 7.7.4 1.5.5 3.1.7 4.4.5 3.6-.4 8.5-3.3 9.2-5.5.1-.2 1.4-.7 2.9-1 3.6-.7 3.8-1.5.4-1.9a24.3 24.3 0 0 1-4.9-1.2 13 13 0 0 0-3.7-.9c-1.8 0-3.6 1.1-3.6 2.3 0 .8.3.9 2.5.7 2-.3 2.6-.2 3.6.7.8.6 1.2 1.2 1 1.4-.4.8-4.6 2.7-6.5 3a5 5 0 0 1-3.2-.4c-1.7-.8-4.1-1-4.6-.3-.1.4-.7.2-1.4-.5l-1-1-2.6 1c-2.6 1-3.5 1-3.5-.2 0-.6-.7-.6-4.5-.4-4.2.3-4.6.2-5.4-.6-.7-.8-.7-1.1-.2-2 .5-.7.5-1 0-1.5-.4-.4-1-.4-2.6 0-4.1 1.1-5.3.5-5.3-2.7 0-2-1.1-3.1-2.5-3.1m-1 3c.2 0 .3 0 .6.4.4.3.6 1 .4 1.4-.3 1-2.1.9-2.5-.1-.1-.5 0-1 .6-1.4z"
        />
        <path
          d="M222 352.4c2.4-1.6 2.4-1.4 2.7-5.9.3-3 .3-3.3-.6-3.3-1.2 0-1.9 1.3-1.9 3.9 0 1.6-.2 2.4-1 3.3-2.2 2-7.4 1.1-8-1.5-.2-.9 0-1.7 1.1-3.2 2.3-3.2 1.8-4-1-1.6-2 1.7-2.3 1.7-1.9.3.3-1.3-.4-1.9-2-1.5-.7.2-1.1.7-1.3 1.7-.2 1-.7 1.5-1.4 1.6-1.3.4-3.4-.8-3.4-1.9 0-.7 3.2-4.6 7.3-9a19 19 0 0 0 2.9-3.3c0-.2-.9-.4-1.9-.4-1.5 0-1.8.2-1.8.9 0 .4-2.1 3.2-4.7 6-5.3 6-5.7 7.3-3 8.8a6.4 6.4 0 0 0 6.9-.2l1.7-1.2v2.2c0 2.7.5 3.6 2.7 4.8a8.5 8.5 0 0 0 8.5-.5zm111.3-36.9c-2 1.2-.5 3.7-.2 5.3-.8 2.2-3.6 2.8-5.7 3.3-3 .4-5.1 3-6.2 5.6-.6 1.7-2.1 4.3-3.7 1.7-1.4-1.4-4-2.5-5.6-.9-1.3 1.2-1.6 3-2.1 4.6-.7-1.2-1-3-2.6-3.4-2.5.3-1.6 3.5-.5 4.8 1.1 1.5 2.1 3.5 1 5.3-.8 2.2-4 3.6-6 1.8-1.7-1-.5-4.3-2.2-4.5-.9.7-1 4.1-2.3 2.2-1-1.6-.5-3.8-1.7-5.2-1.4.2-2.6 2.6-2.1 4a23 23 0 0 1 3.4 8.8c.5 1.3 0 3.7 1.1 4.2.8-2 0-4.2.7-6.2 1.8-.2 4 .6 5.9.2 2.8-.4 5-2.7 5.9-5.2.3-2 0-3.8-.1-5.7 2.2.3 4.5.3 6.6 1 1 1.6-.3 3.9-.6 5.6-1.1 3.6-4 6.2-6.7 8.6-1.1.7-1.3 2.5.4 1.6 3.7-1.6 6.4-5 8-8.6 1.2-2.7.2-5.8 1-8.6 1.1-2.2 3.8-1.7 5.8-1.7 2-.1 3.8-2.5 3-4.5-.6-2.3 1.9-3.4 3.5-4.2 2.2-1.1 4-3.4 3.8-6-.1-1.3 0-3.8-1.8-3.9m-7.9 13.3c2.4.7-.4 5.2-1.7 2.3-.3-1 .6-2.3 1.7-2.3m-11 3.3c3.1-.2 2 4.3-.6 2.3-1.4-.7-1-2.4.6-2.3m-111.7 17.4c.1-.5-.1-.8-.5-.8-.9 0-1.4.8-1 1.4.4.7 1.4.3 1.5-.6m36.2-4c0-.7-.3-1-.8-.8-1.2.2-1.4 1.7-.2 1.7.7 0 1-.3 1-1zm-44.7-21.7c-1.5-.3-2.4.9-2.9 2-1 1.9-2.4 3.7-4.3 4.7-1.4.4-3-.2-4.1-.9-1.5-.7-1.1-2.4-1.8-3.6-1-.8-2.8.3-2.8 1.6-.1 1.7 1.5 2.7 2.8 3.3 1.1.7 2.7 1.1 3.2 2.5 0 1.2.4 2.5 1.9 2 1.6 0 2 2 1.3 3.2a6.8 6.8 0 0 0-.8 4.3c.8.7 1.6-1 2.2-1.6l1.1-1.5c2.8.2 5.7.5 8.5.4 2 0 3.8-1.3 5-2.7 1.9-2 3.4-4.2 5.5-5.8 1.5-.4.7-3.2-.9-2.4-1.4.6-1.8 2.1-2.8 3.1-1.6 2-3.3 4-5.4 5.6-1.5.6-3.2.4-4.8 0-.6-.5 1.3-1 1.6-1.6.9-1 2-1.8 2.4-3-.5-1-2-1.1-3-1.1-2.7.3-4.7 2.5-7.3 2.7-2 0-1-2.1 0-2.8 1.7-2.1 3.6-4.1 5.5-6.2.5-.6 2.4-1.2 1.2-2-.4-.2-.9-.2-1.3-.2m1.3 10.6c1.3.7-.9 2-1.8 1.8-1.2.3-1.2-.9-.2-1.1.6-.3 1.3-.7 2-.7m-4.1 2.8c.7 0 2.3.7.8 1.1-1 .8-2.2-.8-.8-1.1"
        />
        <path
          d="M223.4 339c0-1-1.8-.9-2 .2-.1.6 0 .8 1 .7.5-.1 1-.5 1-.9m79.7-7c.2-1-1.2-1.6-1.9-1-.7.8 0 2.1 1 2 .4-.2.8-.6.9-1m-124-9.8c1.2-1 1.2-1.1.7-3.5-.8-3.3-.7-3.7.5-4 1.6-.4 5.7 1.8 6.6 3.5.7 1.4.7 1.4-.5 2.5-1.3 1.2-1.3 2.6 0 2.6 1 0 4-2.8 4-3.8 0-1.3-3.3-4.6-5.8-5.8a11.4 11.4 0 0 0-5-1c-3.3 0-3.7.7-2.9 4.5 1 4.4-.3 5-4 1.7a11.1 11.1 0 0 1-3.6-9.2c0-4.4 1.7-6.6 5.4-7 2.6-.4 2.5-1 0-1.4-3.9-.6-7 2-8.3 6.4-1.3 5 1.8 11.1 7.2 14.2 2.9 1.7 4 1.7 5.7.3m148.5-5.5c.3-.3.5-1 .5-1.5s.6-1.7 1.2-2.5a7.2 7.2 0 0 0 1.2-2c0-.9-1.5-.8-2.6 0-1.2 1-2 1-2 .1 0-.2.5-.7 1.2-1 1.7-.8 1.8-1.6.4-2.3-1.9-.8-3.7.7-3.9 3.2-.1 1.7 0 2 1.3 2.7 1.2.7 1.4 1.1 1.2 2-.3 1.8.4 2.4 1.5 1.3m14-1.6c1-.9 1.8-2 1.8-2.3 0-.3.9-1.2 2-2 3-2.2 3.7-4.4 2.3-7.9-.5-1.3-2.2-3.2-5.8-6.5a37 37 0 0 0-5.7-4.6c-1 0-.9 3.7.1 4 1.9.6 3 1.4 5.8 4 3.4 3 4.9 5.8 4 7.3-.7 1.5-1.8 1-4.8-2-1.5-1.7-3-3-3.3-3-.4 0-.6.5-.6 1.4 0 1 .5 2 2 3.7 2.5 2.8 2.8 4.4 1 5.9-.8.5-1.4 1-1.6 1a35.7 35.7 0 0 0-9.5-10.6c-.5 0-.7.4-.7 1.5 0 1.3.3 1.8 1.3 2.3 1.2.6 4.4 3.8 7.5 7.6.9 1 1.8 2 2 2 .1 0 1.1-.8 2.1-1.8zm6.2-17.8c-.4-1.3-9-10-9.8-10-.5 0-.6.5-.5 1.9 0 1.7.3 2 1.4 2.2.8.3 3 2 5 4s3.8 3.4 4 3.3zm-51 98.7a1.3 1.2 0 1 1-2.4 0 1.3 1.2 0 1 1 2.5 0zm4.6-1.5a1.3 1.2 0 1 1-2.6 0 1.3 1.2 0 1 1 2.6 0"
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
export class SvgBnFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
