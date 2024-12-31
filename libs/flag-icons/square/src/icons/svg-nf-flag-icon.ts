import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nf-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-nf"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M155.8 0h200.4v512H155.8z" />
        <path fill="#198200" d="M0 0h155.8v512H0zm356.2 0H512v512H356.2z" />
      </g>
      <g fill-rule="evenodd" stroke="#000" stroke-linejoin="round">
        <path
          fill="#198200"
          stroke-linecap="round"
          stroke-width=".7"
          d="M243 332.4v41l16.5.2s-5.3-35.8-2.4-40.6c3-4.7 5.7-4 5.7-4s10.8 3.2 12 2.7c1.2-.5-.2-4.1 5.6-3.6 1.9-.7.9-4 2.6-4.1 1.7-.2 34.7 9.2 41.8.3-1.8-5-8.3-.3-10-.2-1.6 0-8-3-11.8 0-3.5-2.5-19-4.2-19-4.2-2-2 37 1 39.3-.5 4.6-4.6-8.5-4.1-10.6-2.6-3.6-2.2-8.2-2-11-.5-1.4-3.2-14-1.8-21.1-2.7-2.3-1.4-2-2.1-.4-3 14.8.7 29.5 2.6 44.3 2 4-5.3-5-7.3-10.6-2.8-3.3-5.4-10-.2-14.4-.7-4.4-.5-2.4-6 3.3-5.1 5.6.8 15.7-.4 17.6-3 1.9-2.5-1.1-5.1-10.4-2.7-3.2-3-10.1 0-13.4 1-4.3-2.3-14.3-.3-17.7.6-3.4-2.1 17.6-5.5 17.6-5.5 8-.1 12.6-1.5 15.2-2.2 12.2-6.6-.2-7.3-6.6-2.5-4-3.1-7.8.3-11.4 1.5s-10.4 2-10.4 1.5 9.8-6.5 9.8-6.5 12-.9 14.3-1.2c2.4-.3 14.7-6.6-2-2.4-5.8.5-9.3.2-11.5.3-12.9-1.3 1.2-2.5 1.2-2.5s18.2-1.7 18.5-2.6c.3-7-15-3.7-15-3.7 0-5.1-14.3.1-14.3 0-2.7-1.6 1.6-3.3 1.6-3.3 3.7-.9 9.4-1.2 10.8-2.4 0 0 10.6 0 11.9-2.9-2.6-7.2-22.5 1.3-25.1 2.6-3.6 0 2.4-5.8 2.5-6 .2-.2 16.4-.9 24.1-11.3.6-6.3-9 3.6-9 3.6-.7-8.2-10.4.5-16 1.2-5.7.7-5.9-2.6-2-3 4-.6 8.4-.2 10.6-6.2 2.3-6 9 .3 10.1-2 1.2-2.1-2.4-4-2.4-4s5-5.1-3-5c-8 .2-18.5-1-18.5-1s8.4-3.2 16.2-3c7.9.1 3.6-5.7-4-5.7-7.4 0-11.4-2.6-11.4-2.6l12.9-4.8-.9-3.6s7.5-6-3-4.6l-11.9 1.6-21.3 3.2c-.2 0-5.8-1.7-.4-3 5.5-1.4 24.8-5.4 27.7-4.3 3 1-.3-7.2-10.6-8.2-10.2-1-16.6 2.5-16.6 2.5s-6.6-2.4-.5-4.4c6.2-2 16 .7 16 .7s10.9-3.3 1.8-4.7c-9-1.3-12 1.3-16 1.4-1.7-2 14.2-2.5 15.2-4.3-1.7-3-11.6 0-17.3 0-2.5-1-2.6-2.7.2-3.7 5.8-.2 11.3.1 17.2-.1-.2-3.2 0-6.9-.1-10-7.5-1.4-16.2 1-20.4.8 1.1-3.4 17.2-4.3 19-5.2 3.7-4.7-15.7 0-16 0-3.3-.5-3-2.7-1-4 5-.5 16.1.7 15.3-2.6-.7-3.2-7.7-1.5-10.6-.8-3 .7-7.2.2-7.2.2-1.9-2.5 16.7-1.5 16.6-3.4-.3-2.3-11.8-.7-15.7-.6-3.1-2 14.7-3.5 15-3.7.6-5.7-12 0-14.4 0-2.4 0-1.2-3.6-1.2-3.6s5-2.2 4.8-2.6c-.1-.3-3.7-1.5-4-1.5-.4 0 0-4 0-4s4-3 3.7-3.9c-.4-.8-4.8.7-4.8.7v-3.4s3.2-.4 3.6-1.9c.3-1.5-4-1.7-4-1.7l-1.6-18-1.6 16.8-5.6.9s3.9 2.2 4.6 4.4c.7 2.2-4.8 1.5-4.8 1.5s4.4 3.8 4.8 5.2c.3 1.3-6.2 1.7-6.2 1.7s5.5 4 5.8 6.1c.4 2.3 0 3.5 0 3.5s-9-8-14.8-5.7c-3 1.6 6.9 2.3 13.5 8 0 1.3-16-3.9-16.6-.6.4.9 17 3.3 18.3 5.4-6.1.3-18.7-1.3-18.3.7-1.3 2.3 11.9 1 17.4 3 1.6 1.8 1.5 3.3-1.3 3.5-5.4-2.5-17.3-4.4-17.3-1.2 0 .9 12.3.3 16.7 3.3-5.9 1.3-26-2.8-26.1-.8.6 1 3.8 5 9.2 4.9 5.5-.2 18.1 2.2 19 3.9.8 1.7-16.4-3.6-23-.5s18.7 1.2 22.8 5-8.2-.4-8.2-.4-17-2.4-19.6-1.2c-2.6 1.2-5.5 4-5.5 4s1.7 3.4 3.4 2.7c1.7-.7-.5 2-.5 2s24 5.8 29.2 11c5.3 5-30.4-8-30.4-8s-14.4 5.2.8 5.6c-1.7 2.5 1 4 1 4s25.2 5.4 27.8 9.5c2.5 4-17.3-4-21.7-6.2-4.5-2.2-17.1 1.4-17 2.2.2.9 6.2 2.1 6.4 3.6.1 1.6-7.4 2-7.4 3.4s32 8 40.5 15.3-25.1-8.6-25.1-8.6 1.9 2.6 0 3.3c-1.9.6-8.6-9.6-19.5-3.3-2 2.6 9.6 4.7 12.5 5-1 2.5-1.9 3.4 2.2 6 4.1 2.5-8-3.8-8-3.5l.8 4.5c-3.8-3-8.3-4-12.6-.9 0 0-.2 3.1 4.3 5-2.5 5 2.7 3.4 10.9 8-12.2-3.2-13.2 2.8-4.5 4.1 8.8 1.4 32.7 2.2 38.3 9.6 5.7 7.3-8-2.8-9.5-3a16 16 0 0 0-.7 3.7 37 37 0 0 0-11.4-5c-.3.8-.2 1.7-.6 2.4-4-2.8-7.4-4.8-13.1-5.1l-.7 2.7s-4.8-6-14.2 0c-5.3 3.8 19.8 1.4 24 5.8 4 4.5.8 5.2.8 5.2l-10.3-3.8s-12.1-2.2-15.5.5c-3.5 2.7 49.9 9.4 51.4 16.8 1 4-12.5-4.2-24.3-7.7l-1.3 4s-4.7-4.8-10-5.6l1 4.6s-13-6.1-19.7-2.9c-6.7 3.3 23.2 5 26 8 2.7 3.2-9.1-2-10.2 0-1 2.1-15.5-3.7-15.3-1 .1 2.8 2 4.3 2 4.3s30.3 3 31.3 6.5c1 3.6-16.8-2-16.8-2s-1.7 2.5-.3 3.7c1.4 1.2-10.3-6.8-9.2-1.5-3.8-1.5-13.5-6.2-12.2-2.6 1.4 3.6 27.6 8.7 27.6 8.7s-11.5.9-11 3.8c-14.7-9-14.3-3.2-14-3 .3.1-19-4.9-4.4 3 14.5 7.9 7.8 6.5 8 6.7.2.1 1.5 4 1.2 4-.4 0-10-5.2-13.2-5.6-3.2-.3-18.6 4.3-2.2 11.5 16.4 7.2 26.5-1.7 35.6-.7 9 1 13.3 2.6 12.4 5.5-.8 2.9-9.2-9.6-18 1.2-10.1-2-17-3.1-11.8 4.2-16.4-6-26.4 2-5.7 5.2 20.3.6 32.8-5 32.8-5s3.4 6.3 8.4 1.9c5-4.5 5.1 1.7 5.3 1.7l4.8-2z"
        />
        <path
          fill="#fff"
          stroke-linecap="round"
          stroke-width=".8"
          d="M245 308v-2.8s-6.5-1.1-9.6-.5c-2-1-3.7-2.5-5.9-1.3-.4 1 4 3.4 5.6 3.4 1.8 1.1 9.9 1.4 9.9 1.3zm-.1 4.7s-6.5-2.3-9 .4c.4 2.9 7.6 4.3 9 3.5 1.6-.8 0-3.7 0-3.9m10.9 1.2v2s7.7 1.5 9-.2c1.4-1.6-6-2.7-9-1.8m-.4-8 .3 2.3s6.7 1.5 9.2-2.2c2.6-3.6-5.8 0-9.5-.1m.4-7.8v1.5s5 .8 6.1-1.3c1.2-2.2-6 0-6.1-.2m-10.5-4.6c-.8-1-3.5-3.8-10.8-4.6-5 0 9.2 7.5 10.8 4.6m10.3-7.6-.2 2s17.2-5 21.2-4.7c3.6-1 4.3-3.5 4.2-3.5-3.1-2.2-17.9 1.8-25.2 6.2m.4-6-.2 2s12-2.4 15.3-4.7c3.2-2.3-15 2.7-15.1 2.6zm-.5-6v2s8-.2 9.7-1.9c1-1.6-7.1-.2-9.7-.1m16.8 17s4.2.5 5-.7c-.1-2.2-5 .7-5 .6zm-16.5-24.5.1 4.4s19.4-6.2 20.6-7.3c1.2-1.1 4-4.6-20.7 2.9m-.5-6.2v3.2s7.8-.5 11.4-3.5c3.5-3-11.4.4-11.4.3m-9.4-7.3.5 3-25.6-8.4s-1.3-4.2 25 5.4zm.4-10.3c0 .3 0 2.8-.1 2.7 0 0-17.8-7.4-18.5-6.8-2.3-5.5 18.6 4.2 18.6 4zm8.7 4.6.3 2.5s10.9-2.3 11.5-3.4c.6-1-11.8 1-11.8.9m.2 5.8.4 2.5s4.3-.3 5-1.3c.6-1-5.4-1.2-5.4-1.2m-.6-13.3v2.5s12-2.4 13.3-3.5c1.3-1.2-13.6 1-13.3 1m0-6.6c0 .2-.4 2.5-.1 2.5a69 69 0 0 0 16.7-4.5c2.3-2-16.4 2.3-16.6 2m-.2-11.6v2.5s9.2-1.9 11-3.8-11 1.5-11 1.3m-1.6-16.9.3 3.8s12.3-1.7 14.1-3.8c1.8-2-14.4 0-14.4 0m-5.7-28.4v2.4s-5.9-.3-4.4-1.3c1.4-1 4.4-.9 4.4-1zm5.5 3.2v3.2s7.7-.7 8.3-2c.5-1.1-8.2-1.2-8.3-1.2m-.5 4.6.3 2c.1 0 3-.2 3.6-1s-3.6-.8-3.9-1m-6.4 9.2c0 .2.2 3 0 3 0 0-16.5-4.8-18-4.7-1.6 0-2-3.8 18 1.7m1.3 5.4c0 .5.4 3.5-.2 3.4-.6-.1-11.2-3.5-10-4.5 1-1 10.2 1.3 10.2 1zm-.9 22.6v2.7s-18.4-5.6-19-6.5c-.7-1-2.5-5.3 19 3.8m.7 6.6c0 .1.2 2.6 0 2.6l-25-8.8s-2-6.6 25 6.2"
        />
        <path
          fill="#fff"
          stroke-width=".8"
          d="M217 314.7v2.8s-5-1.4-6.5-4.1c2.9-.8 6.6 1.4 6.5 1.3z"
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
export class SvgNfFlagIcon {
  readonly class = input<string>('');
}
