import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-eg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#000001" d="M0 320h640v160H0z" />
    <svg:path fill="#fff" d="M0 160h640v160H0z" />
    <svg:path fill="#ce1126" d="M0 0h640v160H0z" />
    <svg:g fill="#fff" stroke="#c09300" transform="translate(-40)scale(.8)">
      <svg:path
        stroke-linejoin="round"
        stroke-width="1.3"
        d="m450.8 302.4 68.5 63.6-4.9-115.5c-.7-17.5-15.9-13.5-27-7.2-11.1 7.2-24 7.2-37.4 2.5-13.5 4.7-26.3 4.7-37.4-2.5-11-6.3-26.3-10.3-27 7.2L380.7 366z"
      />
      <svg:path
        id="eg-a"
        fill="#c09300"
        stroke="none"
        d="m393.5 246.5-4.8 112.3-8 7.2 4.9-115.5a24 24 0 0 1 7.9-4m9.6 8-4 94-8 8.2 4.8-108.5c1.6 1.6 6.3 5.5 7.2 6.3m8.7 7.2-3.1 78.4-6.5 6.3 4-89.4c1.6 1.5 4.8 3.8 5.6 4.7m9.5 4-3.1 66.8-6.3 5.1 3.1-74.3c1.6.7 4.7 2.4 6.3 2.4m8.8 0-2.3 55.7-6.5 6.3 2.5-61.3c1.5 0 5.6 0 6.3-.7"
      />
      <svg:use
        xlink:href="#eg-a"
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 900 0)"
      />
      <svg:path
        fill="#c09300"
        stroke-width="1.1"
        d="m453.2 315 9.6 43.8-3.2 3.2-3.3-2.5-5.4-39 2.3 39-3.2 4-3.1-4 2.3-39-5.5 39-3.3 2.5-3.2-3.2 9.6-43.7h6.4z"
      />
      <svg:g id="eg-b" fill="none" stroke-linejoin="round" stroke-width="1.3">
        <svg:path
          fill="#fff"
          stroke-width="1.2"
          d="m428.5 295.8-19.1 67.7 26.3 4 11.1-50.9z"
        />
        <svg:path d="m422.2 319 2.3 5.5 12.4-11.8" />
        <svg:path
          d="m430.8 305 2.6 24.3 7.9-10.4m-3.2 4 4.3 15m1.7-5.5-8.7 13.2m2.7 13.2-2.8-13.2-2.4-13.4-5.9 7.9-2.5-9.1-8.2 8.4 4.1 15.2 5.8-9.4 3.1 9.6 6-9.2"
        />
        <svg:path d="m415 362 5.3-7.5 3.4 11.5 4.8-8 3.1 9.6" />
      </svg:g>
      <svg:use
        xlink:href="#eg-b"
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 900 0)"
      />
      <svg:g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3">
        <svg:path
          stroke-width="2.4"
          d="M450 393.8c20 0 39-1.6 50.2-4.7 4.7-.9 4.7-3.3 4.7-6.5 4.8-1.6 2.4-7.2 5.7-7.2-3.4 1-4-5.5-8-4.7 0-5.6-5.7-6.3-10.4-4.7-9.5 3.1-26.3 3.9-42.2 3.9-16-.8-32.6-.8-42.2-4-4.7-1.5-10.3-.8-10.3 4.8-4-.8-4.7 5.6-8 4.7 3.3 0 .8 5.7 5.6 7.2 0 3.2 0 5.6 4.8 6.5 11 3.1 30.2 4.7 50.1 4.7"
        />
        <svg:path
          d="M422.9 363.5c6.4.9 13.6 1.6 19.2.9 3.2 0 5.5 5.5-.9 6.3-5.5.7-14.3 0-19-.8a231 231 0 0 1-18.4-4c-5.6-2.4-1.6-7 1.6-6.4a105 105 0 0 0 17.5 4m54.2 0c-6.4.9-13.6 1.6-19 .9-3.4 0-5.7 5.5.7 6.3 5.6.7 14.3 0 19-.8 4-.8 12.8-2.3 18.4-4 5.6-2.4 1.6-7-1.6-6.4a105 105 0 0 1-17.5 4"
        />
        <svg:path
          d="M403 360.4c-4.8-.9-7 4.7-5.5 7.9.7-1.6 4-1.6 4.7-3.2.9-2.4-.7-2.4.9-4.7zm19.2 14.7c0-3.2 3.1-2.8 3.1-6 0-1.5-.8-4-2.4-4a3.4 3.4 0 0 0-3.2 3.2c-.7 3.1 2.5 3.6 2.5 6.8m22.7-9.1c4.7 0 4.2 6.3 2 9.5 0-2.3-4-3.2-4-4.8 0-2.4 3.6-2.4 2-4.7m52-5.6c4.9-.9 7.2 4.7 5.6 7.9-.7-1.6-4-1.6-4.7-3.2-.9-2.4.7-2.4-.9-4.7M478 375c0-3.2-3.2-2.8-3.2-6 0-1.5.8-4 2.4-4a3.4 3.4 0 0 1 3.2 3.2c.7 3.1-2.5 3.6-2.5 6.8zm-23-9c-4.7 0-4.2 6.3-2 9.5 0-2.3 4-3.2 4-4.8 0-2.4-3.6-2.4-2-4.7"
        />
        <svg:path
          stroke-width=".9"
          d="M404.7 362c1.6 0 4 .7 4.7 1.6zm7.9 2.4c.8 0 4 .7 5.5 1.6zm28.6 3.2c-1.5 0-4.7 0-5.5.7l5.5-.8zm-8.7 0c-.9-.9-4-.9-5.6 0zm62.8-5.6a8 8 0 0 0-4.7 1.6zm-7.8 2.4c-1 0-4 .7-5.6 1.6zm-28.7 3.2c1.5 0 4.7 0 5.6.7l-5.6-.8zm8.7 0c.9-.9 4-.9 5.6 0z"
        />
        <svg:g fill="#c09300" stroke="none">
          <svg:path
            d="M403.3 374.6q-.8-.3-.6-1 .3-1 1-.8c.4 0 .9.6.9.8l-.4.7-.2.1q-.1.3-.7.2m55 3.9q-.4-.2-.6-.7c0-.4.6-1 1-1l.8.4q.5.6-.1 1.2-.5.3-1.1 0zm.3 2.5q-.5-.2-.6-.8t.5-.9l.4-.2.4.2q.6.2.7.8 0 .5-.7.8-.4.3-.7 0z"
          />
          <svg:path
            d="M407.8 370q-.7.1-1.2.6c-.6.1-1.4.5-2 0-.6-.1-1.4 0-1.5.8.1.7 1 1 1.6.6.4-.5 1.5-.9 1.7 0-.5.8-.4 1.7-.8 2.4q-.1.7-.5 1.3-.8 0-1.4.3a2 2 0 0 0-1.6.8q-.7.9-.9 2c.1.6 1 .8 1.6.9l2 .6 3.2.9q2.4.6 4.8 1.1l.5.1c.7.2 1-.5 1-1l1-3.6c.2-.5.5-1.5-.4-1.3q-.7.6-1.6.8c-.9 0-.4 1 0 1.3q0 1-.5 1.8-.9.3-1.8-.2c-.5 0-1.7-.3-1.2-1l.5-1.8q.3-1 .5-2c-.4-.7-1 .3-1.5.4s-1.6.3-1 1c.6.4.2 1.1 0 1.7 0 .7-.8 1-1.4.7-.6 0-1.5-.5-1-1.1l.5-1.8.7-2q0-1 .6-1.8c0-.7.5-1.3.5-2q0-.4-.4-.4zm-3.7 7.3h.3q.3.3 0 .6l-.3.2q-.7 0-.6-.3 0-.1.3-.3zm-1 5q-.7-.5.3-1.3.4-.3.9.1.9.6 0 1.3-.2.3-.5.2t-.7-.2zm3 1a1 1 0 0 1-.6-1.1q.1-.6.9-.5.9-.1.9.7 0 .5-.3.7zm89.2 0q-.3-.1-.3-.5 0-.6.8-.9.9-.5 1.2.2.5.8-.1 1.2-.2.4-.8.3-.7 0-.8-.2zm-85 1.2q-.6-.1-.6-.8 0-.4.2-.6l.6-.2.6.1q.8.6.3 1.2t-1.2.3zm21.8 1-.2-.3q0-.9.2-1.7 0-.7.2-1.5l.4-2.8q0-.8.2-1.4 0-1.2.2-2.2c0-.3.3-1 .6-.6q.6.8 1.4 1.5c.4.3 0 .7-.3.8q-.6.3-.5 1l-.2 1.2q0 1-.2 2l-.1 1.8-.2 1.2q.1.7-.4 1.1-.6.3-1-.1zm29.7-9.8-1.3 1.2c-.6.5.5.7.6 1.1q.3.9.2 1.8.3.9.2 1.7c0 .7-.8.5-1.2.9q-.6.4-1 1l-.4 1.6c0 .5-.3 1 0 1.4l.1.2h.5l1.5-.1q1.9-.2 3.7-.3l2.2-.2c.6.1.9-.5.9-1-.4-.7-.1-1.4-.4-2q-.2-1.2-.2-2.2c0-.6-.7-.8-1-.4q-.7.4-1.2.9c-.3.6.6.6.8 1l.1 1.5c.1.6-.5.6-1 .7q-.9.4-1.5-.3-.2-.7-.2-1.5-.1-1.4-.3-2.7-.2-1.5-.3-3.2c0-.5-.1-1.2-.8-1.1m-.6 8.2h.3v.8l-.3.1-.4.1h-.2q-.3-.3.1-.8zm-30-9.2c-.3 0-.8.7-1.2.6-.9.1-.8 1-.1 1.3v.8c.1.8-.4 1.5-.3 2.3q-.1 1.2-.3 2.6-.4 1.4-.4 2.7c-.1.8-.7.5-1.2.3v-1q0-1.2-1.2-1.2-1-.1-.8-1.1.6-.4 1.5-.3c1 .2.9-1.1.4-1.6s-1.2-1-1.4-1.6q0-1.3-1.2-2.1c-1.1-.1-2 .8-2.3 1.8q-.8 0-1.4.4c-.7.2-1.7 1.4-.7 1.9.5.1 2.2.5 1.4 1.2q-.7 1-1.9.6c-.7 0-1.5-.4-1.5-1.2q0-1.2-.4-2.3c-.2-.8-1.1-.6-1.2.2q-1 1-.1 2 .3 1.2-.3 2.2c-.2 1-1.2 1-1.9 1.2-.3.2-1.6 0-1.1.7a4 4 0 0 0 2.4.3q1.2-.2 2-1.4c.5-.5 1.4-.2 2.2-.2.7 0 1.5.5 2.3.1.2-.5 1.2-1.5 1.5-.5q.2 1.4 1.5 1.2c.9 0 .5.6.5 1.2q.2 1.3 1.5 1.8h.8q1.2-.3 1.8-1.4.3-1.1.5-2.2.3-1.7.4-3.4.3-1.5.4-3.2l.3-2.3q0-.6-.5-.4m-6.7 4.1q.2 0 .2.5t.5.8v.3l-.8.2q-.7 0-1.2-.5l-.2-.2.3-.2.5-.5q.4-.4.7-.4m66-7.9-1.7.3c-1 0-1.5 1-.5 1.6.6 1.5 1.5-.4 2.5-.2 1.4.2 1.5 1.8 1.8 3q.1 1.6.7 3.3c1 1.1-.7 1.8-1.4 1-.6-.7-2-1.5-2.7-.6-.9.4-1 1.6-1.7 2-1.2.3-1.3-1.2-2-1.8-.6-.9-1.7-1-2.6-1.2-.4-.9-.2-2.4-1-3-.8.3-2.2 1.7-1 2.4 1 1-.5 1.4-1 2q-1.1 1.4-1 3c-1.3.7-1.5-.8-1.7-1.7 0-1.1-1-.8-1.7-.4q-1.3.8-2 2v2c.2.9 1.2.5 1.8.4 1-.4 1.4.7.6 1.3-.6.6-2.2.3-2 1.4h1.6c1-.3 2.2-1.1 2.3-2.3.2-1 1.7-.9 2.5-1.1 1-.3 2.3-.4 2.6 1 .7.7 2.2 1.5 3 .5a2 2 0 0 0 1.1-2.3c-.1-.8 1.3-.8 1.7-.3.5.8 2.1.6 2.9 0s1-1.6 2.2-1.6l5.4-1.5c1.4-.3-.2-1.2-.6-1.8-1-.5-2 1.7-3.2.6-1-.7-.9-2-1.2-3.1-.3-1.4-.2-3-1.2-4q-1-1-2.5-.9m-6.8 9.5q.2 0 .5.2.6.4.7 1 0 .2-.3.3l-.5.2q-.5-.1-.7-.5v-.4q-.3-.5 0-.6zm6.5.4q.5 0 .8.3.2.5-.4.8l-.5.2-.4-.3q-.3-.1-.3-.4.1-.5.8-.7zm-9 0q.3 0 .4.2.3.2.3.6v.6q.2.3-.6.2c-.8-.1-.7 0-.7-.6q0-.5.3-.7t.4-.2zm-5.4 1.5.4.4q0 .4-.2.6-.6.2-1 0v-.1q-.3-.2 0-.3v-.1l.2-.3a1 1 0 0 1 .6-.2m9.2 1.2.5.1v.6h-1.2l-.1-.2q0-.3.2-.4zm-17.1 4.8q-.3 0-.1-.2.3-.4.8-.6a3 3 0 0 0 1.4-1q.2-.5.4-1l-.1-1.4a2 2 0 0 0-.8-1q-.6 0-.8-.6.1-.4.4-.9l.6-1.2q.6-.3.8.2l.5 1q.4.4.6 1 .3.6.4 1l.2 1.3q0 .8-.2 1.6l-.6.8q-.4.5-1 .7-.4.3-.9.4H468zm-6.9.4q-.3-.2-.3-.6c0-.4 0-.3.3-.6q.4-.6 1.4 0t1 .1q.2-.4 1-.5l.5.2q.3.2.3.7c0 .5 0 .5-.3.8q-.3.2-.7.2a1 1 0 0 1-.8-.6q0-.4-.2-.1l-.2.1q-.4.1-.8.5l-.5.1q-.4 0-.7-.3m-19.8-8.9q-1.2.1-1.5 1.3c.2.7.8 1.5.4 2.2.3 1-.8 1.4-1.5.9q-.4-1.5-1.3-3c-.8-.2-1.1 1.1-1.7 1.6.3.7 1.1 1.4 1.2 2.3q.1 1.6-1.1 2.4c-.7.7-1.7.5-2.5.6-1 .6.7.8 1.2.8q1.6.3 3-.8c.7-.3.6-1.7 1.5-1.8l4.8.3c.8.2 2.1-.1 2.7.5 0 1 1 1.8 1.9 2.2.5.2 1-.5 1.5-.6 1-.3.7-1.5 1.3-2h5c.2 0 .3-.5.6-.7l-.2-1.9c-.3-.8 0-1.8-.5-2.5-.9-.2-1.6.5-2.4.6q-1.6.7-1.8 2.3c-.5.9-1.4-.2-1-1l-.1-1c-.5-.5-1.4-.3-2.1-.4l-3-.2q-1.5.1-2.7-.1c-1 0-1-1-1-1.8zm2 3.7 1 .1h1.3q1.5.3 3 .2.3 0 .6.4v2q0 .5-.2.8l-.2.2-.7-.5v-1.4l-.7-.3-2.6-.1-2-.1q-.5 0-.9-.4-.2-.4.4-.7zm11.3.3q.2 0 .2.3l.2.5q0 .2-.2.2-.8.3-1.2 0 0-.3.2-.6z"
          />
        </svg:g>
      </svg:g>
      <svg:path
        stroke-width="1.1"
        d="M450 327.2c32.6-25 29.8-61.8 29.8-61.8l-2.5.2c-6.9 0-23.2-4-27-8.9-4 4.5-20.8 9-27.6 9l-2.5-.3s-2.9 36.7 29.8 61.8z"
      />
      <svg:path
        stroke-width=".9"
        d="M477.2 268h-.8c-6.2 0-20.6-3.1-26.2-7.9-5.8 4.4-20.5 8-26.6 8l-.8-.1a73 73 0 0 0 2.6 18.7 71 71 0 0 0 24.6 37.1 71 71 0 0 0 24.6-37.2 73 73 0 0 0 2.6-18.6z"
      />
      <svg:path
        fill="#c09300"
        stroke="none"
        d="M439.4 265a62 62 0 0 1-16.6 3l.1 4.1a73 73 0 0 0 2.5 14.5 71 71 0 0 0 14 26.8zm20.6 0v49.2a71 71 0 0 0 14.6-27.6 73 73 0 0 0 2.5-14.5l.1-4h-.8c-3.8 0-10.4-1.2-16.4-3.2z"
      />
      <svg:g stroke-width="1.3">
        <svg:path
          stroke-width="1.2"
          d="M462.3 253c.7.1-.9-3.5-.9-3.5 1.8 1.8 8.4 2.3 8.4 2.3-4-1.8-8-15.1-7.5-25.8.4-10.6-1.5-14.8-3-16.4-2-2-8.5-3.8-12.7-4-2.5-.1-2 1.8-2 1.8-4.5-1.1-9-1.6-11-.2-1.8 1.2-2.2 7.5-.8 6.4 3.3-2.7 6.2-.2 8.2 2.7 1.8 2.5 1.7 9.7-.9 18.2a60 60 0 0 1-10 17.7c4 0 9.6-3.5 9.6-3.5l-1.3 5.5c4.2-2 7.5-5.1 7.5-5.1l4 4.2c1.3-1.8 4-4.2 4-4.2s3.3 3.5 8.4 4z"
        />
        <svg:path
          fill="none"
          d="M446.1 227.6s-2.2 16.4-6.4 21m10-21.5s-1 16.7-3.8 22m6.9-21.3s0 18.2 1 21.3m3-20.4s.8 15.3 4.6 20.8"
        />
        <svg:path
          fill="#c09300"
          stroke-width=".3"
          d="M442 219.6a8 8 0 0 0-1-3.3c-2-3-4.9-5.4-8.2-2.7 0 0 1.1-3.5 3.6-3.6 1.8-.1 6.1 1.4 9.9 7.8 0 0-2.8-.6-3.5 0-1.2 1-.7 1.8-.7 1.8z"
        />
        <svg:path
          fill="#c09300"
          stroke-width=".3"
          d="M432.4 209.3q.4-1.6 1.3-2.1c2-1.4 6.4-1 10.9.2 0 0-.4-1.9 2-1.8 4.2.2 10.6 2 12.6 4a8 8 0 0 1 1.5 2.4c-1-1.4-3.8-1.3-4.5-1.2-1 .1-1.7 0-3.1.4q-1.2.3-2.3.8c-.4.4-.8 1.6-1.4 1.6-1 0-1-.2-1.3-.5q-.4-1-.9-1-1.6.2-5-2.5c-2.3-1.8-3.2-2.2-6-2-3 .2-3.8 1.9-3.8 1.9z"
        />
        <svg:circle cx="448.8" cy="210.7" r="1.2" stroke="none" />
      </svg:g>
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
export class SiEgFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
