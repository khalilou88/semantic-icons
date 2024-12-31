import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-im-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-im"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="im-a">
          <path fill-opacity=".7" d="M148.2 0h744.1v744h-744z" />
        </clipPath>
      </defs>
      <g clip-path="url(#im-a)" transform="translate(-102)scale(.7)">
        <path fill="#ba0000" fill-rule="evenodd" d="M1063 744H0V0h1063z" />
        <path
          fill="#ffef00"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.2"
          d="M556.6 546.5c.3-1 1-10 .6-10s-13.7-15.8-13.4-15.8 17.2 3.8 17.2 3.2c0-.5 6.8-16.6 6.8-17l8.2 19.7 16.6 7.3-11.7 9.6 2.7 19c0 .3-11.7-11-11.7-11l-13 1.4s-1.7-5.8-2.3-6.4z"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.8"
          d="M466 300.7c-11 5.7-53.7 54.5-59.6 62-4.9 11.1-14.5 25-24.4 34-10.5 8-16.4 19-14.9 29.2-.1 12.9 7 21.6 12.8 30.7 3.4 4 8 6.7 12.8 7 10 1.4 10.9 4.4 15.8 6.3 19.7 26.8 49 46.5 70 62a98.8 98.8 0 0 1 26 18.1 47 47 0 0 1 4.2 29l-15.6 59c-2.7 16.1 11.3 12.5 12 9.3 6.4-8.2 15.8-2.4 29.2-49.8l18.5-25s7.2-2.8 7.2-3.5c10.8-13 2.5-20.4-3.6-22.8l-13.5-5s-15.7-15.6-16.4-15.6c-7.4-21.7-44-67.9-52.4-74.3a62.1 62.1 0 0 0-14.3-12.1c-8.5-4.1-11.3-5.5-16.5-7.6-4.4-1.7-1.3-6.5 1.5-8.7 28.9-15.7 51.8-33.2 79.6-51l4.3-2.9-10-57-46.3-16.3c-2.4 1.7-4.2 3.3-6.4 5z"
        />
        <path
          fill="#ffec00"
          fill-rule="evenodd"
          d="M504.7 600.5c.2-.6 29-5.9 29-5.9l-3.5 10.7-28.7 8.6z"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="M429.6 492a55.1 55.1 0 0 1 31.4-29.7"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.5"
          d="M503.7 600.7c1.9-.5 10.1-3 12.5-3.3l7.6-2c2.9-.7 4.6-1.2 7.6-1.7 2.3-1 4.6-1.5 7-2.1m-40 26.9c.3-.3 2.3-2 3.7-2.9 1.7-.5 7.3-3 9.5-3.3l6.8-2c2.5-.6 4-1.2 6.7-1.7a44.3 44.3 0 0 1 6.4-2.1"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="M510.2 496.2h-.4c1.3 0 .5-.1-1.3 2-.6 1.7-5.9 5.4-9.9 5.4-2 .2-4.9.4-6.8.4-.6 0-1.3-.4-1.9-.4m19.9 77.8h2c2.2 0 4.3.3 6.2.4 2.1 0 4.2.6 6.3.6 2 .3 4.6.2 6.7.5 2.4 0 4.4.5 6.9.5 2 0 3.1.4 5.4.4l-5.4-.4c2 0 3.1.4 5.4.4m-47.6 48c.2-.3 2-2 3.3-2.9 1.5-.5 6.7-2.9 8.7-3.3l6.2-2c2.3-.6 3.8-1.2 6.2-1.7 1.9-.9 3.8-1.5 5.8-2m8.6-60c-1.2 3.4.3 4.3 1 5.7 1 1.4 3.8 3.6 8.2 5l5 1.6c1.3.2 1.9.5 2.9.9M370.8 435.3h.4c-1.3 0-.5.1 1.7-1.6 1.3-1.5 2.4-2.2 3.7-3.7m21 34.8c.2 0 24-12 26.6-14.6 1.8-1.3 3.1-2.6 5.3-4.1 1.4-.7 2.4-1.7 3.7-2.5 1.1-1.6 2.5-2.5 3.3-4 1.5-1.2.9-2.6 2-4.1.6-1.6 1.7-4.2 2-5.7m30.3 17.8c.1.9-.4 3.5-.3 5.5-.1 2.3-3.1 9.5-6.7 11.7"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="m428 447.4 9.9 3a145 145 0 0 1 24 13.5c1.5 1.2 4.2 2.3 5.3 3.7 1.6 1.4 2.8 3 4 4.6a30 30 0 0 1 3.8 5c4.6 3.7 17 29.5 17.4 31a62.8 62.8 0 0 1 2 4.5c1 1 1.6 2.5 2.5 4.1.9 2 1.9 3 3 4.6 1.3 1 3.1 2.7 4.9 3.7 1.8 1.6 3.6 2.2 5 3.3 1.9.8 23.7 14.6 24.7 15.3 2 1.6 8 8 3.8 12.5-1.8 1.5-3.4 3.6-5 4.5a16 16 0 0 1-5.6 3c-9.8 3-14.8 2-16.7 2h-2m-129-167c2.7 1 1.6.2 4.1 1.4 1.7.7 2.8.7 4.5 1.3 1.7.6 6.6 1.5 9 3.9 1.7 1.5 3 2.8 5 4a34 34 0 0 0 6.6 3.4c2.4.9 5 1.9 7.4 2H428h-6 5.8"
        />
        <path
          fill="#ffe606"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.2"
          d="M379.3 426.2c6.2-.4 16.5 1.5 16.7 1.5l13.7-.2c7.1-.7 8.7-3.5 9.9-5.4 2.7-4.1 4.5-5.6 6.6-8.7 3.3-2.5 7.9 3.3 8 3.3 11.7 11 2.4 24.4 1.7 24.9-5.8 5.2-7 5.6-10.5 2.2-3.5-4.1-4.6-6-7.5-7.4-5.5-2.7-17.1-.6-17.3-.6l-6 2.2c-2.9 1-4.7 3.5-9.5 4.4-5 .3-6.7-.2-9.1-4.2-3.4-5.1-1.7-11.3 3.3-12z"
        />
        <path
          fill="#ffef00"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.2"
          d="M703.1 175.4c-.9.1-9 4-9 4.3s-7 19.8-7.1 19.5-5.2-17-5.7-16.6c-.5.3-17.8 2.3-18 2.4-.3.2 13-16.7 13-16.7l-1.8-18.1 14.2 5.4L704 144c.2-.1-4 15.7-4 15.7l7.6 10.5s-4.3 4.4-4.5 5.2z"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.8"
          d="M533.3 374.8c10.4 6.9 73.8 20.2 83.3 21.6 12-1.2 29 .3 41.6 4.5 12.1 5.3 24.5 5 32.8-1.2 11.2-6.2 15.3-16.8 20.4-26.2 1.9-5 2-10.3-.1-14.7-3.8-9.3-1.5-11.6-2.3-16.8 13.7-30.2 16.5-65.4 19.8-91.5a99.3 99.3 0 0 1 3-31.5 46.6 46.6 0 0 1 23.1-17.8l59.2-15.3c15.3-5.6 5.3-16 2.1-15-10.2-1.6-9.8-12.6-57.7-1l-30.8-4s-6-4.8-6.6-4.5c-16.6-3-19 7.8-18 14.3l2.2 14.2s-6 21.3-5.6 22c-15.2 17-37.9 72-39.4 82.5-.6 9.9-4.4 8.1-3.4 17.7 0 7.6-.8 2.9 1.7 18.4.6 4.6-5.1 4.3-8.4 3-27.9-17.6-54.4-29-83.5-44.4l-4.6-2.4-44.7 36.6 8.4 48.4c2.6 1.3 5 2 7.5 3.1z"
        />
        <path
          fill="#ffec00"
          fill-rule="evenodd"
          d="M775.6 194.2c-.6.1-19.3-22.4-19.3-22.4l11-2.2 21.6 20.8z"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="M717.9 312.8a55 55 0 0 1-41.3-12.8"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.5"
          d="M776.3 195c-1.3-1.4-7.5-7.4-9-9.4a95.8 95.8 0 0 0-5.5-5.5l-5.2-5.8a53.9 53.9 0 0 1-5.2-5.2m43 21.7a21 21 0 0 1-4.3-1.8c-1.2-1.2-6.1-5-7.5-6.6a79.4 79.4 0 0 0-5.1-5l-4.8-5a44 44 0 0 1-4.9-4.5"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="m682 240.5.2.4c-.6-1.1-.3-.4 2.4 0 1.8-.2 7.6 2.6 9.6 6a76 76 0 0 1 3.7 5.8c.3.5.3 1.4.6 1.8m58-55.4-.2-.3-.8-1.5c-1-1.8-1.8-4-2.7-5.6-1-1.8-1.5-3.9-2.5-5.7-.8-2-2.1-4-2.9-6.1-1.1-2.2-1.6-4.1-2.9-6.3-1-1.8-1.2-3-2.3-4.9l2.3 4.9c-1-1.8-1.2-3-2.3-4.9m65.2 18c-.4 0-2.8-.8-4.1-1.5-1.2-1-5.9-4.4-7.2-6a68.3 68.3 0 0 0-4.8-4.3c-1.7-1.8-2.9-2.8-4.5-4.6a38.3 38.3 0 0 1-4.7-4M725.7 188c3.6-.6 3.6-2.4 4.5-3.6.7-1.7 1.2-5.2.3-9.7a48 48 0 0 1-1-5.1c-.5-1.2-.6-2-.7-3m-31.5 225.1-.2-.3c.7 1 .4.4-2.2-.7-2-.4-3.1-1-5-1.4m20-35.3c-.1-.3-22.2-15.1-25.7-16.1-2-1-4-1.4-6.3-2.6-1.3-.9-2.6-1.3-4-2-1.9-.2-3.4-1-5-1-1.9-.6-2.8.6-4.7.3l-5.8 1m.6-35c.7-.6 3.3-1.4 5-2.5 2-1 9.8-2 13.4.2"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="m679.7 336-2.1-10a145 145 0 0 1 0-27.5c.3-2-.1-4.8.6-6.5.5-2.1 1.3-4 2-5.8.8-2.2 1.6-4.1 2.5-5.7 1-5.8 17.4-29.3 18.5-30.3a62.7 62.7 0 0 1 3-4c.4-1.4 1.4-2.7 2.4-4.3 1.3-1.7 1.7-3 2.5-4.7.2-1.7.8-4.2.8-6.2.5-2.4.2-4.2.5-6-.3-2 1-27.8 1.2-29 .4-2.5 2.9-10.9 9-9.4 2.2.8 4.8 1.2 6.3 2.1 2.2.6 3.9 2.2 5.5 3.4 7.3 7.1 8.9 12 9.8 13.7l1 1.8M660.8 401l-.2-.4c.5 1 .2.5-.5-1.6l-1-6c-.4-1.9-1.3-4-1-5.2-.7-1.8-.3-3.4 0-5.2.4-2.3.7-3.9.7-6.1.3-2.7 0-4.7.2-7.3-.7-2-.8-3.9-2-6-1-2-1.7-3.9-2.8-6l-2.9-5 2.9 5-2.9-5"
        />
        <path
          fill="#ffe606"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.2"
          d="M685.3 388.9c-3.4-5.2-6.9-15.1-7-15.3l-6.9-11.8c-4-6-7.3-6-9.5-6-5-.4-7.1-1.3-10.8-1.6-3.8-1.6-1-8.4-1.1-8.6 3.9-15.5 20.1-14 20.8-13.6 7.5 2.4 8.4 3.4 7.2 8-2 5.2-3 7-2.9 10.2.4 6.2 7.9 15.3 8 15.5l5 4c2.2 2 5.2 2.4 8.4 6.2 2.7 4.2 3.1 5.9.8 10-2.9 5.4-9 7-12 3z"
        />
        <path
          fill="#ffef00"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.2"
          d="M301.2 245.2c.7.6 8.4 5.3 8.6 5s20.3-4.9 20.2-4.6-11.3 13.6-10.8 13.8c.5.3 11.7 13.7 12 13.8l-21.2-1.8-14.2 11.5-3.2-14.9-18-6.4c-.3-.1 15.2-5.3 15.2-5.3l4.6-12s6 1.1 6.8.9z"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.8"
          d="M561 278c.1-12.5-23.5-72.9-27.5-81.6a112.3 112.3 0 0 1-19-37.2c-2.2-13-9.2-23.3-19-26.7-11.3-6-22.4-3.7-33-2.8-5.3 1.1-9.8 4-12.3 8.1-5.7 8.2-8.9 7.6-12.8 11.2-32.8 5-63.8 22-87.4 33.5a98.7 98.7 0 0 1-28 14.7c-13.3.1-23-6.2-27.6-9.6l-45.2-41c-13-9.8-16.3 4.2-13.8 6.4 4.4 9.4-5 15 30.8 48.8l13.6 28s-.8 7.6-.1 8c6.5 15.5 17 11.6 21.8 7.2l10.7-9.7s21-6.6 21.4-7.3c22.6 3.4 81-7.7 90.6-12.3 8.7-4.8 9.2-.7 16.7-6.8 6.3-4.2 2.9-.9 14.5-11.5 3.5-3 6.4 2 7 5.4.7 33 5.6 61.3 8.6 94.2l.6 5 55.1 17.5 35.9-33.6c-.4-2.9-1-5.3-1.5-8z"
        />
        <path
          fill="#ffec00"
          fill-rule="evenodd"
          d="M277.2 174.2c.5.4-8.1 28.4-8.1 28.4l-7.9-8 5.6-29.5z"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="M408 157.5a55 55 0 0 1 12 41.5"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.5"
          d="M277.5 173.2c-.4 1.9-2 10.3-2.9 12.6a95.6 95.6 0 0 0-1.6 7.7l-2 7.5c-.3 2.4-.8 4.8-1.5 7.2m-5.4-47.9c.2.4.8 3 .9 4.6-.3 1.7-.8 7.8-1.5 10a78.7 78.7 0 0 0-1.2 6.9l-1.7 6.8a44.1 44.1 0 0 1-1 6.5"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="m367.3 227 .1-.3c-.5 1.2 0 .5-1.2-2-1.2-1.4-2-7.8-.2-11.3a71 71 0 0 1 2.8-6.3c.2-.5 1-1 1.2-1.4m-78.2-18.2-.1.3-.8 1.5c-1 2-2.3 3.6-3.2 5.3-1 1.9-2.5 3.4-3.4 5.3-1.2 1.7-2.3 4-3.6 5.7-1.2 2.1-2.5 3.7-3.6 5.9-1 1.8-1.9 2.6-2.9 4.6l2.9-4.6c-1 1.8-1.9 2.6-2.9 4.6m-20.7-64.4c.2.4 1 2.8 1 4.3-.2 1.6-.4 7.3-1 9.2-.4 2.2-.8 4.3-1 6.5L251 178a38.4 38.4 0 0 1-.8 6m49.2 35.3c-2.5-2.6-4-1.7-5.5-1.8-1.8.3-5 1.8-8.3 5a46.4 46.4 0 0 1-3.7 3.7c-.7 1-1.3 1.5-2 2.2m205.5-97-.2.4c.6-1.2.1-.5.7 2.2.7 1.9.8 3.2 1.6 5m-40.6 2.6c-.1.2-.5 26.9.6 30.3.4 2.2 1 4 1.3 6.7 0 1.5.3 2.9.4 4.4 1 1.7 1.1 3.4 2 4.8.5 1.9 2 2 2.8 3.7 1.2 1.2 3 3.4 4.1 4.3m-29.7 18.7c-.8-.3-3-2-4.7-2.8-2-1.2-7-7.1-7.3-11.3"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="m448.4 176.7-7.2 7.3a145.5 145.5 0 0 1-23 15c-1.8.8-4 2.8-5.8 3-2 .9-4 1.2-6 1.6-2.2.5-4.2 1-6 1-5.5 2.4-34 1.5-35.6 1.2a63.6 63.6 0 0 1-5-.3c-1.3.3-3 .2-4.8.3-2.2-.2-3.5.2-5.4.5-1.4.7-3.9 1.6-5.5 2.7-2.3.9-3.7 2.1-5.3 2.8a660.6 660.6 0 0 1-25 15c-2.3 1-10.7 3.5-12.8-2.4-.5-2.3-1.6-4.7-1.7-6.5-.6-2.1-.3-4.4-.1-6.4 2-10 5.1-14 6-15.7l1-1.8m207-37-.2.3c.5-1 .3-.4-1.1 1.3-1.5 1.2-3.2 3-4.5 4.2-1.3 1.3-2.6 3.1-3.8 3.6-1.2 1.6-2.7 2-4.3 3a29 29 0 0 0-5.6 2.6c-2.4 1.3-4 2.5-6.2 3.8-1.3 1.8-2.7 2.9-4 5-1 1.9-2.2 3.5-3.3 5.6l-2.7 5.2 2.7-5.2-2.7 5.2m17 106.2.5-.7c-.7 1.4-.5 1 .2-1.3 0-2.7.6-6 .7-8.5.4-2.5.8-5.3.8-8-.1-3-.1-5.7-.6-8.6 0-2.7-.3-5.5-.4-8.2a35.5 35.5 0 0 0-.8-7.4 43 43 0 0 0-.7-6.8c.3-1.9-.2-3.6-.6-5l-1.8-7.5-1.5-6c-.3-2.2-1.5-5-2-7a19.7 19.7 0 0 1-1.6-5c-.7-1.6-1.6-3.4-2-5.2l-2.2-5.4-2-5.2c-.7-2-1.7-3.7-2.1-5.8-.7-.7-.9-1.4-1.3-2"
        />
        <path
          fill="#ffe606"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.2"
          d="M489.6 143.1c-2.5 5.7-8.9 14-9 14.2l-6 12.2c-2.8 6.7-1 9.4.1 11.3 2.4 4.3 2.9 6.6 4.7 9.9.7 4-6.6 5.5-6.7 5.6-15 5.2-22.7-9.2-22.8-10-2-7.5-1.7-8.8 2.9-10.3 5.3-1.3 7.4-1.3 10-3.2 5-3.7 8.5-15 8.6-15.2l.7-6.3c.4-3-1-5.8.5-10.5 2-4.5 3.2-5.8 8-6.2 6-.5 10.8 3.8 9 8.5z"
        />
        <path
          fill="#ffef00"
          fill-rule="evenodd"
          stroke="#000"
          stroke-width="3.2"
          d="M469.8 290.1c-2.2-2 42.8 16.4 49 16.6 8.5-3.1 43.5-32.7 43.5-32.7.3 3 1.6 10.4 5 12-13.6 11-25.8 21.5-39.3 32.5 1 17.4-2.2 35.8 6.6 55.2 0 0-10.6.2-10.6 0-9.3-9.3-12.6-54.2-12.6-54.2L467 300c2.2-1.4 3.9-5.7 3-9.8z"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-width="3.2"
          d="M512.7 336.1c.8-.5-8 4.2-10.4 5.3-41 21.9-62 53.7-63.3 54.9-.7 1.3-2 3.1-3.2 4.9-1 1.5-2.4 3-3.3 4.5a87.9 87.9 0 0 1-5.3 6.7c-.2 1 .7-.3.4.3m113.1-102.5c-.8-.4 7.4 5.3 9.5 6.8 38.2 26.4 76 30.7 77.7 31.3 1.6 0 3.8.3 5.9.6 1.7.1 3.7.7 5.5.8 2 .3 6.4 1 8.4 1.7 1-.3-.6-.5 0-.5"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgImFlagIcon {
  readonly class = input<string>('');
}
