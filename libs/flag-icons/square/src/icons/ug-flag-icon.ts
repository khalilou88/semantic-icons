import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ug-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="ug-a">
        <svg:path fill-opacity=".7" d="M124 0h496v496H124z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#ug-a)" transform="translate(-128)scale(1.0321)">
      <svg:path fill="#ffe700" fill-rule="evenodd" d="M0 330.7h744v82.7H0z" />
      <svg:path fill="#000001" fill-rule="evenodd" d="M0 248h744v82.7H0z" />
      <svg:path fill="#de3908" fill-rule="evenodd" d="M0 165.4h744V248H0z" />
      <svg:path fill="#ffe700" fill-rule="evenodd" d="M0 82.7h744v82.7H0z" />
      <svg:path fill="#000001" fill-rule="evenodd" d="M0 0h744v82.7H0z" />
      <svg:path
        fill="#fffdff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".9"
        d="M449.3 248a77.2 77.2 0 1 1-154.5 0 77.2 77.2 0 0 1 154.5 0z"
      />
      <svg:path
        fill="#de3108"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".9"
        d="m358.4 188.8-5-9.2c2-2 5.2-3.4 10.4-3.4l-.5 10z"
      />
      <svg:path
        fill="#ffe700"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".9"
        d="m363.3 186.4.6-10.2s10.4-.6 16 6.1l-5.5 8z"
      />
      <svg:path
        fill="#de3108"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".9"
        d="m374.6 190.2 5.1-8c3.4 3.6 4.8 6.2 5.4 10 0 .2-8.1 2-8.1 2z"
      />
      <svg:path
        fill-rule="evenodd"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".8"
        d="M361 320.9s9.6-11 28.2-8.7c-2.8-4.5-11.9-4-11.9-4s-2.8-21.4-.6-22.4 11.5 0 11.5 0c1.3 0 3.4-3.3 1.7-5.4s-6.6-10.2-4.6-11.8 13 .9 13 .9l-31-39.8s-3.2-15 3.2-22.1c7.6-6.4 6.8-13.2 6.6-13.1-1-7-11.6-12-18.8-5.6-4.2 5.1-1.4 9-1.4 9s-11 3-11.5 5c-.4 1.8 12.5-.4 12.5-.4l-1.2 8.8s-25.2 23-6 42.7c.3 0 .7-.9.7-.9s6.8 8.4 13.9 10.2c6.7 6.9 6 5.8 6 5.8s1.4 10.8.1 13a93 93 0 0 0-21.2-.2c-2.3.7-11.1.3-9 14.6l3.2-7.3s-.2 5.2 1.9 7c-.4-5.4 2-9.1 2-9.1s.4 6 1.8 6.8c1.3 1 1.3-9.6 8.6-8.8 7.3 1 12.6.7 12.6.7s2.4 20.6 1.6 22.6c-5.2-1.3-17.8.5-18.6 3.7 7.4-.5 10.8.4 10.8.4s-6 5.3-4.1 8.4"
      />
      <svg:path
        fill="#9ca69c"
        fill-rule="evenodd"
        stroke="#9ca69c"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".8"
        d="M364 208s-18.4 20.2-10.5 35.7c.5-2.2.3-3.5.5-3.4-.4-.3 2.3 1.8 2 1.4.2-1.1-.7-3.5-.7-3.5l2.4.6-1.4-2.7 3.5.5s-1.2-3.4-.8-3.4l2.9.2c-5.2-9.3-.3-17 2-25.3z"
      />
      <svg:path
        fill="#9ca69c"
        fill-rule="evenodd"
        stroke="#9ca69c"
        stroke-width=".9"
        d="M370.3 190.8s1 7-2.8 9c-.6.4-3 1.2-2.7 2.6.5 1.9 1.5 1.5 3 1.2 4-.7 8.6-9.2 2.5-12.8z"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        d="M363.5 196.7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      />
      <svg:path
        fill="#de3108"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".9"
        d="M357.6 202.5c-1 .8-6 6.1-1 8 5.2-1.4 3.7-2.3 4.9-3.5 0-2.3-2.6-3-3.9-4.5z"
      />
      <svg:path
        fill="#9ca69c"
        fill-rule="evenodd"
        stroke="#9ca69c"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".8"
        d="M368.7 252.4c-.3 1.2-1.4 5.4.2 8.6 4.4-1.8 6.4-1.3 7.9-.3-3.6-3-5-4.1-8.1-8.3"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".8"
        d="m376.3 272.4.2 9.8s3.5.7 5 0c1.6-.6 0-6.8-5.2-9.8"
      />
      <svg:path
        fill="#9ca69c"
        fill-rule="evenodd"
        stroke="#000"
        stroke-width=".9"
        d="M401.2 273.6s-6.4-15.3-22.5-19.2-14.1-21-12.8-22.1c.7-1.5 1.2-3.8 5.9-1.6s26.1 13 29.2 13.5.4 29.8.2 29.4z"
      />
      <svg:path
        fill="#de3108"
        fill-rule="evenodd"
        stroke="#000"
        stroke-linejoin="round"
        stroke-width=".8"
        d="M385.8 254.4c-.3.1 21.6 12.9 15 23.9 6.3-4.1 4.2-11.4 4.2-11.4s5.1 13.3-7.3 19.8c1.4 1.2 2.2.9 2.2.9l-2 2.1s-1 1.6 7.3-2.4c-2.3 1.8-2.5 3.1-2.5 3.1s.7 1.8 6.1-3a30 30 0 0 0-5.4 7.2c12-1.1 37.8-39.7-8.1-51.1l2 2.2z"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width=".8"
        d="M386.7 250.6c3 2 4 2.8 4.4 3.8-2.7-.6-5.2-.4-5.2-.4s-5.8-5.6-6.9-6c-.8 0-5.4-3-5.4-3-2.3-1.1-4.4-9 4-6.7 8.8 4.1 10 4.4 10 4.4L398 246l6 6.7s-10.7-5.3-12-5.4c3 2.4 4.6 5.6 4.6 5.6-3.4-1-6.3-1.8-9.9-2.3"
      />
      <svg:path
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-width=".8"
        d="M345.3 203.3s10.2-2.4 11.4-2"
      />
      <svg:path fill="#de3908" fill-rule="evenodd" d="M0 413.4h744v82.7H0z" />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUgFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
