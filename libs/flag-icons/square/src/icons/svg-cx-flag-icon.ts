import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cx-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-cx"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#0021ad" d="M0 0h512v512H0z" />
      <path fill="#1c8a42" d="M0 0h512v512z" />
      <circle cx="256" cy="256" r="61.7" fill="#ffc639" />
      <path
        fill="#1c8a42"
        d="M218.3 228.3c4.3 5.8 10.6 15.5 15.8 13 4 0 6 .3 6.6 3A39.5 39.5 0 0 0 276 229s.8 0 .5-4.8c0-2.2 3-1.7 3-1 .4 1 .3 1.8.9 1.8 1.2-.4 2.9-3.1 4.3-4.8.3-.8.1-1.6.2-2.6.8-1.8 2.6-1.4 3-.4.3.6.3 1 .7 1.7 1.8 1.2 5.2 0 5.5 0 .3-1.5 1.3-1.3 1.3-1.3 1.2-.3.7-.2 1.6.2-.8 8.2 1.6 8.6 1.4 12.8 0 4.7-1.4 6-1.4 7.8.4 2.2 7.3 2.3 5 4.1-2.2 1.2 0 3.3-3.3 4.1-9.4 4.8-11.2 8.9-11.2 8.9s-2.3 4.4-2.6 4.4c-1.6 3-3.5 1.4-4.7 2.8-.5 1.8-1.1 5.9 0 8 .5 2.8 0 4.4-.8 7.3-.6 6-3 6.9-3.3 9-1 2.2.3 12.8-.8 12.8-7 .1-12.3-1.3-15-1.9 2.6-11.6 1.6-21.8 1.6-22.8-.7-8.3-12.4-6.3-14.2-7.4-1.5-.3-2.4-1.5-3-2-1.6-.2-2.2-.6-3.9-.8-.8.4-.3.9-2.2 1.4-4.6.6-6.7-4-6.7-4 .2-1.6-10.5.3-16.4-1-2.4 1.3-3.4 5.2-5.4 5.7 0 1.2-3.2-1-3.9-2.2 0-3.5 3.1-5 3.1-5 2.5-1.9 4-2.2 5.3-3.4.6-3 .3-5.3 1.6-7.6 1-1.7 2.7-1 3.8-1.7 1.2-.8 1.7-6 .6-7.3l-5-4.5c-1.6-4.5 1.8-7.3 2.7-7"
      />
      <path
        fill="#ffc639"
        d="M452.3 63.7c-2.8-11-27.9-34.8-46.6-50-4.5-3-7.4-1.2-6.9 3.1 2.4 4 4.1 8.2 6.5 12.1.6 2.6 1.9 4.4 2.5 7 0 0 .2 4.5.6 5a25 25 0 0 1 6.6 11.8 52.4 52.4 0 0 0 12.3 16.6c6.6 4.2 1.8 17.1 2 24 0 4.3-3.2 3.8-5.9 3.3-21.5-19.8-42.8-19.8-61.6-25.5-7.4-.8-7.5 2.7-5.1 4.6 13.1 14 25.5 23.6 41.7 31.6l8.2 5.1 9.4 7.8c7.2 4.7 7.8 9 7.8 9.4.2 8.8-4.5 15.6-5.8 18.3-2.5 9.3-7.5 11-7.5 11-40.1 27-61.2 34-126.4 25.7-1-.5-7.2.5 0 3.1 16.6 5.5 57.3 14.4 96.7-4.3 9.5-6.6 15.9-4.4 22.7-8.4 11.3-7 27.3-15.6 30.3-16.5 8.7-4.7 33.3-10 39-14.7 6.5-.5 13.2-1.4 13.7-7 2.1-1.3 5.2-.3 7.5-4.9 5.2-.9 4.3-2.7 4.3-2.7-1.3-3.7-6-5.2-9.5-7.8-5.1-1.7-8.6-2.2-12.3-.4l-3.5 1.6s-5.5-.8-5.5-1.2c-12.1-.7-11-41-15.2-57.7"
      />
      <path
        fill="#1c8a42"
        d="M542.5 217.8a3 1.9 16 1 1-5.8-1.8 3 1.9 16 0 1 5.8 1.8"
      />
      <g fill="#fff" transform="translate(-11.8 182.4)scale(.68267)">
        <path
          id="cx-a"
          d="m188.2 191-12.8-12-12.9 11.8 1.4-17.4-17.3-2.8 14.5-9.8-8.6-15.2 16.7 5.3 6.5-16.2L182 151l16.7-5-8.8 15 14.4 10-17.3 2.5z"
        />
        <path
          d="m233.4 335.5-13.8-9.1-13.4 9.6 4.8-15.5-13.6-9.5 16.6-.4 5-15.5 5.6 15.3 16.7-.1L228 320l5.3 15.4z"
        />
        <use xlink:href="#cx-a" width="100%" height="100%" x="2.5" y="269.1" />
        <use
          xlink:href="#cx-a"
          width="100%"
          height="100%"
          x="-112.1"
          y="123.2"
        />
        <use xlink:href="#cx-a" width="100%" height="100%" x="108.4" y="85" />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCxFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
