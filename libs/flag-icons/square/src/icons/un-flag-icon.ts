import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-un-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#4b92db" fill-rule="evenodd" d="M0 0h512v512H0z" />
    <svg:g transform="translate(-128.7)scale(.64)">
      <svg:path
        id="un-a"
        fill="#fff"
        d="M663.9 587a71 71 0 0 1-9.5 8.6c-21.2-22-46.2-46.2-69.9-46.2-14.7 0-25.2 11.2-37.6 19-17.1 11-40.6 17.2-60.7 9.1a66 66 0 0 1-29.2-20 64 64 0 0 0 57.5 5c19.7-8.2 39.9-19.1 62.4-19.1 33.2 0 64.8 22.5 87 43.6m-245.6-69c22 25 57.9 17 87.2 23.2 4.1 1 8 2.3 12.4 1.6-3.5-2.2-8.2-2.5-12.2-4-22.8-8.6-26.3-33-38.8-49.7 16 10.6 29.1 25 44 38.7a74 74 0 0 0 36.7 16.2c-3.2 1.2-7.4 1-11 1.8-24 6-50.6 15.4-76.2 7a75 75 0 0 1-42-34.8zm-35.2-58c13.7 31.1 48.2 33.6 71 52.6a64 64 0 0 0 13.5 9.2l.3-.2a100 100 0 0 1-15.1-16.5c-13.1-19-8.8-45-18.9-65.2a142 142 0 0 1 23.1 34.9c8.5 20.2 11.4 43.3 30.5 58.7-20.7-6.8-44.5-5.5-63-17.6-19.6-12.8-37.7-33-41.4-55.8zm-14.7-62.8c2 27.4 31 42 45 64.5 3 4.8 6 9.8 10.3 13.6-.7-2.9-3-5.5-4.4-8.3a63 63 0 0 1-5.3-32.3c1.3-14 7.1-27 4.9-41.7 12 25.9 8.1 58.2 15 86.1 1.6 6.2 5.3 11.6 7.6 17.5-11.7-9-27.1-17-40-27a86 86 0 0 1-29-36.5 85 85 0 0 1-4.1-35.9m.8-50.4c1.4-6.1 2.5-12.4 5.1-18-5 25.8 12.2 44.4 18 66.8 2.2 8.4 3 17.3 6.4 25.2q.5 0 .8-.4c-8.5-23.8 4-45.8 16-64.5a55 55 0 0 0 6.2-16.5c1.3 10.8-1 23.2-3 34.3-2.5 14.3-7.4 27.7-11.3 41.5a65 65 0 0 0-.5 27.4l-1.3-1c-9-16.6-26.8-29.6-32.1-47.8a103 103 0 0 1-4.3-47m9.5-27.8a79 79 0 0 1 19-50q.4-.4 1-.4c-12.6 19-1.1 43.2-2.8 64.9l-1.6 22.2c.2.2.2.9.8.6.8-2.5 1-5.1 1.4-7.7 3-18 18.8-30.4 32.1-43a29 29 0 0 0 7-10.4c-1.1 9-3.6 18.1-7.6 26.2-10.3 20.8-30.1 37.6-33.7 61.3-1.7-22.7-15.6-39.6-15.6-63.7m33-65.9a46 46 0 0 1 22-14.6c-16.5 11.3-15.6 31.4-20.6 48.2-1.8 6.1-4.5 11.9-6 18.2l.5.4a54 54 0 0 1 13.5-19.9c11.5-10.8 28.8-17.4 34.5-33.3-.3 22.1-19.1 38.9-36.3 51.9a63 63 0 0 0-18.2 21.8c.6-6 1-11.2.4-17.1-1.8-19.3-3-41 10.3-55.6zm66.5-37.1c-12.1 10.7-20.2 24.4-29.6 36.7-7.7 10.3-18.4 16.6-27.5 25.2 5-10.2 5.8-22 12.1-31.9 10.7-17 28.5-23.6 45-30"
      />
      <svg:use
        xlink:href="#un-a"
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 1202.2 0)"
      />
    </svg:g>
    <svg:path
      fill="#fff"
      d="m351 279.5-2.4-1.3a103 103 0 0 1-19 27.1l-13.4-13.4A84 84 0 0 0 332 269l-2.3-1.2a82 82 0 0 1-15.3 22.2l-12.2-12.2a64 64 0 0 0 12.4-18.3l-2.3-1.2a62 62 0 0 1-11.9 17.7L287 262.7a42 42 0 0 0 8.6-13.5l-2.3-1.2a40 40 0 0 1-8.1 12.9L273 248.7a23 23 0 0 0 5.8-14H296a40 40 0 0 1-2.7 13.3l2.3 1.2a43 43 0 0 0 3-14.4h19a61 61 0 0 1-5.3 23.6l2.3 1.2a64 64 0 0 0 5.5-24.9h17.2a81 81 0 0 1-7.6 33.2l2.3 1.2q7.5-16 7.9-34.4h19a102 102 0 0 1-10.3 43.5l2.3 1.3a105 105 0 0 0 10.6-46q-.1-20.9-7.7-39.6l-2.3 1q7 17.7 7.4 37.3h-19a84 84 0 0 0-6-29.7l-2.3 1a81 81 0 0 1 5.7 28.7h-17.2a64 64 0 0 0-4.3-22l-2.3 1a62 62 0 0 1 4 21h-19a43 43 0 0 0-2.5-13.4l-2.4 1a40 40 0 0 1 2.4 12.4h-17.2a23 23 0 0 0-5.8-14l12.2-12.1a40 40 0 0 1 8.5 13.7l2.3-1a42 42 0 0 0-9-14.5l13.4-13.5a61 61 0 0 1 13 20.5l2.4-1a64 64 0 0 0-13.6-21.3l12.2-12.1a81 81 0 0 1 17.2 26.6l2.4-1a84 84 0 0 0-17.8-27.4l13.5-13.5a103 103 0 0 1 21.8 33.3l2.3-1a105 105 0 0 0-23.2-35 105 105 0 0 0-35.2-23.3l-1 2.4a103 103 0 0 1 33.5 21.8l-13.5 13.5a84 84 0 0 0-26.9-17.6l-1 2.4a81 81 0 0 1 26.1 17l-12.2 12.2a64 64 0 0 0-20.1-13.2l-1 2.4a61 61 0 0 1 19.3 12.6l-13.4 13.4a43 43 0 0 0-12.8-8.3l-1 2.4a40 40 0 0 1 12 7.7l-12.2 12.2a23 23 0 0 0-14-5.8v-17.2a40 40 0 0 1 14.3 3l1-2.3a43 43 0 0 0-15.2-3.3v-19a61 61 0 0 1 22 4.6l1-2.4a64 64 0 0 0-23-4.7V152a81 81 0 0 1 29.3 6l1-2.4a84 84 0 0 0-30.3-6.1v-19q19.6.2 37.2 7.4l1-2.4A105 105 0 0 0 256 128a105 105 0 0 0-47.2 11.2l1.2 2.2a102 102 0 0 1 44.7-10.8v19a83 83 0 0 0-35.9 8.7l1.2 2.2a81 81 0 0 1 34.7-8.4v17.3a64 64 0 0 0-26.7 6.4l1.1 2.2a61 61 0 0 1 25.6-6.1v19a42 42 0 0 0-16.7 4l1.1 2.2a40 40 0 0 1 15.6-3.7v17.3q-4 .2-7.6 1.8l1.2 2.2a20 20 0 0 1 7.7-1.5 20 20 0 0 1 14.3 6 20 20 0 0 1 6 14.3c0 11.1-9.1 20.3-20.3 20.3a20 20 0 0 1-14.4-6 20 20 0 0 1-5.9-14.3c0-5.5 2.1-10.6 6-14.4a20 20 0 0 1 6.6-4.4l-1.2-2.3a23 23 0 0 0-6.3 4l-12.2-12.1A40 40 0 0 1 239 197l-1-2a43 43 0 0 0-11.2 7.6L213.3 189a62 62 0 0 1 15.8-11l-1.1-2.2a64 64 0 0 0-16.4 11.5L199.4 175a81 81 0 0 1 20.6-14.6l-1.2-2.2a84 84 0 0 0-21.2 15l-13.5-13.5a103 103 0 0 1 25.9-18.4l-1.2-2.2a106 106 0 0 0-47.4 47.7l2.2 1.2a103 103 0 0 1 18.7-26.5l13.5 13.5a84 84 0 0 0-15.4 22.1l2.2 1.2a81 81 0 0 1 15-21.5l12.2 12.2a64 64 0 0 0-12 17.5l2.2 1.2a62 62 0 0 1 11.5-17l13.5 13.5a43 43 0 0 0-8.2 12.6l2.2 1.2a40 40 0 0 1 7.8-12l12.2 12.2a23 23 0 0 0-5.8 13.9H216a40 40 0 0 1 3-14.1l-2.2-1.2a42 42 0 0 0-3.4 15.3h-19a61 61 0 0 1 5.6-24.4l-2.2-1.2a64 64 0 0 0-6 25.6h-17.2a81 81 0 0 1 8-33.8l-2.2-1.2a83 83 0 0 0-8.3 35h-19a102 102 0 0 1 10.5-44l-2.2-1.3a105 105 0 0 0-10.9 46.6 106 106 0 0 0 4.3 29.7l2.5-.6a103 103 0 0 1-4.2-27.9h19a84 84 0 0 0 3.6 23.2l2.5-.6a82 82 0 0 1-3.5-22.6h17.2a64 64 0 0 0 3 18.4l2.5-.6a62 62 0 0 1-3-17.8h19a43 43 0 0 0 2.5 13.1l2.5-.6a40 40 0 0 1-2.4-12.5h17.2a23 23 0 0 0 5.8 14l-12.2 12.2a40 40 0 0 1-8.4-13.7l-2.5.6a42 42 0 0 0 9.1 14.9L211.6 276a61 61 0 0 1-14.2-23.6l-2.5.6a64 64 0 0 0 14.9 24.8L197.6 290a81 81 0 0 1-19.4-32.8l-2.5.6a84 84 0 0 0 20 34l-13.3 13.4a102 102 0 0 1-25.1-42.7l-2.5.6a105 105 0 0 0 26.6 44.9q13 13 29.1 20.6l1.3-2.2A103 103 0 0 1 184 307l13.5-13.4a84 84 0 0 0 23.6 16.1l1.2-2.2a81 81 0 0 1-23-15.7l12.2-12.2a64 64 0 0 0 19.3 12.8l1.3-2.2a61 61 0 0 1-18.8-12.4l13.4-13.4a42 42 0 0 0 14.8 9l1.3-2.2a40 40 0 0 1-14.3-8.6l12.2-12.2a23 23 0 0 0 14 5.8v17.2a40 40 0 0 1-12-2.2l-1.2 2.3a43 43 0 0 0 13.1 2.4v19a61 61 0 0 1-22.5-4.7l-1.3 2.2a64 64 0 0 0 23.8 5.1v17.2a81 81 0 0 1-32.3-7.2l-1.2 2.2a84 84 0 0 0 33.5 7.6v19q-22.7-.4-43-10l-1.2 2.3A105 105 0 0 0 256 339c16.8 0 33-4 47.5-11.3l-1.2-2.4a102 102 0 0 1-45 11v-19a84 84 0 0 0 36.3-8.8l-1.2-2.3a81 81 0 0 1-35.1 8.6v-17.2a64 64 0 0 0 27.3-6.7l-1.2-2.3a61 61 0 0 1-26.1 6.5v-19a42 42 0 0 0 17.4-4.3l-1.2-2.3a40 40 0 0 1-16.2 4v-17.2a23 23 0 0 0 13.9-5.8l12.2 12.2a40 40 0 0 1-9.9 6.8l1.2 2.3a43 43 0 0 0 10.5-7.3l13.4 13.4a62 62 0 0 1-15.2 10.7l1.2 2.3a64 64 0 0 0 15.8-11.2l12.2 12.2a82 82 0 0 1-20.2 14.3l1.2 2.3a84 84 0 0 0 20.8-14.8l13.4 13.4a103 103 0 0 1-25.5 18.2l1.2 2.4a106 106 0 0 0 27-19.6 106 106 0 0 0 20.4-28.6z"
    />
    <svg:path
      fill="#fff"
      d="M261.4 209v.9h.7v-.8zm-1-1h1v.7h-1zm-.7 0v-.7l-.7-.1v.6zm-1.4-.4-.7-.1v-.7l.8.1zm-6.1-.8h.8v.6h-.8zM251 208v-.6l-.7-.1v.6zm-.7 1-.9-.3.2-.6.8.2zm-1.5.7-.1-.6.6-.1.1.6zM165 275h-.5v1h.9v1.5h.6l-.1-1.7-.9-.3zm8.4 9.4-.4.7-1.2-1-.8-1.2-.4-1-.8-2 1.6.8.5 1.5.8.6zM195 313l-.8-1.3 1.3.2 1.3 1.2.6 1.4-.8.4-.4-.6-1-.3zm57.8-97h-1.2l-.2-2.4.7-.5V212h-3.8v-1l.5-.4-.9-.3-.6.9-.2 1-1.1.2v.5h-.8v1.4l-3 2.5-5.9-.2c-.4 1-1.5-.1-1.5-.1-.2-.7-1.7 0-1.7 0 0 1.1-2-.6-2-.6l-3.7-2.7c-2.1-2-5.3.6-5.4 1.1 0 1.5-2.5.3-2.5.3s-2.1-.6-2.4.2c-.4.9-1.7.7-1.7.7l-.3.4-1 .2-.2.7-1.3.2 3.2-.1c.8-.1-.3 1.8-.9 1.7l-1.5.1-.5.6h-1.4l-.6.8h-2s-1.2.9-1.1 1.2-.2 1.3-.5 1.3-1 1-.8 1.3-.6 1.4-.6 1.4l-.2 1-.7.3v3l-1.2.8v1.3l-2 2 .3 1.8-1.6 1.7.2 1.7-1 .3-.2.8-.4 2.3h1c.6-.1.5 1.5 0 1.7s-1.6.6-1 1-1.6.4-1.6-.3-1.3-1.1-1.6-1c-.3.3-.9-.9-.9-.9-1.1-1.2-4.7.1-4.7.1l-.6 1.7c-1.2.3-1.9 2.2-1.9 2.2-1 .3-1.7 1.5-1.4 1.8s-.5.5-.5.5v2.3l-.5.8v2.6c.7 0 .6 1.2.6 1.2-1 0-.9 1.5-.9 1.5l-2.2.7-.4.7-2.8-.1-.7.7-.8-.7h-5.3l-.2-.6-1-.2-.2-1.2-1.6.1-.3.7h-1.7c.1 1.2-1.7 2.8-2 2.4-.1-.5-1.3-1.6-.8-1.9l2-.4v-.8h-4l-.4.6H161v1.8l-.7.2c-.6.4 0 1.5 0 1.5.8.8 0 2 0 2-.7.6.5 1.8.5 1.8.8.2-.5.9-.5.9.2 1 .8 1.4.8 1.4-.6 1 .4 1.6.4 1.6l.1 1.8.8.5v1.2l.4.7h1.7l-.1-2.7c-1.5-1.7 1.3-2.1 1.4-1.5s1.3 1 1.3 1c.2 1.6 2 2.6 2.5 1s1-.7 1.3 0c.3.8 2.3 2.7 2.3 2.7h1.6l.2 1.5c1.8-.1 2.4 0 3.1 2.6a5 5 0 0 0 2.8 3h1.5c0-1.3 1.5.2 1.5.9s2.8 3 2.8 3l3 .7 2.6 2.2 2-.2h.9c.5-1.9 3 0 3.3.7s1.9 1.8 2 1.2c.3-.5 1.5-.2 1.7 1.4s1 1.3 1 1.3h6l2.1-2h5.4c2.8-.1 1.1-4 .6-4-1-.7.3-3.8.3-3.8l-7.8-7.2c-1.8 0-.2-2.7-.2-2.7 1.4-.8-.3-2.2-.3-2.2.2-1.3-.7-2.8-.7-2.8-2-1.3-1.4-3.8-1.4-3.8v-1.7c-1.6-1.5.6-1.8.6-1.8.8-1.3-.5-2.2-.5-2.2l-.1-1.4-1.7-.2-.2-5.1-3.9-5.5c-.7-.2-.2-1.5-.2-1.5 1-.6-.2-1.9-.2-1.9l-.1-2.3 2.2-.3.6-.8h1v-2.8c.4-1.4 1.7-.7 1.7-.7l1.5.1.9-1.6.2-1.3h-1.2c-1.3-.9-.6-3.7-.6-3.7 2-3 4.3-1.3 4.3-1.3h1.5c2.3 1.4.2 4.3.2 4.3-.4.6-.2 2.7-.2 2.7l.6 3.4-1.4 1.2c-1.2.6-1.2 2.2 0 2.5 1 0 .6 2.1-.7.7-1.9 0 1 1.8.2 1.3 2 1 1.5-.8 1.5-.8l2.6-2c1-.8 2.6 1.5 2.6 1.9s4.3 0 4.3 0c1.2.8 1.6 2.8 1.6 2.8 1.2-1.5 3.6-.1 1.8.7 1.7 1.1 1.7 2 1.7 2 1.4-.4 1.4.7 1.4 1l.4-1.6c-1.6-1.2 2.1-1.6 1 .6l-.6 1 1.1.8.1 2.5c2.4-.2 1.7-3.1 1.7-3.1l1-.3c0-1 .8-.4.8-.4-.7-3.7 1.7-4.3 1.7-4.3 1.4-.3 1.5-3.3 1.5-3.3-1-.4-.4-1.9.7-.6 1 1.3-.7-2.6-.7-2.6l-.8-.7-1.2-.2-.1-1.1h-2l-.2 1.5-.8.2-.2-.4-.3 1.1h-2v-1.3l1.1-.3.5-.6.3-1.8h1.4l1.8-.5c0-1.8 1-1.4 1-1.4l.7.5 1 .8v.6l-.6.4-.1.8.3 1.2h.9c.3-1.7 2.5-1.7 3.2-.6l.6-1.5c-1.5-.8 0-2 .4-1.4.4.5 1.4-1.4 1.4-1.4s.7 1 0-.4c-.8-1.3.5-2 .5-2-.2-1.2 1.4-1 1.4-1l.1-1.7-1.5-.1c-.3 1.5-1.6.2-1-.1s1.3-1 1.3-1v-1l.7-.3v-1h1.7l1.4-.7.3-.6h1.5l2.1-2-.2-.9c-1.3 0 0-1 0-1z"
    />
    <svg:path
      fill="#fff"
      d="m209.8 237.4-1.9-.2.1.8h.6c.8 1.5 0 5.1 0 5.1s-1.2.1-1.4-.5-.8 1.4-.3 1.7 1.9 0 2 1.2c0 1.2 1-.7 1-.7z"
    />
    <svg:path
      fill="#fff"
      d="m210.3 249.5.2-1-.8-.3.1-1.6.7-.1v-.8l-1.5 1.1-1-.6v2.6l1.6 2.2zm.4 2.8-.8.1v.9h.8zm-1 5.5-.9.1v.8l1-.1zm1.3-2.6q.3 0 .4-.4 0-.5-.4-.5t-.5.5q0 .3.5.4"
    />
    <svg:circle cx="211.7" cy="257.1" r=".5" fill="#fff" />
    <svg:circle cx="211.7" cy="244.7" r=".5" fill="#fff" />
    <svg:path
      fill="#fff"
      d="m241.5 241.4.3-1 .6-.4v-1l.5-.8.7-.8.2-.9 1-.6 1.3-.2.5-.7.3-1.3v-1l.5-.6 1.3-.5v-2h-.7v-.8l-1.2-.1-.3.5h-.5l-.1.9h.6l.1.6-.4.4-.2.6-.8.2-2 1.8v.9l-.6.8-.6 1.6h-2.3l-.4 2 .3 1.6zm9.4-5.3v-1.5l-.2-1.4-1.6-.8-1.2 1.1-.2 1.5v1l-1 .2-.3 3-.8.3v1l-1 .4-1.3.3-.2 1.4-.8.5-.4 1.3-.6 3.2s1 1.8 1.5 1a2 2 0 0 1 1.4-1l.3-.8 2.9.1c.2-1.2 1.6-.7 1.6-.2s1 .1 1 .1l.8-1.2h1.2v-1.3l.6-.3v-2c1.7-.5 1.5-2.1 1.5-2.1l.4-.5-.2-.8c-.9-.3-.4-1 .1-.9.5.3-.7-1-.7-1-.7.6-1.2-.6-1.2-.6zm1.7 13c-.1 1.4-1.7 1.8-1.7 1.8l-1.2-.3-.6-.6-.1-1.5h1l.1.6zm5.7-6.8c.3 1 .2-1.5.7-1.4.4 0 0-1.5 0-1.5l-1.8 1.4c1 0 1 1 1.1 1.5m5.7-5.7c.4 1 .3 2.4 1.9 3.5.5.4-.3 1-.9.8-.5-.4-2-2.7-2-2.7v-1.4c.3-.9.8-.6 1-.1zm1.4 32.6-.7-.3-.7.6.3.3.3.5zm-4-1.5v1.4m16.2-3.5-.4-.5-.8.5.3.6zm29.9 23.1 1 .4v1.9c1.3 1.3 5.5.2 5.5-.1l-.2-4-.6-.6v-2.7c.4-1.4-2-3.4-2.3-3s-1.6.1-1.6.5-.9 2.6-.4 3.4-.3.7-.5 1.5c0 .8-1.1 2-1 2.7zm-2.4-4.3q-.5 1.3-1.3 1c-.5-.4.5.5.7 1a.6.6 0 0 0 1 0c.3-.5.2-1.5.4-2 .2-.3-.6-.4-.8 0m-4.9-19.8h.7v2h-.7zm11-20.8c-.5-.6 2.1-1.7 2.6-.4s0 1-.5 1c-.4-.2-1.5.2-2-.6zm2.2-13.8 1.2.2v-.7l-1-.2zm-2.8 1.4.6-.3-.2-.5-.2-.3-.3.1-.8.5-.7-.5-.3.6.9.5.1.1h.2l.6-.4zm4-26.5h-1.7s.5.2-1-1.2-2.4.3-2.4.3l-1.7.3v1.7l-.8.3v1h1.2s0 1.3.4.7 3 .1 2.7 1.4c0 .6 2.7 2 2.4 3.7 1.3.2 1 1.6 1 1.6l1.8.3.6-1.1h.5v-.6l-1.2-.3-.2-3.4-.7-.6.2-.8-.9-.4.5-1.4-.8-1.5zm4.6 11h-.9l-1.9.2-1 2s.5.4 1 1.2c.3.7.6 5.2-.7 6s0 .2 0 .2l-.1 2.4c.3 1 .8.6 1.1 0s.7-.6 1.1-1.2a6 6 0 0 0 1.2-2.2c0-.8.6-2 .3-2.3s.3-1.8.3-1.8.4-1 0-1.8.1-1.8.4-2.2zm1.3 4.4v-.8h.7v1zm0 3-.6-.3.3-.6.6.3zm-1-8.6-.4-1s0-.8.2-1.2c.2-.5-.4-.9-.8-1-.3-.1-.2-1-.3-1.4s-.8-.8-.8-.8l-.2-1.9c0-.3-1-.8-.7-1l.9-1c.3-.3-.3-1.8.2-1.5q.6.7.7 1.3c.2.5 0 2 .5 2.3s-.1 1.4.7 1.4c.9 0 .3 2 .3 2s-.2 1.6.3 1.7.3 2.7.3 2.7zm-6.9-17.5c.3.5 1 .8 1 1.2 0 .5-.3.8.4.9s1-.1 1.3.4a3 3 0 0 1 0 1.9c0 .4.2 1 .7 1q.7 0 .6.5c-.1.5.7-1.2.7-1.2-.6-.4-1-1.4-1-1.4l-.5-1.7c0-.3-.7-.5-1-.6s-1-1-1-1zm1-1-1-.9q-.5-.3-1.2-.4a.7.7 0 0 1-.6-1c.2-.5-.3-.8-.3-1.2q0-.6.8 0c.6.2.5.3.9.9q.5.9 1 1c.5-.2.8 1 1.2.6.4-.3.3.8.3.8zm-12.4 12.3c.6.6-3.2.4-3.2 0s.4-2 1.3-1.7 1-1.9 1-1.9-.8.1 0-.3c.7-.4 0-1-.4-1.4l-.6-.9h1.5c.6-.4.8-2.5.8-2.5 1.3.5 2-.4 2-.4s.2.7.6 1.2-1 .8-.5 1c.5.4.7 1.4.5 1.7s-1.4 0-1.4-.3c0-.5-.4.5 0 1s-.5 1.4-.7 1.4-1.6.2-.5.8 2.5.3 2.5.3 1 0 1.3.5q.3.7-.7.6l-3-.2s-.8.8-.5 1zm-6.8 1c.5-.2 1.8-.3 2 0 .2.4-.7.8-.7.8l-1.3.2q-.7-.9 0-1m13.7-9.1c.9-.5 2.7-.5 2.6-1.1s1-.9 1-.9l.4 1.3 1 .7v1.2s.4-.2-.8 0c-1.2.4-.4 1-.4 1h-2.6l-.3-1zm-4.1-5.9c.6 0-.2 2.5 1.5 2.3s0 .8 1.4.9c1.2 0 1-1 1.3-1.8q.7-1-.5-1.4c-.7-.2-.7-.2-1-1-.2-.9-1-1.1-1-1.1l-.3-1.3-1.4.9-1.4 1.8c0 1.4.7.7 1.4.7m2.8 9.2.3-.7.6.3-.3.7zm-1.1-1h.6v.7h-.6zm.5-14.4.1 1h-.6l-.1-1zm-1.8 10h.7v.6h-.7zm-1.7 0v-.6l1-.1.1.6zm-8.7 10.4-.6-.3.3-.7.6.2zm-3.4-2v-.6l1-.1v.6zm-20.8 0v.6l2.4-.1v-.7zm-1.5.8-.2-1 .6-.1.2 1zm-.5.6-.2-.6h.3l.2.5zm5.3-1.8v.8h1s.6.5.6.8.8.7 1.2.7 1.6-.9 1.6-.9.5-1.5 0-1.4c-.3.1-1.2.8-1.3.1 0-.6-1.4-.3-1.4-.3zm5.3-1.2c0 .4-.2.8.5.9s1.8-.4 1.9.2 0 1 1 1.4a5 5 0 0 0 2 .4l2-.2s1.5.3 1.8.6q1.9 1.8 2.2 1c.4-.6 0-1.8-.2-2.2 0-.4-1.6-2.5-2.1-2s-.6 0-1.6.3-3 0-3-.4c-.2-.4-1.7-.6-1.7-1s-1-1-1-.4c.2.7-.7 1-1 .8-.1-.2-.8.6-.8.6m24.5-13.8.8-2.4c-1.1-.2-.9-1.4-.9-1.4 0-1-1.6-2-2.1-1.7s-.3-2.3-.3-2.3 1-.6 1.4-.3-3.7-5.4-4.5-4.9c-.9.6-2.8-.5-2.7-1.5s-3.8-4.2-3.8-4.2-1.3-.8-1.5-.2-.6 1 0 1.4.5-.5 1.3.2c.7.8 2.1 1.7 1.6 2.4q-1 .9-1.2.9l.8.8h1.1l.2 1.9s1.3.6 1.6 1.4q.6 1 0 1.6c-.3.4-1 1.2-.8 2 0 .7 1 1 1 1l.8.1.6.3v1.4c.9-.2 2.3 1 2.2 1.8-.1.7.2.3 1.2 1 1 .8.8 1 1.5 1.5q1.2.7 1.7-.8"
    />
    <svg:path
      fill="#fff"
      d="M285.4 176.6c-.1-.4-.4-2 .3-1.8.6 0 .2 0 1 .3.7.3.8-.5.8-.5h1.2l1.5 1.2-.3 1h-1c-.6-.8-1.6-.5-1.4.3.2.7-.5 2.1-1 2.2s-1.8.1-1.7-.5zm-.9-2.9v-.9s0-.8-.6-.8-1.5-.7-1.3-1.1-1.8-.9-1.8-.9-1.8-1.7-1.2-1.5.3-.7.3-.7-1.2.2-1.6 0c-.3 0-.2-1-.2-1s-1.3-.3-1.3 0 .5.3.7 1 0 1.7 1 2q1.3.1 1.3.8c.1.4 1.3.5 1.3.5l.9.4zm-11.8-11.9-.8-.2v1h1.1zm0-3.6c-1.1-.9 1.5.6 1.5.6.8 0 1.4.7 1.4 1s1.1.2 1.1.2l.2-.8-.9-1-.7-.6s-1.2 0-1.2-.4c0-.3-1 1.3-1.4 1m19.6.6c-.3 1-.5 2.3-1 2.3s-.3 1.4-.3 1.4h1.8c.4.2.4 1.3.4 1.3 1.6-.1 2.3 2 2 2.6-.1.5.7.5.7.5s0 1.7-.2 2.2c-.2.4 1.4.7 1.8 1.4s-.2 2.8-.5 2.9c-.4 0 .8.4.7 1s.3 0 .4.8l.4 2.7 1.4.1c.3-1.4 3-1.4 3.4-1.3 1.9.7 3.2 3.5 3.2 4.1 0 .7-1.1.8-1.1.8l.2 3.1c1.8.6 3.3 3.2 3 3.6s1.3.3 1.3.3c.2-2 2-1.3 2.2-.6 0 .6.4 2 .4 2l.5 1 .8.7h1.1l.3.6 1.4.2s1.2 1.3 1.3 1.6 1.7.2 2.1.3q.9.2 1.2 1c.1.6.8 1.4.8 1.4s1.2.3 1.3.8l.7 1.4 1 .8.1 1 1.2.1.3 1.3h2l1-.8c1.4-.8 2.4-1.8 2.5-2.2 0-.4.3-2 1.3-1.7 1.1.3.4-2.4.4-2.4s-1.5-1-1.4-1.6c0-.6-1.5-1.6-1.4-2 .1-.5-1.4-1.4-1.3-1.8s-.7-1.6-.7-1.6l-1.6-1.5-.2-1-1.3-.1-2.6-3.1.1-1h-.7v-1.2l-.7-.4-1.2-.1-2.4-2.6-.2-1.2h-1.1l.2-2.3c.7-1 .3-2.8.3-2.8s-1.5.8-2.2.4c-.8-.3.3-1 .3-1v-1l-.7-.6s-1.8.3-1.9 0l-.4-1.8-.1-1.8-.8-.4v-.6h-1.2v-1.2l-.7-.2-.6-.3-.1-1.3-2.4-.1-.7-1.1-.9-1.3-2.6-.2-.7-.7-1-.2-.8-.3-.3.5-2 .1-.1.7c-1 .5-5.3 0-5.4.4m11.1-2.8c-.1-.8 2.2-1.6 2.7-1s2 .8 2.2 4c.1 1.2-1.9-1.2-1.9-1.2l-1.6-.5q-1.2-.4-1.4-1.3m-31.1 1.3-.6-.2.4-1 .6.3zm-5.6-10.6-1.3-1.4v-1.2l-.5-.4-.4-1.5-1.4-.4-1.4.5-1.4 1-1.7.2-.8 1 3.4.3.6 1 2.5.3 1.6 1.6q2.1.4.8-1m-.2-5.3c-.2-1-1.6 1.2-.2 1.6s2.8 0 2.8 0l.3-.6 5.3.1.7-1s1.2-.5 1.8-.3c.5.2 0-1.5-.5-1.3s-1.6.1-1.6.1h-1.9c0-.7-1.8-.4-1.9 0s-.7.6-.7.6l-2.5.2c-.2.6-1.5 1-1.6.6M256 159.6c1.6.6 2.2.2 2.3-.3q0-.5.9-.6c.6-.1-.1-1.4-.7-1.3q-1.1.1-1.4-.8c-.1-.5-1.2-1.9-1.3-.8s-.8 1-.7 1.8.5 2 .9 2m-12.2 1.3c-.1-.4 2.1-.5 2.4-.2.3.4.1 1 1 1s.6.6.5.9-1.2.2-1.3-.1c0-.4-1.7-.5-1.7-.5s-.8-.6-1-1.1zm35.3-22.5-.5-.6-.5.5.8.8.2.2.2-.2 1-.9-.3-.5zm-5.7-3-.3.5.8.5.2.1h.2l1.1-.8-.3-.6-1 .7zm-2.9 22.5h-1l-.1.6h.9l.7 1.1.5-.3-.8-1.2v-.1zm-35 30.2v1.2h1.7c.6 0-.6-.8-.6-.8s-1.2.1-1.1-.4m2 0 .4-.5.6.5-.4.5zm-19.4-20.2.5-.5.6.7-.4.5zM248 306.3l-.3.6.6.4-.2.2.5.4.5-.5.3-.3-.4-.2zm-7.6-7.7-.7.5-.3.3.4.3.7.5.4-.5-.4-.3.3-.3zm79.5-20c-.1-.5-.8-.8-.8-.8l-.2.6.2.1v.8l.4.4q.5-.6.4-1zm0-2.1v-1l1 .2v.9zm25.6-8.3c.5-.3 1-.9 1 .3 0 1.3-.6.9-1 1.3s-.6-1.2 0-1.7zm5.4-4.6v-.2l-.1-.6-.6.2v.5q0 .3.3.5l.4.1v-.6zm-1.4.5.4 1.3.6-.2-.4-1.3zm-2.3 2.5h-.6q-.1.9.5 1.2l.2-.6zm-2.8-12.8-.3-.5q-1-.2-1.7.4l.3.5q.8-.4 1.1-.3zm-29.5-34.5c-.4.4-1.3.6-1.3.6l-.4 1.2-.5.4v1.1c-.1.8-1 1.2-1 1.2l-.5.5s-2.5.2-2.9 0c-1-.4-.3-1.7.4-1.6s-.1-1.8-.1-1.8l.8-.1s.1-2 .4-2 0-.6-.5-1c-.4-.3-1-1.3-1.4-1.2h-2.1l-.3.6-1.2.2s.1.9-.1 1.1c-.6.8-3.1 2.4-2-.3l.3-.6v-1l-2-.1s-.9-.4-.9-.8v-1l-2.3-2.4-2.7-.4-.2-.5-1.6-.2c-2-1-3.6-.1-3.3 1.5s.9 2.3-.2 2.3c-1 0-1.3-1-1.3-1s-.8-.2-.8.2-.3 1.3 0 1.7c.3.5-.4 1.1-.8.8-.3-.3-1.1-1.3-1-1.6.3-.4-1.4-2.4.3-2.7s-.1-1.3.5-1.5l.9-.5h.8l.6-.4-1.4-.2-.9-.1-1.6-.1a5 5 0 0 0-1.9 2.3c-.8 1.7-2.9-.6-2.1-1.5s-2.4 0-2.9.4-2.1.2-2.1.2c-.3 1-1.8-.1-1.4-.8q.5-1 .4-1l-.5-.2-.6 1.2c-1.5 0-2 .9-1.6 1.4.3.6-.5 0-.7.7s.1.7.8 1c.6.4-.4.4 0 .9s1.8 0 1 .8c-.7.7-2.2.4-2.2.4-.1 1-2.1.7-2.3.4l-1.9-2.2-2-.1c-.2-1.6 1-.8 1.4-2s.6-3.1.6-3.1-1.7-.1-1.8.4c0 .5-1.1.9-1.1.9s-.9.3-.6.7c.4.5-.6.7-.6.7s.2.7-.1 1c-.9.8-3 0-3.3-.3l-1.3-.5-1.3-.9-1.5.7-.4.4H253v1.3l2.8.3.2 2.7-1.2-.4h-.7l-.3-.7h-.7v2.3l.7.5.5.6h1l.3 1.4h2.6l.4.6 1.6.1 3 3.2-.2 1-.5.3c.2.7-1.4.3-1.4.3v.6l.8.1.7.5 1-1.9c1.2-.7 1.8.4 1.9 1s-.6.6-.6.6v1.5l.7.2c1 1.3-.4 2-.4 2l-.4 1.1c-.3 1-1.5.8-1.5.8l-.4.6-1.3.3 2.6.4q.4-1.3 1.2-.7c.3.4.3 1.2.3 1.2l.6.1v1.2l.6.2v3.5l.7.8c1.3-.5 1.3.4.6.8s-.2 2.4-.2 2.4l-.5.5v.9l-.6.4v1.2c-1.1-.6-2.4-.3-2.7 0-1-.7-3-.4-3 .1.7.9-.7 1-.7 1l-.8 1c.6 1-.5 1.1-.5 1.1v2l-1.3 1.3.1 2.8c0 .7 1.6.8 2 .4s1.5.9 1.5.9h1l.2-2-.6-.3v-3.1l1-1.2c1.3-.5.9 2.8.9 3.1 0 1.2.6 1.1 1.2.9 1-.5.2 1.2-.7 1-.8 0-.3 1.1-.3 1.1l.5.3-1 .7-.8 1-1-.3-1.3-.1-.4-.8-.8-.1-.1 1.5-.5.7-1.3 1.3c1.7 0-.2 1.1-.6 1.1 1 .4-.1 1.3-2.6.6v.7l-.9.1.8.9.8.1-.3 1.8c0 1.4-3.5.5-3.8.1l-.1 2h-.6v3.2l1.1-.2v.8h2.9l4.1-4.3 2.5-.6c.2-1 1.3.2 1.3.2 1 0 1.2.7 1.2.7l1.4.2c1.2.3.5.4.6.9s.6.4.6.4l.2-1.4h.7l-.7-.7-1.2-.5-1.2-.5c-.9-1.2.2-1 1-1h1.4s1.6 2.3 1.6 2.8.8.6.8.6h.9l.3.7h1l.3.6h2v-1l-1.8-.3v-1l-1.4-.4c-.4-1.8.4-2.3.9-1.5l.6.1-.2-1.6.8-.2-.3-2.3-.6-.2v-.7h2.7q-.1-2 0-2h.8l.1.6 3.3.3 2.3-2.7c-.1-.2.2-.3 0-.6-.4-.3-.8 0-1.3-.3s0-2.1-.1-2.6 1.8-1 1.5 0 0 1.3 0 1.3c1.3-1.3 2.5.1 2.4.5-.1.3.7.6 1.3.3.5-.3 1.2 1 1 1.6-.3.6-2.2.5-2.3-.1s-.4-.4-.6-.1-1.2.5-1.7.2l-.2-.2-2.3 2.7h.1c1.3.7.7 1.7.2 2l-1.1.1-.2.5-2.8.2-.2 1c-1.4-.1-2 1.4-1.6 2.1s0 1.4 0 1.4l1.1.6 1.5-.5c.2-1 1.2-1.3 2-2s2.3 1.3 1.9 2.1q-.6 1.3-.5 1.2l.1 1-1 .4-.9.5v.5h-3l-.5.5-1.4.1-.4.7-1 .1s-1.5.8-.9 1.6-2.7.8-3.4-.4c-.2 1-1.4 0-1.4 0l-1.2-.2v-1.6c-.3-1.1-2.3-1.1-2.2-.4s-3.8.4-3.8.4l-1.3.6-1.2.7v.5l-2 .2-.8.4-.4-.6h-.8l-.9 1.2c-2.2 0-4.3 1.4-4.1 2 .2.5-.9 1-.9 1l-1 .3-.6 1-1.2.4-.2 2.3-.7.4v1l-.7.2v.6h-1.1l.6 1.7.9.4c1.5.2.8 2 .8 2l.9.2.4 1.2.9 1.7c.3 1.3 1.3 1 1.7.9s.8 1.3.8 1.3h4.3s-.2.5.5.7c.8.2 5.7.4 5.9.1-.2-1 2.6-1.2 3.8-.3s2.8.3 2.8.3l1.6 2 1 2.3 1.8.6 1.3.3.4 1.8 1 .1.3 1.2c1.2.9-.3 2.7-.3 2.7v2.4l.8.4v.9l1.3 1.4 1.6.1 4 4.3 3.3 1 .5 1.7h.8l.7-.6 2.5-.1 1.3-1.2 1.4-.2 11.8-10-1-.7V301c1.8-1.4 2-3.9.1-4-1.3-.3-.7-1.7.6-2l.7-.2v-1l2.5-2.3v-1.7l-5.3-4.4c-2.4-1 0-6.1 1.5-6 1.6.1 0-8 0-8l-1-.4.3-2.6H298l-1.9 2.5-.5 1.7c-.2 2.3-6.8 1.8-7.1 1.5l-2.6-1.3s-1.7-1.4-2-1c-.3.5-1.8-.5-1.8-.2 0 .4-1.4-.7-1.4-.7l-2.1-.8 1.6-.3-.4-1.3 2.8 1.4c.3.4 1.7.3 1.7.3l.4.6s.9-.1 1.4.5 3.3.1 3.3.1l.8.7 1.1.4 3.3.1.1-2 .7-.7-.1-1.3.7-.6v-1.1l.6-.2.1-2.4.6-.1V259l-1.6-1.5c-.1.5-1.8.5-1.8.5s-.4.8-.8.8.5 1 .2 1.6-1 .7-1 .7l-1.6.4-.4.5h-1.7l-.3-1.4 2-.5 1-.6.6-1c0-1.1 1.3-1 1.3-1s2.5-2 2.6-3c0-1 1-3.7 2.4-3.7h2.8c1-.4.7-1.8.7-1.8l1.4-.3.2.8s2 .2 2.2-.1.6-1 1.1-.8c.6.4 2.3-.7 2.3-.7 0-.8 2.7-.5 2.7-.5l.4-1s-1.9-2.4-2.2-2.4-2-1.5-2.2-1c-1.7-.4-1.6-2.8-1.6-2.8l-.6-1.5c0-.9-1.6-2.7-2-2.5-1.6-1.2-.4-2.6 0-2.7.5 0 1.5-1.6 1.5-1.6l.6-1.5 1.8-.5.2-1.4-1-.2s1-2 1.6-2l4.4-.1c.3-.2 1-2 1-2.3s.8-.4 1.1-.5 1-1 1.3-1.4c.2-.5-.5-3.2-1-2.7"
    />
    <svg:path
      fill="#fff"
      d="M256 258.2c.2-.2.3.5.6.4.4 0 .5.6.2.6s-.3.4-.3.5q0 .4-.3.8-.2.3-.8 0-.3-.2-.8-.2c-.5 0-.1.6-.1.6s-1.7 0-1.4-.3q.7-.2.4-.5-.2-.1 0-.6c.2-.5.8-.2.6-.4s0-1.2.4-.7l.2-.5c-.2-.3 0-.3-.5-.5s-.1-1.1-.1-1.1v-.7c.2-.8 1.8-.9 1.9-.2v1.3l.5.1s-.1.5-.5.5 0 .3-.2.5zm-5.3.8c.3-.5.8-2.6 1.5-2s1 0 1 0 .3.4.2 1q-.2 1.1-.8 1.4-.5.1-1.2.4c-.4.1-.7-.8-.7-.8"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUnFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
