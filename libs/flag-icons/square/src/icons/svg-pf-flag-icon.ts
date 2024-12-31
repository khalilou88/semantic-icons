import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pf-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-pf"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="pf-a">
          <path fill-opacity=".7" d="M0 0h512v512H0z" />
        </clipPath>
      </defs>
      <g clip-path="url(#pf-a)">
        <path fill="#fff" d="M0 0h512v512H0z" style="width:0" />
        <path
          fill="#083d9c"
          fill-rule="evenodd"
          stroke="#083d9c"
          stroke-width="2pt"
          d="M210.4 363.5s11.6-9.4 22.8-9.4 14.4 7.8 22.2 8.4c7.8.7 14.4-7.8 24-8 9.8-.4 22 6.8 22 6.8L258.9 374l-48.5-10.6zm-24.3-13.8 144.3.7s-12.5-13.5-27.2-13.8c-14.6-.3-10.6 6.3-21.8 7.2-11.3 1-14.1-6.9-24.4-6.6-10.3.3-16.3 6.6-24 6.9-7.9.3-17.9-7.8-23.8-7.5-6 .3-27.2 9.4-27.2 9.4zm-18.5-17.2 178.1.7c2.9-4.1-8.7-13.8-19.3-14.7-8.8.3-15 9-22.2 9.3-7.2.4-15.3-9-23.5-8.7-8 .3-16.5 8.8-24.6 8.8-8.2 0-14.1-9.1-24.4-9.1s-15 10-22.8 9.4c-7.9-.7-14.7-10-22.2-10s-20 11.2-22.5 10.6c-2.5-.6 3.1 4.7 3.4 3.7z"
        />
        <path
          fill="red"
          fill-rule="evenodd"
          stroke="#000"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="m236 233.5 41 11V186c-18.8 1-34.4-35.6-1.3-38.1-32.4-4.8-36.2 3.7-40 12.7z"
        />
        <path
          fill="#083d9c"
          fill-rule="evenodd"
          stroke="#083d9c"
          stroke-linecap="round"
          stroke-width="5"
          d="m210.1 276 92.5.3"
        />
        <path
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-width="4"
          d="m214.5 253.8 11 14.7m-11 0 11.9-14.4m-5.6-1.3-.4 9.1m11.6-8.1 11 14.7m-11 0 11.9-14.4m-5.6-1.3-.4 9.1m12-8.1 10.8 14.7m-10.9 0 11.9-14.4m-5.6-1.3-.3 9.1m12.4-8.1 11 14.7m-11 0 12-14.4m-5.7-1.3-.3 9.1m11.9-8.1 10.9 14.7m-11 0 12-14.4m-5.7-1.3-.3 9.1"
        />
        <path
          fill="#ef7d08"
          fill-rule="evenodd"
          d="m148 277 39.3.2v-24.7l-45-2.1 5.6 26.5zm-2-34.1 42 4-.4-17.5-41-16.2zm8.5-35 32.2 15.6 4.6-4.8s-3-2-2.8-4c0-1.8 3-2.1 3-4.2 0-1.9-3.3-2.1-3.3-4-.3-2 2.6-4.3 2.6-4.3L161.7 177zm211.2 69.3h-41.5l-.3-24 45.6-3.5zm-41.2-29.7 49.4-6-10.7-28.3-39 16.5zm36-42.1L324.7 224c-.5-2-1-4-3.4-5.6 0 0 2.2-1.3 2.2-3.5s-2.9-2.5-2.9-3.7 2.6-2.4 2.8-5.2c-.3-2-2.8-4.6-2.3-5.2l27.7-21.2 11.5 25.7zM283.1 247l17.9-.8.3-7.2zm-54.3-.6L210 246v-7.5zm-.1-2.2-18.7-9.6v-12.5s-2.2.3-1.9-2.2c.1-5.2 13.8 9.5 20.7 14.3zm54.4-1.1V235s16.8-15.2 20.4-18c0 3.1-2 5.5-2 5.5v12zM174 174.7l18.9 21c.5-2 4.8-2.2 9.2-2 4.4.4 7.9-.2 7.9 3 0 3-2.3 2.6-2.3 4.8s3.4 2 3.4 4.8-2.4 2.2-2.5 4.4c0 1.8 2.6 2 2.6 2l17.7 17.1v-18.4l-36.5-57.3zm29-21.7 24.8 50.7s.3-46.8 4.4-49.3l-7-12.8zm107.7 2-27.6 49.3v-20.8s2.3-3.5-1.3-3.2c-3.6.3-8.1-.3-8.1-.3l11.1-39zm28.4 21.1c-.3.6-18.7 19.2-18.7 19.2-.8-2.2-6.4-1.1-11.6-1.1-5.3 0-6 1.7-5.8 3 .6 3.7 2.4 1 2.4 4.4 0 3.3-2.6 2-2.8 4.5.2 2.8 4 2.1 1.8 4.3l-21.3 20.4v-19.4l39.6-61.5z"
        />
        <path
          fill="red"
          fill-rule="evenodd"
          stroke="#000"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="M245.1 286.3c-8.9 14.7-32.7 10.4-38.2 0-1.7-.4-.7-63.5-.7-63.5s-2.7-1.2-2.8-3.1c-.1-2 3.6-2.1 3.6-4.6 0-2.5-3.8-1.6-3.9-4 0-2.5 4.1-2.2 4-4.4-.3-2.5-4.6-2.1-4.8-4.5-.2-1.8 3-3.4 4-4.2h-9.9c-4.8 0 .1 1.1 0 4 0 1.8-2.4 3-2.6 4.6 0 1.6 3.4 2.7 3.5 4.7 0 1.7-3.5 1.9-3.4 3.5.3 2.7 3.1 3.3 3.1 5 0 1.6-3.9 2.3-3.9 3.6l.6 64.8c6 31.8 41.4 39.8 51.4-2zm23.3 0c9 14.7 32.7 10.4 38.3 0 1.7-.4.7-63.5.7-63.5s2.7-1.2 2.8-3.1c.1-2-3.4-2.1-3.4-4.6 0-2.5 3.6-1.6 3.7-4 0-2.5-3.8-2.3-3.6-4.6.2-2.5 3.1-2.2 3.3-4.5.1-2-1.9-3.2-2.8-4h9.7c4.9 0 0 1.1 0 4 0 1.8 2.5 3 2.7 4.6 0 1.6-3.5 2.7-3.5 4.7 0 1.7 3.5 1.9 3.3 3.5-.2 2.7-3 3.3-3 5 0 1.6 3.9 2.3 3.9 3.6-.2 2.6-.6 64.8-.6 64.8-6.1 31.8-41.4 39.8-51.5-2z"
        />
        <path
          fill="#083d9c"
          fill-rule="evenodd"
          stroke="#083d9c"
          stroke-width="2pt"
          d="M236.5 315.3h39.8c.3-.3-9-13.8-20-12.8-12.2.3-20.5 12.8-19.8 12.8zm126.8-1h-54.4s7-4.1 9-8c3.5 2 2.5 3.9 9.5 4.2 7 .3 13.8-8 20.5-7.7 6.7.3 15.4 11.8 15.4 11.5zm-214.4 0h54.4s-7-4.1-9-8c-3.5 2-2.5 3.9-9.6 4.2-7 .3-13.7-8-20.5-7.7-6.7.3-15.3 11.8-15.3 11.5zm4-17 38.8.2s-2.5-5.3-2.8-11.8c-10-3.5-18.2 7.5-25.3 7.8-7.2.3-14.7-7.8-14.7-7.8l4 11.5zm207 0-38.8.2s2.5-5.3 2.8-11.8c10-3.5 18.1 7.5 25.3 7.8 7.2.3 14.7-7.8 14.7-7.8l-4 11.5zm-113.5.2 19.7-.6s.3-6-10-6-9.4 7-9.7 6.6zm-12-8.4c3.5-1.9 6.7-3.8 8.8-8.1l-13.4.3s-6.2 3.7-9.4 7.8zm43.5 0a18.2 18.2 0 0 1-8.7-8.1l13.4.3s6.3 3.7 9.4 7.8z"
        />
        <path
          fill="#de2010"
          fill-rule="evenodd"
          d="M-128 384h768v128h-768zm0-384h768v128h-768z"
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
export class SvgPfFlagIcon {
  readonly class = input<string>('');
}
