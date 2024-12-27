import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-fk-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-fk"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
    >
      <defs>
        <linearGradient
          id="fk-c"
          xlink:href="#fk-a"
          x1="444.4"
          x2="470.9"
          y1="592.2"
          y2="577.1"
          gradientTransform="matrix(-1.08448 0 0 1.26674 909.5 -414.7)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="fk-g"
          xlink:href="#fk-a"
          x1="851.8"
          x2="646.2"
          y1="369.9"
          y2="369.9"
          gradientTransform="matrix(.85733 0 0 .9624 -161.5 .3)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="fk-d"
          xlink:href="#fk-a"
          x1="458.2"
          x2="520.5"
          y1="562.5"
          y2="552.8"
          gradientTransform="matrix(-1.01941 0 0 1.3554 909.5 -414.7)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="fk-e"
          xlink:href="#fk-a"
          x1="472.4"
          x2="445.3"
          y1="578.7"
          y2="580.2"
          gradientTransform="matrix(1.08448 0 0 1.26674 49.7 -414.7)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="fk-f"
          xlink:href="#fk-a"
          x1="518"
          x2="456.4"
          y1="553.7"
          y2="558.1"
          gradientTransform="matrix(1.01941 0 0 1.3554 49.7 -414.7)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient id="fk-a">
          <stop offset="0" stop-color="#a43907" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <linearGradient
          id="fk-h"
          xlink:href="#fk-a"
          x1="388.5"
          x2="677.4"
          y1="507.2"
          y2="508.8"
          gradientTransform="matrix(.88927 0 0 1.54542 50.4 -413.6)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="fk-i"
          xlink:href="#fk-a"
          x1="579.8"
          x2="556.8"
          y1="504.9"
          y2="505.9"
          gradientTransform="matrix(.91096 0 0 1.52008 49.7 -414.7)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="fk-j"
          xlink:href="#fk-a"
          x1="581.4"
          x2="558.9"
          y1="512"
          y2="514.3"
          gradientTransform="matrix(-.88927 0 0 1.54542 908.8 -413.6)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="fk-k"
          xlink:href="#fk-a"
          x1="552"
          x2="589.8"
          y1="517.9"
          y2="503.9"
          gradientTransform="matrix(-.91096 0 0 1.52008 909.5 -414.7)"
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          id="fk-b"
          xlink:href="#fk-a"
          x1="444.4"
          x2="470.9"
          y1="592.2"
          y2="577.1"
          gradientTransform="matrix(.85733 0 0 .9624 -162.4 -.6)"
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#012169" fill-rule="evenodd" d="M0 0h400v200H0z" />
      <path
        fill="url(#fk-b)"
        fill-rule="evenodd"
        stroke="#fff"
        stroke-width="10"
        d="M412.9 308.9a11.3 12.7 0 0 0-1.7 0c-3 .6-7.6 11.3-10 17.6-4.1 5.4-6.2 9.6-7.8 12.7-.7 1.2-1.7 2.6-1.4 4.2-6 1.6-6.3 7.4-6.3 9.6 0 2.5.7 3.7.7 3.7l3.6 7.5v.1c3.8 9 9.4 20.9 12.7 21.8 4.4 1.5 16-3.3 24.8-11.7a140.6 157.8 0 0 0 53.2 12.1c20.4 0 38.7-5.5 53-12.1 8.8 8.4 20.4 13.2 25 11.7 3-1 8.7-13 12.6-21.8l3.5-7.6s.7-1.2.7-3.6c0-2.2-.3-8-6.3-9.6.3-1.6-.6-3-1.3-4.3-1.7-3.2-3.8-7.4-7.7-13-2.6-6.2-7.2-16.7-10-17.2-4.2-.8-13 1.5-13 2.4v.4l-17.7 18.6c0 .5.9 14 4.3 26a126 141.5 0 0 1-43.3 8.2c-17 0-31.5-3.4-43.2-8.3a116.6 130.9 0 0 0 4.3-26L424 311.8v-.4c0-.7-6.8-2.5-11.1-2.5zm4.4 23c2.3 0 4.6 2.2 6.5 4.4l-.1 1.3a67.5 75.7 0 0 1-2.8 10.2 73.6 82.6 0 0 1-12.2-9.9c1.9-2.3 5-5.4 8.2-5.8h.4zm126.6 0h.4c3.3.6 6.3 3.7 8.3 6a73.4 82.4 0 0 1-12.3 10 67.1 75.4 0 0 1-2.8-10.3 14.6 16.4 0 0 1-.2-1.3c2-2.3 4.3-4.3 6.6-4.3zm-142.4 26.4c2.4 2 5.4 4.4 9.1 6.8a10.5 11.8 0 0 1-3.2 1.6c-1.6.4-3.1.3-4.7 0a15 16.8 0 0 1-1-5.6 60.3 67.7 0 0 1-.2-2.8zm158.2 0-.1 2.8a15 17 0 0 1-1 5.5 10.3 11.5 0 0 1-8-1.5c3.7-2.4 6.8-4.8 9.1-6.8z"
      />
      <path
        fill="url(#fk-c)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.2"
        d="M426.2 339.6s-6.1-11.1-11.1-10.2c-5.1.7-10 7.8-10.2 8.2a44.5 52 0 0 1-7.5-9.5c.3-.4 7.8-20.9 12-21.8 4-.9 12.7 1.5 12.7 2.3z"
      />
      <path
        fill="url(#fk-d)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.2"
        d="M439.8 327.7c0 .8-2.2 30.2-10.9 40.4-8.6 10.3-23 16.6-28.2 15.1-5-1.6-16.5-31.3-16.5-31.3s12.2 14.2 21.3 11.8c9.1-2.3 14.6-20.1 16.3-28.9 1.7-8.6.3-25.7.3-25.7l17.8 18.6z"
      />
      <path
        fill="url(#fk-e)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.2"
        d="M532.9 339.6s6.2-11.1 11.2-10.2c5 .7 9.8 7.8 10.2 8.2a44.5 52 0 0 0 7.5-9.5c-.4-.4-7.9-20.9-12-21.8-4.1-.9-12.8 1.5-12.8 2.3z"
      />
      <path
        fill="url(#fk-f)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.2"
        d="M519.3 327.7c0 .8 2.2 30.2 10.9 40.4 8.7 10.3 23 16.6 28.2 15.1 5-1.6 16.6-31.3 16.6-31.3s-12.3 14.2-21.4 11.8c-9-2.3-14.5-20.1-16.2-28.9-1.8-8.6-.4-25.7-.4-25.7z"
      />
      <path
        fill="url(#fk-g)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.5"
        d="M401.2 326.2c-4 5.5-6.1 9.8-7.9 13-1.7 3.2-.6 7.7 3.2 14 4.3 6.7 39 33.4 84.1 33.4 45.2 0 79.8-26.6 84-33.4 4-6.4 5-10.8 3.3-14-1.7-3.2-3.9-7.5-7.9-13 0 8.3-28.7 38.5-79.4 38.5s-79.4-30.2-79.4-38.5z"
      />
      <path
        fill="url(#fk-h)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.2"
        d="m557.7 378.8 7.8-15.1-3.9-3.2c-1 3.8-5.5 5.1-6.3 10-.7 4.7 3 9.4 2.4 8.3z"
      />
      <path
        fill="url(#fk-i)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.2"
        d="M564.8 374.5s1.4-6.8-3-7.6c-4.4-.8-6.8 3.8-6.1 2 .6-2 3.2-4 3.7-10.7.3-6.7-.4-10.3-.4-10.3s1.8-8.7 8.8-7.5c7.2 1.3 7.5 7.6 7.5 9.9a9 9 0 0 1-.6 3.5z"
      />
      <path
        d="m539.2 351.7 1.5 2.8 1-.6-.7-2 .1-.3 1.7-1.2 4.4 8.7v.5l-1 .7.5.8 4.2-3-.4-.8-1 .6h-.3l-4.4-8.8 1.6-1.2h.4l1 1.6 1-.7-1.5-2.8-8 5.7zm-10.5 6.7.4.8.9-.4.3.1 3.9 8.9-.1.4-.8.6.3.8 4.1-2.5-.3-.8-.9.4h-.4l-1.8-4.3 4.3-2.4 1.8 4v.5l-1 .6.4.9 4.2-2.5-.4-.8-.9.4-.3-.2-3.8-8.8v-.4l.8-.6-.3-.8-4.1 2.5.3.8 1-.5.3.2 1.5 3.6-4.2 2.5-1.6-3.7.2-.4.8-.5-.4-.9zm-2.4 7.6.2.8 1.2-.3.4.1.9 3.7-.8.4c-2.5.8-4.4-.5-5.3-3.7-.8-3.2.2-5.6 2.5-6.4a3.5 4 0 0 1 1.4-.1l.3.2.8 1.7 1.2-.4-.7-3c-1.3 0-2.5.2-3.5.6-3.6 1.3-5.2 4.5-4.3 8.2 1 3.7 3.9 5.4 7.2 4.3a11.3 12.7 0 0 0 3.4-2L530 366l.2-.4.9-.4-.3-.9zm-9.7 10.3 4.7-1.7-.3-.9-1 .2-.3-.1-2.6-9.6.1-.3 1-.5-.2-.8-4.7 1.6.3.9 1-.3.4.2 2.5 9.5-.2.4-1 .4.3.9zm-25.5 4.6 8.3-.8-.3-3.4-1 .1-.2 2-.2.3-3.5.4-.4-4.9 2-.2.3.3.2 1.3h1l-.4-4.4h-1v1.4l-.2.4-2 .1-.4-4.4 3.1-.3.2.2.4 1.7 1.1-.1-.2-3-7.8.8v.9h1l.3.3.7 9.9-.1.3-1 .2v1zm-12.4-12.3v1h1l.2.3.1 9.9-.2.3-.9.2v.8h4.4v-.9h-1l-.2-.4V375h4.4v4.6l-.2.3-.9.1v1h4.4v-1h-1l-.1-.4-.2-10 .2-.3h1v-1h-4.5v1l1 .1.2.3v4l-4.3.1-.2-4 .3-.3h.9v-1zm-9.4-.3v3.3h1l.3-2 .2-.3h1.9v10.2l-.3.4h-1v1h4.6v-.9l-1-.1-.3-.4.1-10h1.8l.3.2.3 2h1v-3.3zM455 378.9l8 .4.2-3.3h-1l-.3 1.9-.2.2-3.5-.1.2-5 1.9.2.2.3.2 1.4h.8l.2-4.3h-.9l-.2 1.2-.2.3h-2l.2-4.6 3 .2.2.2.1 1.7h1.1v-2.9l-7.5-.4v.9l1 .2.1.3-.4 9.9-.2.3h-1v.9zm-18.6-5.4 4.4 1.6.2-.8-1-.5v-.4l2.5-9.5.3-.2 1 .3.2-.8-4.3-1.7-.2.9.9.4.2.4-2.7 9.4-.2.3-1-.3zm-7.6-3.3a8.4 9.4 0 0 0 2.6 1.6c2.4.8 4.3-.2 4.8-2.2a3 3.5 0 0 0-.5-3.2l-1.8-2c-.6-.9-.8-1.6-.6-2.5.3-.9 1.1-1.4 2.2-1 .4.2.8.4 1 .7v.3l-.2 2 1 .3.8-2.8a8 9 0 0 0-2.5-1.7c-2-.8-3.8.3-4.4 2.2a3.2 3.5 0 0 0 .4 2.8c.4 1 1 1.5 1.5 2 .9 1 1.2 2 1 2.9-.3 1-1.2 1.5-2.4 1a4 4.5 0 0 1-1.2-.8l-.1-.3.4-2.2-1.1-.4zm-9.8-4.6 7.4 4 1.2-3-1-.5-.9 1.7-.3.1-3.1-1.8 1.8-4.3 1.8 1v.3l-.3 1.3.8.5 1.6-4-.8-.4-.7 1.1-.3.2-1.7-1 1.6-4 2.7 1.5.1.3-.4 1.6 1 .5 1-2.6-6.8-3.9-.4.8.8.6.1.4-3.6 9h-.3l-.9-.3zm-1.1-15-3.7-2.9-.5.8.7.7.1.4-4.6 8.2-.4.1-.7-.5-.5.8 3.6 2.8c1.4 1 2.5 1.5 3.6 1.4 1.6-.2 3-1.2 4-3 1.8-3.4 1.3-6.6-1.6-8.8m-1.6 0 .8.6c2 1.5 2.2 3.7.5 6.6-1.7 3-3.5 3.6-5.4 2l-.8-.4 5-8.7zm29.3 13-.1.8.9.3.1.4-1.7 9.7-.3.2h-1v.8l4.1 1 .2-.8-1-.4-.1-.3.7-4.1h.3c1.5.4 1.8 1.3 1.8 3.2.1.9.1 1.7.8 2.7.3.4.7.8 1.4.9a10.1 11.4 0 0 0 1.5.2l.1-.8h-.1c-1-.3-1.5-.7-1.5-1.8-.2-1 0-2-.4-3a2.6 2.9 0 0 0-1.3-1.4c1.7 0 2.7-.9 3-2.5.4-2-.5-3.5-2.9-4zm3 1.7.6.2c1.4.4 2 1.4 1.7 2.9-.3 1.7-1.2 2.3-2.8 1.8l-.5-.1.9-4.8zm54.2 1 .1 1h1l.3.2 1.4 9.8-.2.3-1 .3.2.8 4.5-.8v-1l-1.1.2-.3-.3-.6-4h.3c1.6-.5 2.2.2 3 1.9.3.8.5 1.6 1.5 2.2.4.3 1 .4 1.8.3a12 13.6 0 0 0 1.6-.5l-.1-.9h-.2c-1.1.3-1.7 0-2.2-.9-.4-.8-.7-1.8-1.3-2.5-.4-.5-1-.8-1.8-.8 1.7-.8 2.5-2 2.3-3.7-.3-2-1.7-3-4.2-2.5zm3.5.5h.7c1.6-.4 2.5.2 2.8 1.8.2 1.6-.5 2.6-2.2 3h-.6l-.8-4.8z"
      />
      <path
        fill="url(#fk-j)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.2"
        d="m401.5 378.8-7.8-15.1 3.9-3.2c1 3.8 5.5 5.1 6.3 10 .7 4.7-3 9.4-2.4 8.3z"
      />
      <path
        fill="url(#fk-k)"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width="1.2"
        d="M394.3 374.5s-1.4-6.8 3-7.6c4.4-.8 6.8 3.8 6.2 2-.7-2-3.3-4-3.7-10.7-.4-6.7.3-10.3.3-10.3s-1.7-8.7-8.8-7.5c-7.1 1.3-7.5 7.6-7.5 9.9 0 2.2.7 3.5.7 3.5z"
      />
      <path
        fill="#0072c4"
        fill-rule="evenodd"
        stroke="#fff"
        stroke-width="3.9"
        d="M480.5 356.1s-82-27-81.4-129.4l.6-135.6H561l.6 134.8c.5 102.4-81.4 130.1-81.4 130.1z"
      />
      <g fill-rule="evenodd">
        <path
          fill="#bcbcbc"
          d="m410.3 123.6 2-2c1.3-.8 2.4-1.7 3.7-2.4 1-.6 3-1.1 3.7-1.6a9.2 10.3 0 0 0 3-2.8c.2-1.7.5-3 .5-5a12 12 0 0 1 3.6-2c1.7-.6 2-1.4 3.8-1.7 1-.4 2.8-.4 4.4-.4 1.6 0 2.7 1.4 4.2 1.6 1.8.8 2.6 1.4 4.1 2.8a7.5 7.5 0 0 0 2.6 3c1.1.6 2.2 1.6 3.4 2 1.5.9 2.7 1.4 3.8 2.8 1 .8 1.4 2 2.3 2.7a26.5 29.7 0 0 0 3.4 2.8c1.5 1.1 3 2 5.2 1.7 1.3 0 2.6-.3 4 0 1.8 0 3.4 0 4.8.5 1.8 0 3.2.2 4.8.4 1.5.2 3 .3 4.7.3 1.5.5 3 .4 4.8.4h9.5c1.7 0 3.4.1 4.7.4a37.4 42 0 0 0 4.7-.4c1.9 0 3.3-.3 5-.4h5.8c1.5.5 3.4.8 4.4 1.7 1.4.4 2 1.1 3.4 1.5a11 11 0 0 1 3.4 2.8 18.1 20.3 0 0 1 2.7 4.4c1 1.5 1.3 3.3 2 5.2.4 1.8.7 3.5.7 5.5.4 1.7.3 3.6.3 5.6-.3 1.8-.4 3.8-1 5.5 0 2-.4 3.7-.7 5.2-.2 1.6-.6 2.7-.7 4.7v5.6c0 1.8-.4 3.2-.6 5.1a52 58.4 0 0 0-2.4 6 10.8 12 0 0 0-2.7 3.2c-.7.5-1.1 1.3-1 1.6 1.4.5 1 1.6 1 3.5l.7 5.2c.1 2 .5 3 1 4.4.6.8.7.4-.7.4-1 .8-2 .4-2.3-1.2a8.8 9.9 0 0 1-1.4-4.4c-.2-1.8-.5-3.6-1-4.8-.2-2.2-.7-2.2-2.7-2.4-1-.9-2.2-1.1-4-1.1-2 0-2-.2-2 2v5.6c-.4 1.6-1 2.8-1.5 4.3-1 .8-1.4 2.2-2.7 3.2-.5 1.8-1.4 2-3 2.4l-2-2.8c1-1.8 1.7-2 2.3-4 .8-1.6 1.2-2.6 1.7-4-.7-1.2-1.3-1.8-2-3.5a19.3 21.6 0 0 1-1.7-4.4c-1.1-.4-2.9-.5-3.7-1.2-1.7-.4-2.1 1.7-4 1.7h-4.8c-2.1 0-2.6 1.2-4.4 1.1-.5.2-1.8 0-3.7 0-1.5.6-3.2.4-4.8.4-1.7 0-3-.5-4.4-.8-1.5-.5-3-1-4.7-1.2-2 0-2.7.2-4 1.2-1 .7-2.6 2.3-3.7 3.2-.5 1.3-.8 3.5-1.5 5.1-.3 1.7-.9 2.6-1.2 4a13.5 15.1 0 0 0-1 4.8c-.2 2.6-.7 2.3-2.1 1.6-.6-1.2-1.5-2.3-2-3.6.2-2 .7-3 .7-5.1-.4-1.7-1.1-1.5-2-.5 0 2.1 0 3.7-.8 4.8a4.4 5 0 0 1-2 3.1 4.7 4.7 0 0 1-2.7 2.8c-.2 0 0-.5 0-1.6-.8-1.7 0-3.3 0-5.5 0-2-.2-3.3.4-5.1 0-2-.8-3.8-1-5.2-.7-1.5-1.1-2.2-2.8-2.8-1.2-.6-3-1.2-3.7-2.5a7 7.9 0 0 0-3.1-2.7c-1.5-.6-2.3-1.2-3.4-2-1-1.3-1.9-1.8-2.3-3.5-.7-1.2-.8-3.5-1.3-5.2a15.9 17.8 0 0 0-1-4.7 17.8 20 0 0 0-1-4.8l-1.1-5.2c0-1.9 0-3.8-.4-5.5v-5.6c-.2-1.7-.3-4-.6-5.2 0-2.1-.3-3.3-.8-4.8-.7-1.4-.7-2-2-2.3-.8 1.2-2.2 1.8-4 2-1.2-.3-3-.6-4.4-1.2-1.4-.4-2.2-1-3.3-1.7a31.7 35.5 0 0 0-2.1-3c-.2-2.1-.6-3.2-.7-5.3 0-1.5 0-.6 1.4-2.7"
        />
        <path
          fill="#fefefe"
          d="m430.3 138 .3-.4c-.6.7-.4.3 1-.3.6-.4 2-1.4 2.5-2 .6-.3 1.7-.7 2.2-1.3.6-.8 1.3-1.5 2.2-2.2.9-1 1.7-1.3 2.8-2 1.3-.2 1.9-.8 3.1-.3 1.2.3 1.7.3 2.6-.9 1-.6 2.1-1.4 2.5-2.4v-1.8c0 1.8-.4 2.5-1.5 3-.7 1.1-1.8 2.2-2.2 3.2-.7 1.2-.9 1.9-1.6 2.5-.7.9-1.7 1.4-2 2.8.4.7 0 1 .8 1.1.7.7 1.4.4 2.4 0a10.4 11.7 0 0 0 1.9-3.3l1.7-2.9c.8-.6 1.3-1.1 1.6-2.2 1-.6 1.8-1.3 2.5-2 .7-.4 1-.9 2-1.1a4.4 5 0 0 1-.7 3.1c-.2 1.6-.1 2.3.3 3.3.7.6.6 1 1 2 .4-1 .6-2.7.7-3.9v-.2c0 1.1 0 2.8-.3 3.6 0 1.6.4 2.4.8 3.6.3.7.7 1 1.1 1.4 0-1.6.5-2.6.6-4.1l.4 3.9c0 1.3.5 2.3 1 3.3.5.4.7 1.5.9.6.6-2 .6-4 1-6.2 0-1 0-2.6.5-3.3l-.6 3.3c.1-1 .2-2.5.6-3.3v-.4a28.6 32 0 0 1 .5 4.6c0 1.2-.1 2.4.2 3.6.7-.4 1.2-1.4 1.7-2.5a13.3 15 0 0 1 1.9-3.1l-2 3a13.3 15 0 0 1 2-3v-.2a29.5 33.1 0 0 0-.2 3.8c0 1.3 0 2.8.2 3.7.3 1.5.6 1.7.7 3.3 0 .8-.1 1.7.2 2 1 .3 1-.3 1.2-2 0-1.7.4-3 .5-4.7 0-2.1.2.3.5 1a9.5 10.7 0 0 1 .7 3.8c0 .8 0 1.6.2 2 1-.5 1.3-1.7 2-2.3.4-1.4 1-2 1.4-2.8 1.2-.3 1.2-.9 1.2-2.5 0-1.4-.1-2.8.3-4a30 33.7 0 0 0 .9-3.7c.4-.2.9.5 1.2 1.2.5.9.4 2.2.4 3.6a14 14 0 0 0 1.3 3.4 11 12.3 0 0 0 1.6 2.8c.3.9.3 2.5.3 3.7 1-1.2 1-3 1.1-4.8-.1-1.2-.1-2.8-.4-4 0-1.2-.3-2.4-.5-3.3-.7-.4-1-.8-.2-2 .7-.7 1.6-.4 2.8-.2.7.7.9 1.1 1 2.8 0 1.5 0 2.6.5 3.6.4.8.9 1.4 1.2 2.8.3.4.6 1 1.1.3.3-.8.5-2.4.8-3.4.2-1 .6-1.6 1.1-2 0 1.6 0 2.5.6 3.7l1.1 3.1c.5.4.6 1.3 1.3 1.7l.2-4.5v-4c0-1.2.4-2 .7-3 .8 1.1.8 1.5.8 3 .7-.3.8-1 1.1-1.9.5-.6.8-.8 1 .6.1 1.5.4 2.8.7 4.2.5.6 1 2.2 1.6 2.8a12 13.5 0 0 0 1.5 2.3c.4.8.4 1.4 1.5 1.6 0-1.9 0-3.8-.3-5.6 0-1.6-.3-2.2-.5-3.7-.4-.9-.6-2.4-.5-2.8a8 9 0 0 1 2.2 3.4l1.5 3.7a14.7 16.5 0 0 1 1.8 2.8c.9.8 1.3 1.7 2.2 2.5.4.5 1.5.8 1.7.5 0-1.6-.3-3-.7-4.4a6.6 7.4 0 0 0-.8-3.4c-1-.9-1.7-1.5-2.2-2.8-.3-.4-.3-.6-.4-1.4a19.3 21.6 0 0 1 3.4 3.9 5.1 5.8 0 0 0 1.9 2c.4.6 1.8 1.4 2.8 1.6a4.1 4.6 0 0 0 2.4 1.7l-2.4-1.6a4.1 4.6 0 0 0 2.4 1.6v.4a9.5 10.7 0 0 0-1.4-4.6 6.4 7.2 0 0 0-2.2-3 6.8 7.6 0 0 0-2.4-2.5c-.6-.9-1.6-2.4-2.2-2.8 1.1-.9 2.3.4 3.4 1 1 1.2 1.8 2.7 2.4 3.4a13.2 14.8 0 0 0 2.2 3.7c1 .7 1.7 1.3 2.6 2.2 1.4.4.9-.1.5-1.4-.5-1.6 0-1.6 1-.6.6.6 1.4 1.4 2.4 2 .3.6 1 1 1.6.6.3-.4.3-.4.3-.8-.5-1.8-1-3.2-2.2-3.7-.5-.9-1.5-1.7-2.2-2.5-.5-.8-1-1.3-1.4-2.3l1.4 2.2c-.5-.8-1-1.2-1.4-2.2h-.2c1.4 0 2 .5 3 1.2a5 5.6 0 0 1 2.2 2c.5.6 1.2 1.3 1.7 2.1l2.4 2c.8 1.2 1 2 1 3.6.4.9.5 2.5.7 3.4-.2 1.6-.7.3-.8-.6-.1-1.2-.6-1.1-1.4-.8 0 1.7.2 2.2.7 3.4a5.9 6.6 0 0 1-.9 2.8c-.6.4-.7-.8-1.2-1.4 0-1.7-.5-2-1.5-2.8v1.1c.6 1.2 1.2 2.3 1.2 3.9a8.8 9.9 0 0 1 .6 3.7c0 1.4 0 2.7-.3 4 0 1.4-.3 2-.3 3.6v7.9a17 19.2 0 0 0-.2 3.6l.2-3.6c-.2 1-.2 2.2-.2 3.6v.2c-.4-1.4-1-2.6-1.2-4a7.5 8.5 0 0 1-1.6-3c-.3-1.2-.3-2.6-.5-3.6-.4-1-.8-2-1.5-1.4-.3 2 0 3.3.7 5.3.4 1.3.4 2.5.8 3.7.5 1.5 1 1.6 0 3.3-.6 1-.8 1.2-1 2.3-.9.5-1.1.8-1.2 2-.3-1.1-1-2.4-1.4-3.7-.5-1.4-1-2.8-1.2-4-.6-.9-1.3-2.4-2-3l-1.8-3.3c-1-1.3-1.2-2-2-2.6-.1-.5-.4-1.3-1-.8 0 1.3 0 2.7.3 3.9.3 1.6.7 2.5.8 4.2v3c-.6-1.6-1.3-2.9-1.7-4.4-.6-.9-1.1-2.5-1.7-3-.4-1.2-.7-2.1-1.2-2.9-.1-.8-.5-.8-.8-1.4 0 1.6.5 2.2.8 3.3.5 1.2.6 2.9.5 3.5-.6-2-1.2-4.1-2-6a26 26 0 0 1-1.8-3.7c-.8-.9-1.5-1-2.2-1.6a4.3 4.9 0 0 1-1.7-1.4c.2 1.5.7 2.5 1 3.6.2 1.4.7 2.6.9 3.7-.2 2-.6-.5-1-1.4-.2-1.6-.7-2.4-1.1-3.3-.7-.6-1.3-1.5-2-2-.7-.3-.4 0-.4 1 0 1.8 0 3 .5 4 .5.8.5 1.9.5 3.4-.1 1.4-.3 2.4-.3 4v2.1c-.5-1.1-1-1.9-1.5-3.3-.7-1.3-1-2.3-1.6-3.7-.5-.2-1.5-.4-2 0 .2 1.4.7 2 .8 3.7-1 1-.8 1.4-1.4-.3-.6-1.3-1.2-1.2-2-2-1.2-.1-.8-1-1.1-2.3 0-1 0-2-.3-3-1.3 0-2 0-2.9.8-.3.8-.2 2.5 0 3.7v3.9c-.3 1-.7 1-1 2.3-.4 1.1-.5 2.5-.9 3.3-.9.9-.5 1-1-.5v-9c0-1.5.3-2.3.3-3.7-.5-1.1-.6-1.4-2.2-1.4a6 6 0 0 0 0 2.8c0 1.4.1 2.7.3 3.7l.2 3.6c0 1.5-.3 2.7-1 3.3-.8.4 0 1-.9 1.3a11 12.3 0 0 1-2.6-2c-1-.3-1.8-.6-3.1-.6-1.6 0-1.6-.2-2.2-1.6a23 25.8 0 0 1-1-4.6c-.5-1.3-.6-2.2-1-3.7a4.5 5.1 0 0 0-1.4-2c-.3 1.6-.6 2.7-.6 4.3-.3.7-.4 2.4-.6 3-.4-.7-.6-2.4-1-3.5-.3-1.7-.7-2.8-2.3-2.2-1.6 0-1.6 0-1.6 2l1.9 3.2v4c0 1.6 0 2.1-1 2.4-.4-1.6-1.2-3.3-2.2-4.7 0-1.1-.4-.8-1.4-.8-.6 0-1.3-.1-1.7.3v2.4c-.5.2-.7 0-1.1-.5-.5.9-.2 2 0 3a10 10 0 0 1-1.2 3.2c-.2-.4-.4-.2 0-.2-1.7-.8-3-1.2-4.4-1.7-.7 0-1.4 1-1.8 1.7-1.3.4-1.8.8-3.2.8l-3 .2c-1 .3-2 .4-3.2.4-.6-.3-1.8-.3-2.1-.6.5-.8 1-1.2 1.4-2.5a14.7 16.5 0 0 0 2-2l1.8-2.3c.4-1.4 1-1.6 1.7-2.2 1.5 0 1.7.6 3.1.8 1.4.6 2.2.9 3-.3 1-.5 2-1.4 3.2-1.6l2.4-1.7c1-.7 1.5-1.5 2.4-2.3.3-1.1 1-2 .7-3.3-1.3-.4-2.1-.3-3 .5-.9 1-1 1.4-2.3 2.2-1 .4-1.4.9-2.6 1.2-1 .4-2.2.2-3.3.2s-2.5 0-3.1.4c1-.8 2.3-1.7 3.3-2 1-.7 1.4-1 2.7-1.2.6-.8 1.1-.8 1.4-2.2.4-1.6-1-1.1-2-.5-.9.2-2 1-2.8 1.3a10.5 11.8 0 0 1-3 .6c-.4-.5.1-.9.4-1.6 1-.5 1.3-.7 1.4-2-1.3.2-1.7.7-2.9.8a18 18 0 0 1-3.8.6h-3.3c-1.2 0-1.8-.3-3.2-.3-1-.6-1-.8-1-2.5.8-1 1.5-.8 3-.8l2.6-1.5c.9-.2 1.4-.6 1.2-1h-3.3c-1.4-.7 0-1 .7-1.5 1 0 2.3 0 3 .5 1.5 0 2-.5 3.1-1.6 1-.8 1.5-1.4 2.5-2 .7-.9 1.4-1.4 1.9-2.2 1-1 1.7-1.7 2.2-2.6.6-.4 1-.8.7-1.4-1.5.2-2.2.9-3.2 1.7a7.3 8.2 0 0 1-1.9 1.6 6 6.7 0 0 1-3.1 1.3c-1.2 0-2.2-.3-3.3-.4-1.3-.1-.2-.5.2-1.1.5-.3.9-1.2.5-2-1-.3-2.2-.2-3.3-.2h-3.4c-1.3 0-1.8-.4-2.7-.9-.2-.8 0-.5 1-.5a13.2 14.8 0 0 0 3.1-.6c1.1-.3 1.3-.8 1.5-2.2-1.2 0-2.4 0-3.1-.3zm-20.7-6.5c-.2-2-.7-3.1-.7-5.2 0-1.5 0-.6 1.4-2.7l2-2c1.3-.8 2.4-1.7 3.7-2.4 1-.6 3-1.1 3.7-1.6a9.2 10.3 0 0 0 3-2.8c.2-1.7.4-3 .4-5 1.4-1 2.5-1.6 3.7-2 1.7-.6 2-1.4 3.8-1.7 1-.4 2.8-.4 4.4-.4 1.6 0 2.7 1.4 4.2 1.6 1.8.8 2.6 1.4 4 2.8.8 1.2 1.4 2.2 2.7 3 1.1.6 2.2 1.6 3.4 2 0 1.4.3 1.2-.6 1.2-.1 1.5-.4 1.3-1.7 1.4a5.9 6.6 0 0 1-2.2-2.3c.6-1.4.3 1.2 0 1.7-.5.6-.9 1.2-1.6.6-.4-1.4-.7-2.3-.7-4-.2-1.7-.7-.5-1 .3-.3 1.5-.2 2 .3 3.1-1.3 0-2.2-.2-3.1-.3-.9-.3-2 0-3 .6-1.2.9-.7.9-.2 2 1.1.3 2 1 3 1.6l3.3-.8c1.1-.5 2.2-.2 3.3 0 .6.4 1.4.4 1.7.8 0 .9 0 1.8-.3 2.3-.4.4-1 1.4-1.7 1.6a11.8 13.2 0 0 1-3.2 1.5c-1.5 0-2.1.4-3.2 1-.1 1.6-.5 1.9-1.7 2.4a7.5 8.5 0 0 1-3.3.8c-.7 0-1.4 0-1.7-.3a9.4 10.5 0 0 0 2-3.3c.2-.7.6-1 .2-1.5-1.4 0-1.8 0-2 1.6-.1 1.6-.6 1.9-1.6 2.4.3-1.4.3-2.5.7-3.7a18.3 20.6 0 0 1-3 .3c-.8.5-1.1.7-.8 1.6-1 .4-2.2.2-3.4 0-1 0-.4-.5-1.2-1-.5-1.1-1-1.4-2.2-1.4-.5.8-1.4 1-2 1.6-1.1.4-1.8 0-2.7-.5-1.2 0-1 .4-.7 1.4.5.3 0 .7.7.8.7.7 1.3.9 2.6.9 1-.4 2.2-.3 3.4-.3 1.2 0 1 .3 1 1.6-.8.7-2 .6-3.2.6a12.2 13.7 0 0 1-2.9-.8c-1 0-2-.3-2.8 0-.4.5-1.5.7-.2.8.5.6 3.3.3 3.4 1.3.7.8.5 1.9-.6 1.9a1.6 1.8 0 0 0-1.7 0l-3.1.1c1.8.2-1.3-2.2-2-3.2"
        />
        <path
          fill="#bcbcbc"
          d="m417.1 122.2-1.4 1-2.9 2.3c-.5.5-.5.8-1.1.8 1-.1 1.6-.5 2.6-1 1.2-.2 2.4-.5 3-1.2.7-.2 0-1.3-.2-2zm11-13.2c.2 0 .5.8 1 1.4.4 1 .7 1.8.7 3 .3-1.3.8-2.4 1-3.9-.4-.8-.4-1-1.5-1.1 0 .8.2.2-1.2.6"
        />
        <path
          fill="#c4c4c2"
          stroke="#000"
          stroke-width=".9"
          d="M349.4 417.7c-.5 0 .8-.5 1.3-.6.4-.8.6-1.3 1.3-1.8 1.1 0 1.7.4 2.2 1.1 1 .3 1.3.7 2.4.9.5.4 1 .4 0 .7-.6.3-1.5.4-2.6.4a7.2 7.2 0 0 0-2.6.7c-1.5 0-1.3 0-2-1.4z"
          transform="matrix(1.08448 0 0 1.26674 42.6 -410.2)"
        />
        <path
          fill="#bcbcbc"
          d="M432.5 109.2v.3c0-.8 0-.4.2 1.2a6.6 7.4 0 0 1 .5 3.3 5 5.5 0 0 0 1.5-2.5c0-2.2-.4-2.1-2.2-2.3m8.8 32.3h.3c-.8 0-.3 0 .9-.8.8-.6 1.5-1.6 2.6-2a9.5 10.7 0 0 1 3.1-2c.6-.3 1.1-.8 1.7-.2-.1 1.3-.4 2-1.5 2.5-.5.8-1.3 1.3-2 1.6-.8.5-1.7.5-2 1.5-1.3.7-1.5.5-3-.6zm4.6 8.2c.3-.4 1.9-2.2 2.6-2.8a11 12.3 0 0 1 2.4-2.8c.7-1.2 1.6-2 2.2-3.1l1.9-2.8c0 1.2-.2 2.8.2 3.6a5.1 5.8 0 0 1-.8 3.4c-.5 1-1 1.6-2.2 2.3-1 .6-1.6.8-2.5 1.6a19 21.4 0 0 1-2.2 1.4c-.7.3-.4.3-1.6-.8m-7.5 6.4h.3c-.7 0-.4 0 1-.8 1-1.2 1.8-1.7 3-2.2a7.5 8.5 0 0 0 3-.9c.5-.1 1-.5 1.3 0 .8 1.2 1 1.5-.2 2.3a6.9 7.7 0 0 1-2.4 1.4c-.6.5-1.8.5-3 .8-.8 0-1.4.1-1.8-.6l2 .6c-1 0-1.5.1-3.2-.6m10.3 0v-.2c0 .8 0 .4.5-1.2 1-1.6 1.2-2.5 2.4-2.8.5-.8 1.5-1 2.6-1.4.5.8.1 1.8 0 2.8-.3 1-1.1 1.8-1.7 2.6-.7.5-1 1.1-2.2 1.4-.8 0-.3 0-1.6-1.2"
        />
        <path
          d="M425.3 119.7c0 .7-.5 1.4-1.2 1.4s-1.2-.7-1.2-1.4c0-.8.6-1.4 1.2-1.4.7 0 1.2.5 1.2 1.4"
        />
      </g>
      <g fill="#005120" fill-rule="evenodd" stroke="#002b0d" stroke-width="1pt">
        <path
          d="M351.8 479.6h.9c-2.8 0-1.1-.2 3.5 3.5 2-1.6 2-1.8 3.5 1 1 1.5 1.2-.2 2.7-1.8.7 3.2 1.1 6.5 3.5 3.5 2.8 0 5.6-.2 7.1.9 1.8 3.3 1.2-.6 2.6.9 4 .4 3.9-3.4 8.1-4.4 2.6 3.3 3.8.8 7-.8 2.5.6 4.8 4.3 5.3.7 2-3.2 2.1-3 3.5 0 2 1.8 2.8-.8 4.4-1.7 3 1.7 6.3 2 10.6.9.8 2.9 2.6 1.6 4.5.8 3.9 1.7 5.2 2.2 9.7 0 2.2-2.6 1 .1 2.6 1.8 3.3-1 2.4-1.2 6.2-.9 3.9 0 4.2 0 5.3-2.6 2 1.9 2.6 3.3 5.3.9 4.2 0 2.9.5 5.3-1 1.9 4 2.3 1.2 4.5 2.7a14.5 14.5 0 0 1-6.2 7c-1.7 3-2.8 6-6.2 7.2-2.5 2.5-5.2 4-8 6.2-3.8 1-8 .8-12.3.8H388c-2.6 1.4-7 2-10.6 2.7-4 0-8.7 0-11.5-.9-1.9-1.9-5.2-4-7-6.2-2-1.5-2-4.4-3.6-6.2-1.4-2.5-2-6.5-3.5-8.8z"
          transform="matrix(1.08448 0 0 1.26674 47.3 -411.4)"
        />
        <path
          d="M437.5 487.6v.8c0-2.4.1-1.1-1.8 3.6-.3 1.1-1.2 1.4-2.6 1.8m-3.5-2.7h.9c-3.3 3-5.5 4.5-6.2 8l6.2-8c-3.3 3-5.5 4.5-6.2 8m-7.1-12.4s-.1 3.1-.9 4.4m-2.6 1.8v.8zm-7.1-5.3h.9-1c.4 0 .7 0 0 0zm-49.5 0c.4 0 2.2 2.8 4.4 4.4-.5 2.6-1.4 5.6 0 8m2.7-7.1c.4 0 2.1 2.8 4.4 4.4l-4.4-4.4c.4 0 2.1 2.8 4.4 4.4v.9c0-2.8-.2-5.6.9-7.1 1 1.7 2.2 4.3 2.6 1.8 5-.2 7.4-1.6 10.6-2.7 0 1.3-.2.7 1 1.8m60-3.6h.9c-1.7 1.4-3 4.3-4.4 6.2m-32.7-8.8h7"
          transform="matrix(1.08448 0 0 1.26674 47.3 -411.4)"
        />
      </g>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M425.9 214.3c-11.5 0-15.4 13.5-26.9 13.5h-.6v.8c0 9.4.6 18.1 1.8 26.2 10.6-.8 14.5-13.4 25.7-13.4 11.5 0 15.3 13.4 26.8 13.4 11.6 0 15.4-13.4 26.9-13.4 11.5 0 15.4 13.4 26.9 13.4 11.5 0 15.3-13.4 26.8-13.4 11 0 15 12.5 25.6 13.4a139 156.1 0 0 0 1.9-27h-.7c-11.5 0-15.3-13.4-26.8-13.4s-15.4 13.5-26.8 13.5c-11.5 0-15.4-13.5-27-13.5-11.4 0-15.3 13.5-26.8 13.5-11.4 0-15.3-13.5-26.8-13.5zm0 52.7c-9 0-13.2 8.2-20.2 11.8a111 124.5 0 0 0 8.6 20.5c3.3-2.8 6.7-5.2 11.6-5.2 11.5 0 15.3 13.5 26.8 13.5 11.6 0 15.4-13.5 26.9-13.5 11.5 0 15.4 13.5 26.8 13.5s15.4-13.5 26.9-13.5a18.3 20.6 0 0 1 11.3 5 112 125.7 0 0 0 8.6-20.4c-6.7-3.7-11-11.7-20-11.7-11.4 0-15.3 13.5-26.8 13.5S491 267 479.6 267s-15.4 13.5-26.9 13.5c-11.4 0-15.3-13.5-26.8-13.5m53.7 52.7c-11.5 0-15.4 13.5-26.9 13.5-10.9 0-14.9-12-25-13.4a132 132 0 0 0 39.3 33c3.6-3.2 7.3 3.6 12.5 3.6 5.3 0 9-6.9 12.5-3.8a129.1 145 0 0 0 39-32.7c-9.8 1.7-14 13.3-24.6 13.3-11.5 0-15.3-13.5-26.8-13.5"
      />
      <g transform="matrix(.86465 0 0 .97062 -175.4 2.5)">
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M332.5 541.4a110 110 0 0 1 10.5-3l16.3 15.7-13.4 2.7z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".6"
          d="M413.6 471c.3-4.6 8.8-31 8.8-31m-5.9 31.3 6.7-31.1m-4.4 31.2 5.6-31.2m-10.5 27c1.5-.8 5.8-2 5.8-2m-3.7-2.6c1.4 0 4.3-1.2 4.3-1.2m-3.5-2.3a24 24 0 0 1 4.4-1.2m-3.8-3.2 4.7-.8m-2.6-3c0 .3 3.2.3 3.2.3m-2.4-3.7 3.2.5"
          transform="matrix(1.06 0 0 1.03 276.8 -178)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".4"
          d="M413.6 471c.3-4.6 8.8-31 8.8-31m-5.9 30.1 6.7-30m-3.7 27.7c.2-1.7 4.9-27.6 4.9-27.6m-10.5 27c1.5-.8 5.8-2 5.8-2m-3.7-2.6c1.4 0 4.3-1.2 4.3-1.2m-3.5-2.3a24 24 0 0 1 4.4-1.2m-3.8-3.2 4.7-.8m-2.6-3c0 .3 3.2.3 3.2.3m-2.4-3.7 3.2.5"
          transform="matrix(-1.25 0 0 1.76 1290.4 -502)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M413.6 471c.3-4.6 8.8-31 8.8-31m-5.9 30.1 6.7-30m-3.7 27.7c.2-1.7 4.9-27.6 4.9-27.6m-10.5 27c1.5-.8 5.8-2 5.8-2m-3.7-2.6c1.4 0 4.3-1.2 4.3-1.2m-3.5-2.3a24 24 0 0 1 4.4-1.2m-3.8-3.2 4.7-.8m-2.6-3c0 .3 3.2.3 3.2.3m-2.4-3.7 3.2.5"
          transform="matrix(-1.25 0 0 1.3 1321.3 -302)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="m395.3 572.2.9-73s2.6-.3 2.6 0-.3 72.7-.6 73c-.3.3-3.2.5-2.9 0zm28.5-69.8-.6 61.3-2 2.4.6-63.7z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M363 560.2s3 30 36.4 29.1c33.4-.9 42.7-30.2 42.7-30.2l-14.5-.6c-.3 0-11.6 14-26.2 13.7-14.6-.3-19.2-3.8-22.4-6.7-3.2-3-6-7.3-6-7.3l-17-6.7 1 6.4zm90.3-3-1-4v-3.4l1.6-3.6s-25.3 3.7-25.3 4l-.1 6.8 24.8.1z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="m448.5 549.8-.6 6h4.1l-.3-6zm-4.3.3-.3 6.4 2.6-.3.3-6.1zm-4.4 6.4v-5l2.6-.9.3 5zm-5-.3.6-4.4 3 .3.2 4.7zm-5.5 0 .3-3.8 3-.3v4.4zm-67.4 3.7c.9 0 7.6 1.5 7.6 1.5l7 9.3"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M366.8 561.1c.3.3 6.1 19.8 34 19.8s34.6-22.1 34.6-22.1"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M439.8 559.4s-13.4 29-39 27c-25.5-2-29.6-11.6-31.6-16.6-2-5-3.2-9-3.2-9"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M373.2 558.2c.3-1.7.3-54.4.3-54.4l-1.7-.2-.3 53.7 1.7 1zm-41.5-17.1 22 10.7-.5 1.5S332 543.3 332 543c0-.3.2-1.5-.3-2z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M341.8 537.9c0 .8 3.2 18.6 3.2 18.6s2 .3 2 0l-3.4-18.3zm20.4.5c1.1 0 21-3.2 21-3.2l-.4 3.2-19.5 2z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#fecf3e"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M365 514.3c.7 0 7 3.2 9.7 2.4 2.7-.8.9-3 1.4-3 .6 0 2.6 1.5 3.8.3 1.2-1.1 2-4.6 1.5-4.3-.6.3-16 5.8-16.3 4.6z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M362.5 521.6c1.1.3 23.8-6.1 23.8-6.1s0 2-.3 2l-23.5 6.1z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#fecf3e"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M415 512.6s1.5 3.5 3 2.9c1.5-.6 2.9-1.8 2.9-1.8s1.2 3 3.2 2.4c2-.6 3.2-3.8 3.2-3.8s2 .6 2.9.3c.9-.3 2-5 2-5zm-1.7 28.2c-.3.6 1.5 2 3 2s2-2 2.3-1.4c.3.5.3 3.2 4 2.3 3.7-.9 3.8-3.5 3.8-3.5s-1.1.9 1.5 1.2c2.6.3 5.2-3.8 5-3.8-.4 0-19 3.5-19.6 3.2z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M363.4 513.1a5 5 0 0 0 .2 2.7l19-6.4s.8-1.5 0-1.5-19.5 5.8-19.3 5.3zm25-4c.5 0 19.4-6.1 19.4-6.1s.3 2.6 0 2.6l-17.7 5.2-1.8-1.7z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#fecf3e"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M413.3 521.9s-2.9 3.2-2 7.5c.9 4.4 2 8.2 2.3 8.2.3 0 3.5-5.8 7-6.1 3.5-.3 9.9 3.2 9.9 3.2s-.9-7-.6-10.2c.3-3.2 5.2-8.7 5.2-8.7l-21.8 6z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M386.9 516.6s-.6 2.7-.3 2.7l24.7-6.4V511l-24.4 5.5z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#b6b6b4"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M355.5 551.8s-5.8-.8-5.5.6c.3 1.5 2.9 2.9 3.2 3.8.3.9-.9 4 .9 3.8 1.7-.3 3.4-1.5 3.4-2.4l-.3-5z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M387.8 537.3v2l20.9-2.9-.6-1.5z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#fecf3e"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M363 540.8c.4 0 0 2.6 2.4 2 2.3-.6 2.9-2 2.9-2s.6 3.2 3.8 2.9c3.2-.3 5-3.8 5-3.8s.2 2.6 2.2 1.7c2-.9 2.6-2.9 2.6-2.9l-18.3 2.6zm0-17.2s-2.6.9-1.7 6.1c.9 5.2 3 8.2 3.2 8.2.3 0 2.6-5 6.1-5.8 3.5-1 9.6 2.6 9.6 2.6s-.6-4.7.3-9a18 18 0 0 1 3.8-7.6s-20.4 5.5-21.2 5.5z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="m411.9 538.7.3 1.8s21-2.6 21-3c0-.2 0-2-.4-2-.3 0-20.6 3.5-21 3.2zm-.3-18.6.3 2 24.7-6.6s.6-1.8.3-1.8-24.7 7.3-25.3 6.4z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M414.2 510.8s-.3 1.8 0 1.8 18.3-4.4 18.3-4.7c0-.3 1.8-2 .3-1.7-1.4.3-18 5.5-18.6 4.6zm38.7 33.7-18-28.4m-2.4 19.7c.3-.8 1.2-18.3 1.2-18.3"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="#fecf3e"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M389 510c1 .2 3.1 3.2 4.3 2.6 1.2-.6 2.9-2.4 2.9-2.4s-.3 3.5 2 3c2.4-.6 2.7-3 2.7-3s1.7 1 3.2 0c1.4-.8 2.8-5.2 2.3-5.2s-16.9 5.2-17.5 5zm-.6 8.4c0 .6-3 5.2-2 9.6 1 4.4 2.5 8.4 2.8 8.4.3 0 4.7-4.6 8.5-5.5 3.7-.9 9.3 2.9 9 2.9-.3 0-1.5-4.4-1.5-7.6 0-3.2 4.4-13 4.4-13zm0 21c0 .2.8 2.2 2.9 2.2 2 0 2.3-2 2.3-2s-.3 3.5 2.9 3.2c3.2-.3 4.3-3.5 4.3-3.5s.3 1.8 3 .9c2.6-.9 6-3.8 5.8-3.8-.3 0-21 3.8-21.3 3z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <use
          xlink:href="#fk-l"
          width="992.1"
          height="496.1"
          transform="translate(-6.6 7.3)"
        />
        <use
          xlink:href="#fk-l"
          width="992.1"
          height="496.1"
          transform="translate(6.6 3.8)"
        />
        <use
          xlink:href="#fk-l"
          width="992.1"
          height="496.1"
          transform="translate(0 11)"
        />
        <path
          id="fk-l"
          fill="#be0f17"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".6"
          d="M409 477a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0z"
          transform="matrix(.04 -1.07 1.02 .04 251.6 668)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M398.2 500c0-.2 9 3.8 9 4.1 0 .3 32 42.8 32.3 42.8m-16-42.8 8.2 3.5 2.6 6.4m-61.4-10.4c-.3 0 9 7 9 7l1.2 5.7M341.3 546c4-1.7 32.2-26.4 32.2-26.4m-39.8 21.7 31.7-26.7m21.2 4 30 49.8m-3.6-29.2s3.5 11.7 7 13.5a86 86 0 0 1 7.6 4.6"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M412.6 539.5s2.5 13.8 6 16.4c3.5 2.6 7 5.5 7 5.5"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M391 439s3.4 19.2 10.4 23.6a950 950 0 0 1 12.8 8.1"
          transform="matrix(1.25 0 0 1.3 256.3 -299.5)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M390.7 438.7s7.5 15.2 14 19.8c6.3 4.7 15 9 15 9M366.3 440c2 3.5 1.7 10.2 4 12.5a66 66 0 0 1 5.8 7.6m-9.3-19.9c1.2 1.7 4.4 10.4 6.4 13 1.5 2.4 16.3 17.2 16.3 17.2"
          transform="matrix(1.25 0 0 1.3 256.3 -299.5)"
        />
        <path
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M384.6 471.1a2.2 2.2 0 1 1-4.4 0 2.2 2.2 0 0 1 4.4 0zm10.7 4.7a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0zM409 477a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0zm11.9-4.5c0 1-.7 1.7-1.6 1.7-.9 0-1.6-.8-1.6-1.7 0-.9.7-1.8 1.6-1.8.9 0 1.6.8 1.6 1.8zm9.6-5.7c0 .9-.9 1.6-1.9 1.6-1 0-1.9-.7-1.9-1.6 0-.9.9-1.6 1.9-1.6 1 0 1.9.7 1.9 1.6z"
          transform="matrix(1.25 0 0 1.3 256.3 -299.5)"
        />
        <path
          fill="red"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="M374.1 404.4c-.9.6-15.4 4.1-13.4 3.8 2-.3 13.7 3 13.4 2-.3-1 0-5.2 0-5.8zm24.7-4.3c-.6 0-9 3.2-8.7 3.2.3 0 9.6 2.6 9.3 2-.3-.6-.3-4.4-.6-5.2zm25.3 2.9c-.6.3-10.5 2.6-8.7 2.9 1.8.3 8.4 2.6 8.4 2 0-.5 0-4.6.3-5z"
          transform="matrix(1.25 0 0 1.3 256.3 -299.5)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M413.6 471c.3-4.6 8.8-31 8.8-31m-5.9 30.1 6.7-30m-3.7 27.7c.2-1.7 4.9-27.6 4.9-27.6m-10.5 27c1.5-.8 5.8-2 5.8-2m-3.7-2.6c1.4 0 4.3-1.2 4.3-1.2m-3.5-2.3a24 24 0 0 1 4.4-1.2m-3.8-3.2 4.7-.8m-2.6-3c0 .3 3.2.3 3.2.3m-2.4-3.7 3.2.5"
          transform="matrix(1.25 0 0 1.3 256.3 -299.5)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M413.6 471c.3-4.6 8.8-31 8.8-31m-5.9 31.3 6.7-31.1m-4.4 31.2 5.6-31.2m-10.5 27c1.5-.8 5.8-2 5.8-2m-3.7-2.6c1.4 0 4.3-1.2 4.3-1.2m-3.5-2.3a24 24 0 0 1 4.4-1.2m-3.8-3.2 4.7-.8m-2.6-3c0 .3 3.2.3 3.2.3m-2.4-3.7 3.2.5"
          transform="matrix(1.25 0 0 1.36 225.3 -323.4)"
        />
        <path
          fill="none"
          stroke="#512007"
          stroke-width=".5"
          d="M413.6 471c.3-4.6 8.8-31 8.8-31m-5.9 30.1 6.7-30m-3.7 27.7c.2-1.7 4.9-27.6 4.9-27.6m-10.5 27c1.5-.8 5.8-2 5.8-2m-3.7-2.6c1.4 0 4.3-1.2 4.3-1.2m-3.5-2.3a24 24 0 0 1 4.4-1.2m-3.8-3.2 4.7-.8m-2.6-3c0 .3 3.2.3 3.2.3m-2.4-3.7 3.2.5"
          transform="matrix(-1.25 0 0 1.32 1259.2 -307.3)"
        />
        <path
          fill="#dd8b59"
          fill-rule="evenodd"
          stroke="#512007"
          stroke-width=".5"
          d="m426.4 558.5 27.6.6.3-2-28.5-.3zm1.2-7.3c3.2 0 27.3-4.6 27.3-4.6s.9-3 0-3-27.3 5.6-27.3 5.6z"
          transform="matrix(1.25 0 0 1.3 259.4 -430)"
        />
        <use
          xlink:href="#fk-l"
          width="992.1"
          height="496.1"
          transform="translate(0 5.5)"
        />
      </g>
      <path fill="#012169" d="M0 0h320v240H0z" />
      <path
        fill="#FFF"
        d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
      />
      <path
        fill="#C8102E"
        d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
      />
      <path fill="#FFF" d="M120.5 0v240h80V0zM0 80v80h320V80z" />
      <path fill="#C8102E" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" />
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
export class SvgFkFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
