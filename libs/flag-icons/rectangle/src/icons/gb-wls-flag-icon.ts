import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gb-wls-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#00ab39" d="M0 240h640v240H0z" />
    <svg:path fill="#fff" d="M0 0h640v240H0z" />
    <svg:g stroke="#000" stroke-width="1.4">
      <svg:path
        fill="#d21034"
        d="M419 70.8h-.1zm-.1 0a694 694 0 0 0-111.8 75c-17 14.9-12.2 26.7-12.9 40 .6 9-1.9 17.4-7.4 22.4l-37.8 7.6-3.6-10.4c1.1-5.4 5.5-8 14.9-4.7.7-6.8-4.9-9.6-11.3-12-2.3-1.8-5-3-4.7-9-1-13.5 20.6 1 20.8 1s-.8-13.7-10.7-16.4c-5.4-1.9-7.7-7.6-5.6-11.8 4.3-8.7 12.5.6 18.7 1-.2-5.7-1.8-9.7-6.7-14.2-2.6-1.7-9-2.9-9.2-5.6-.1-3.6 6-5.2 14.5-4.2-1.8-5.1-7.5-8.4-15.3-10.8l-4.6-8.1c-2.2-4-3.2-4.2 1.9-11.8 4.5-3 10.6-7.2 15.2-10.1l-5-.6c.6-5.5.7-7.4 2-16.5-5 6.7-11 5.5-16.6 8.2 0 0-15.6 2.8-20.7 9.5l-39.4-2c-8.4 1.1-15.5 3.5-16.9 11.6-19.1 2-39.1.3-53.7 18.5 10-.4 18.6-2.8 29.8-1.4 0 0 9.5.2 11.4 10.3.2.4 3.3.4 3.3.4l3.6 2.8 1.4-3.8 3.2 2.2 1-4.2 3.2 2.2.2-5 4.2 3v-6.7s15.6 0 20.4 10c.2.1-43.7 8-86.1 4.3l12.2-6c-15.4-3.2-30-6-43.6-16.7 5.1 19.4 31.7 42.1 37.2 42l-5.2-9.4 46 2c1.7 5.1 1 10.8 5 15.3 0 0-2.5 8.4 3.2 11.8.2.4 6.7-17 6.7-17s2 4.7 4 7.8c3-15 19.4-17.5 19.4-17.5l3.4 8c-5.1.8-11.5 11.2-8 17-3.5 0-9.6 10.1-7.7 15.6-2.9 2.9-10 6.7-8.3 18.8-5.6 1.2-9 11.5-7.2 22.5-8.8 8.1-6.6 23 1.2 29.1-3.2 3-5.2 5.1-5.2 8.7-3.1-1.1-6-.2-7.3 1.8-3.8-3.9-9.2-7.2-13-3.6-1-4.6-7-9.6-13.5-9a12 12 0 0 0-9-13s-1.5-22.6-8.3-30c-.7-4 .4-6.8 6-10.2 5.7-3 6.9-5.3 6.4-13.9 2.3-5.7 4-11.5-3-15.4.2 6.8-1.8 10-4.6 13-3.3-.4-4.4 3.4-6.6 5-3.1-4.1 6.5-10.6-.6-19.9-.4-.4-5-12-16.3-11.8 5.3 3.1 7.6 8.4 7.6 13.9a41 41 0 0 0-1.8 29.3c-4.7-7-7.4-20.4-11.3-22.7-3.4-.7-5-8.7-18.3-6.4 5.7 1.5 7.6 5.9 9 9.8-3.4 1.8-1.7 6.6.9 9.9-.5 7.7 4.1 12.2 11 15L85.6 237c-2.7-.3-7 10.4-8.6 10.7-2.7 1.7-7.4 6.2-2 7.5-1.6 5.7-3.1 9.2-11.7 10.4 0 0 9 5.4 16.6-3.8 8-.2 5.4-9.8 9.3-14 0-.3 2.3-1.7 5.5-10.2 1.4 7.6 9.2 30.8 26.7 42.3 15.3 16.4 28 31.9 27.8 53.7a54 54 0 0 0 12.3-22.7 89 89 0 0 1 30.8-3.6c-1.8 3.9-3.9 7.6-1.3 10-7.4 2.6-9 8-6 13.3-7.8 5.3-8.3 8.7-8.4 17.5-14.5 18.5-23.4 17.9-37.7 13-4.6-2.7-12-6.6-15.3-4.5-6.1-4.2-15-4.8-16.5 4.6 4.7-3.9 7.4-3.1 11.1.6-.7 1.9-1.3 3.7 1.4 4.8l-3.6 4c-6.6-1-15.6-1-17.9 8.7 3.4-2.9 11-3.5 17-.8l3.5 1.2.4 4.6s-9-1.4-11.4 13.3c8.4-9 14.4-6.7 14.4-6.7 3.3 4.8 15.3 4.1 24-3.8 12.1-6.8 15.7 3 23.5-3.4 6.5-4.8 14.2-1.6 19.5 4 6.1 2.3 12.5 4.2 17.5 0 0 0 6.2-3.9 12.3 2.4 0-7-5-10.9-11.8-11l-2-2c-6.5-1.4-13.7-.8-19.4-4a58 58 0 0 1 14.1-27c9.3-10 16.2-14.6 28-29.9-.5 8.7 6.1 18.3 9.6 27 0 0 7-11.1 8-20.3.3 0 8.9-4.4 12.5-8.3 7.8 4.9 20.4-3.8 28.6-11 5 2 8.9 1.8 14.7 0-4.7 9.6 2.7 18.5 14.5 22.2 1 8.4 9.6 10.2 22.5 10.2.6 5 8.3 5.7 8.3 5.7-5 2.2-7.4 4.5-7.3 9.6-5 0-8.7 1.3-10 7-6.9.2-13.9.7-19.8 4-6.3-.9-14-3.5-18.9-8.6-2.5-2.1-3.2-5.2-7.6-6.4-2.8-3.3-6.2-2.6-7.3.6-2.9-2.3-13.8-3.3-15.7 7 5.2-3.7 9.7-5.1 13-.5-1.8 3.1 4.2 5 9.4 6.2 3.7.2 10.2 3.6 12.2 9.2a20 20 0 0 1-16.7-2.6 11 11 0 0 0-13-.8c-4.4-2.8-14.7 2.5-15.1 10.9 4.3-4 8.3-6 12.3-3.4-2 .4-1.3.6-1 1.8l10 5.8c-5 1.3-9.6 3.3-7.4 12.5 0 0 4-8 13-5 .2-.3 1.3 2.8 3.9.7 3.9-4.4 12.8-6.4 20.7-7.2 6.3-.7 12.6-2.6 18 1 5-2.5 10.4-4.2 16-.2 6.6 2 11.4 9.8 19.7 6.3 4.2-3 9.3-3 14.5 2.8 0-7.4-5.5-9.9-13.3-11.5l-5.4-3.2c-5-.8-10 .1-15.1-2.3a92 92 0 0 0 57.7-42.4l12.5 4.4c3 .2 3.2 1.2 9.3 3 .2-8.9-3.7-18.1-19.8-19l-21-8c-4.6-4.8-6.6-14.9-.9-20.8 5.6-5 6.6-4.4 10.3-10.5 4.5-.4 8.7 4.2 12.8 4.2 2 5.9 13.4 11 20.6 9.3 4.5 4 13 6.2 22.5 3a18 18 0 0 0 20.5 3c2.2 2.2 6.8 4 12 2.8.5 0 2.8 5.8 8.5 7.9-2.5 2.4-1 13 1.7 16.9a17 17 0 0 0-.9 12.7c-5.8 3.7-7 6.5-4.4 12.8-7.6 12.3-16.7 13.7-25.3 10l-9.3-6-9.8-9.6c-1.7-1.6-5.2-2-5.9 1.4 0 0-12.6-2.8-13.7 7.9 5.3-5.1 12.7-.6 12.7-.4s-1.8 1.4-.4 3.4c.3-.3 9.3 3.3 17.2 6.7 4.3 1.7 5.3 2.2 7.2 3.2l-7.2-3.2a33 33 0 0 0-11-2.9c-4.4-.4-9.2-1-11.4 2.4-4.8 2-12.4 3.7-12 12.7 3.2-5.4 7.7-5.1 13.4-4.6l-.4 1.2c6.2 2.8 5-.8 10.8-1.3a44 44 0 0 1 15.3 2.5c-4.5 1.3-10.7.7-13.6 4-.6 1-2.5.6-1.6 3.2 0 0-9-.2-11.3 12 9-5.7 15.9-5.5 16-5.5l2.9.6 11-7.3c.3 0 10.6-4.6 15.3.6 4.2 2 8.6 2.2 13-.4 8.4-3.7 16.3-4 24 1.2l7.1 4.2 3-2s8-2.2 13.8 4.9c-2.4-12.3-11.2-12.7-11.2-12.7l-2-1.8-12.4-4.9c-1.9-4.5-6.4-8-1.9-13.4 4.7-23.1 10.2-40.4 1.2-63.8 8.4 3.6 14.7 14.8 25.2 10.9 0-9.4-34.6-27.3-61-41.6C508 264 560 232.1 540 191.5l9.4-29.4c4.5 9 13.5 15.8 21.6 18.7-6.7-12.7-10.5-51.6-6.7-78.4a627 627 0 0 1-57.1 60c10 2.4 18.9.7 28.6-.5l-8.2 17c-26.6-15.7-57.8-4-58 16.8.9 24.2 30.8 27.7 48.1 19.2-3.4 22.1-54.2 14-54.2 14-18-6.2-35.1-5.2-54-5 3.9-12.1 25.7-22.9 42.4-18.1-23.3-26.2 3.3-58.7 35.4-68.6-35-11.6-4.9-38.3 21.3-57.4 0 0-75.3 31.7-82.2 31.6-21.4-1.6-15.6-27-7.4-40.6zm-236.4 30.4q2.8 0 5.5.6c3.4.9 7.5 1.3 7.5 2.4-1.6 2.6-5.5 5.7-9.3 5.6s-6-2.5-7.2-8.2q.8-.4 3.5-.4zm317 89.4c5 0 10.9 2 16.6 8.2-2.7 8-26.8 12-28.4.2-.5-3.6 4.6-8.3 11.8-8.4z"
      />
      <svg:path
        fill="none"
        stroke-linejoin="round"
        d="m207.4 171.2 3.7 5.3m-.2.1s0 7.2 1.5 7.3m-3.3 3.9 3.8 6.3m-10.5 1.6c.2 0 4.7 5.2 4.7 5.2m3.9-4c0 .2 4.2 8.1 4.5 8.1m-10-2.6s1.4 9.6 2.7 9.3m-9 8.3 4.2 6.5m3.7-13.3s2.3 9.1 4.1 8.3m1.9-13.8c.1.2 4.3 6.1 5.4 5.3m-1 2.3 4 8m-10.6-1.8 3.3 9.4m-11-4.6s3 10.1 5.7 8.5m-6.8 5s.2 5.3 2.8 5.6m1.8-8.3c0 .2 2.7 3.8 2.7 3.8m5-10.1 2.1 3.5m4.9-10 3.3 4.1M206 176.7c.1 4.5 7.2-1.6 10-5.4m-13 21s7.7-5.5 13.7-13.8m-16.3 26.9c5.5-1.5 15.6-13.7 17.6-20.2m-18.7 32.3c1.5.7 20.3-13 20.8-22.9M198.8 228c0-.1 17.2-4.4 24.3-23.3M198 242.3s27.5-16.5 29-28.6M412.4 270s-1.8 14.2-16 16.4m20.5 9c.1-.2 13.6-15 10.1-19.5m21.1 5.2s-.2 10.3-8.6 17.4m25.4-14.4s.3 12.4-5 17.4m20.4-10s-6 11.7-8.1 12.9m7.9 7.8s7.8 2 10.3-3.2m-8.3 20.1s7.2 1.3 10.6-5.6m-11.4 18.7s5.9 5 9.9-1.6m-94-94.4s-.7 25.3 34.8 30.4c39.7 11 58.5 5.2 60.8 49.7-1.5 17-3.6 36-16 28.7m-117.4-85.5s5.7 10.1 12.5 9.4c9-2.6 12.3 2.9 12.3 2.9m-49-2.2s15 7.3 27.7-4.5m-26-6c1.3 17.5-20.1 27.5-28.6 25.8m29.6 41c.1 0 11.6-6.8 9.3-11.6m-32.1 1.5c.3-.4 19.3-2.2 22.8-9m-31.6-19s26.9.2 28.7 5.1m7-21s-26.2 44.9 22.2 44.9m-50-45.5s-5.6 16.7-13.6 22.4m-14.2-28.2s9.7 18.8 0 28.1M261 280.8c.1.3 3.1 26.7-3.5 34.2m-9.2-33.4s1 16.8-4 22.8 1.2 18.4 1.2 18.4m-60.5 8s3.6 6.3 8.5 4.1m-2.5-17.8s8 3.5 10.7 2.2m-2-30.4s-11.8 3.3-7.3 17.3c6.8 5.5 13.4 4.6 13.4 4.6m-29.4 37.4c-.1 0 1.4 11 9 2.7 5.3-11.2 22-42.6 25.9-53.4m7.8-5.1s-8.1-6.3-7.8 2.5c-.2 5.5 2.5 6.8 2.5 6.8.3 4 3.8 9.6 6.6 4.5 1.2-5-.8-7.2-.8-7.2m4.7-9c-7.3-.4-11.3 15.7 2.8 5.6m4.8-11s-1.8 2.5-4.7-.2c-1.5-2.6-6.8 12 2.5 12.5 1.7-4.3 6.8-5.5 6.8-5.5m4.4-13.8s-4.2 2-5.7 1.7c-5 1.1-4 12.8 2.3 12.1 2.2-2.5 4.5-6 4.5-6m-40.3-23c-.2 0-16.5 25.7 9.1 32.5m198-71s-10 8.4-.7 22c-31-.5-47.5 13.8-48.8 23.4-39.4-2.8-32.2 8.8-45 12.6-17.1-14.3-42.2-6.3-40.6 8-11.4-16.1-29-8.3-31.2-4.3s-1.3-19.8-1.3-19.8-11.5 5.2-19.4 14.6v-19.9c-9.6 2-18.9 2-28.8 1.8m-25.9-7.3s14.3 8 32-2.8M166 226.3s11 10 32 6.8m-25-29.7s2.4 8.1 26.3 8.6M181 184.6s9 11 21.2 9.3m-13.5-25s3.5 6 16.8 7m-9-24.5s7 7.6 15 6.3M238 89.3s3.1-3 8.3-1.5m-10.5 17.8s-9.6-.3-9-4c.8-4.4 10.2-7.5 10.2-7.5s12.5-8 14.4-10.8m-56.6 44 12.2 23.3 5.8-8.8 3 6 5-8.7 8.6 5.5-3.2-10.7 7.2-.5s-2-5.1-8.4-6.2c1.7-1.3 7.7-5.3 7.7-5.3s-3.4-4-8.8-4.1c1.8-1.9 4.2-6.5 4-6.5l-5.3-1.2s12.2 4 21.6-1.6M221 89.7c.1.1-.7 4.8-3.3 7.5m-43.7 5.3s7.5-2 13.1-.9 13.1 3.2 13.1 3.2 9-1.2 11.9-3.3m-56.8 6s-1 3.6-1.4 6c0 1.7-5.5 4-5.5 4m10.3-17.4s4.8 6 5 9.5c.1 3.4-3.6 6-3.6 6M109 141l-5-8 4.5-1.6m90.5 121c-4-5.2 3-84.2 17.7-104.8-5.1 37.2 12 75.2 16.3 75m-79-97s6.8 2.5 20.7-8.6m18.9 26.8 10 .1m300.3-62s-166.7 77.8-169.1 82c28.1-8.6 147.5-28.5 150.4-26.8-7 1.7-151.9 35-158.7 43 36.2-1.2 111.9 11.6 123.8 24C424.5 198.3 347.6 187 324 192c17.2 4.1 83.2 46.8 83.2 53.6-10-9.5-89.3-42.2-92.4-39 18.2 10.9 43.9 51.4 43.9 61.3-5.3-8.4-51.2-57.7-53.9-54.5 4.9 6.7 14.5 64.9 9.6 67.6 0-7-17.8-58-19.3-59.4-3.6 1-26.3 62-21.8 67.8-3-20.4.5-63 6-61.3-10 1.5-41.7 43.4-38.3 50 1-10.5 2.4-17.4 20.4-52.1-20 1.2-61.2 27.1-68.2 36.4 5.6-16.5 40.5-44.4 55.8-46.4m72-60.7c17.6-9.8 72-29.7 108.4-44.4m-142.6 97s12-.2 24-32.8c11.8-44.6 105.7-94.3 107.6-103.6M128 252.8s-2.8 6-6.2 7.6m19.7 1.4s-3.7 7.2-4.6 10.6m17.5-7s3 9.8.5 14.4m-36.4-40.1c-9.4 5.3 5.4 39 50.1 42.2m-7.2-18.2s-1.2 6 7.2 18c-2.4 13.4 10.2 23.9 15.2 25.6m-26-164.2 1.4-3.6 1.5 4 2.5-.1 1.6-4 1.4 4h2.4l1.5-4.4 2.3 4.2h2l1.5-5 3 3.6 1.2-.4 1-5.2 3.1 3.6 1-.5 1.4-5 2.5 3.7 1.3-.4 1.2-4.3 2.4 4m-39 6.2 18.8-.3c6 0 15.8-8.3 26.7-5.7m-84.9 46s3.1 6.8 7.4 3m-14.6 1.5s-6 16.2 1.2 20m-9.8-37.8s0 3.8 8-2m-32.5 86.7s6.3 2 5.3 6.7m-3-80.8s4 1.9 7.8-4m34.2 189.7c6.1-.4 7.5 2.4 13 2.4 6.6.2 12.9-2.4 21-4.7m53.1 15c-.2 0-3 5.8-.5 8.7m-87.5-8.2s9.8-8 15-3.1c4.9 1.7 7.6 1.4 7.6 1.4m-17.5-21.3s2.4 6.2-5.6 5.3m-2.4 9s5.1 3.2-.7 7.5m3.8 5.8s7 1 2.9 6.7M346 341.6s19 2 20 3.4c2.2-2.3 19.2-16.2-1.7-18.1a19 19 0 0 1-18.3 14.7zm-6.8 9.5c7.1 5.7 4.2 9.1 26.6-5.9m-36.8 13s10.5 11.4 18.2-2.4m-38.3 6.5-14.3 7.5M269 380.3s8.7-7.4 12.7-3.5 21.3-3.4 21.3-3.4M275.5 348s3 6-2.8 6.7m-8.5 11.9s3 5.6-2.8 7m9.5 8.1s9 .5 5.8 7.3m78.4-8.5s-5 4.2-1.3 9m73-39s5.7 2.8-1.1 7.5m-5.7 9.9s4.3 4.5 1.4 8.2m10.6 9s5.9 1.7 5.2 6.6m77.8-11s-5 3.7-2.3 8.4M427 236.3c11.8-1.4 28.8 25 37.5 30.1m51.9-67.4s6 5.3.7 18m10.4-38.2c1.7 1.3 8.1 4.8 12.4 12.8m4.1-52.2-8.3 22.5m17.6-23.6s-1.6 20-4 24M516 198.8c-2.7 8-26.8 12-28.4.2-.9-6 14.2-15.3 28.4-.2z"
      />
      <svg:path
        stroke-linejoin="round"
        d="m182.3 101.3 9.3 1.7s-6.5 8.8-9.3-1.7z"
      />
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
export class SiGbWlsFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
