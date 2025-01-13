import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-suse-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M593.1 192.6A10.4 10.4 0 1 1 604.5 210a10.4 10.4 0 1 1 -11.4-17.4zm-47.1 12.2a38.5 38.5 0 1 1 75-17.6 38.5 38.5 0 1 1 -75 17.6zM433.7 336.7c3.2 4.6 5.8 9 7.3 13.4c1 3.1 2.4 7.3 5.5 8.9c.2 .1 .3 .2 .5 .2c5.7 2.1 20.3 1.7 20.3 1.7h26.8c2.3 0 22.4 0 21.9-2.3c-2.4-10.8-14.9-12.7-24.4-18.3c-8.7-5.2-17-11.1-20.8-21.3c-2-5.2-.8-17.4 2.6-21.8c2.5-3.2 6.1-5.3 10-6.2c4.3-.9 8.8-.1 13.1 .3c5.3 .5 10.6 1.5 15.9 2.2c10.3 1.3 20.6 1.9 31 1.6c17.1-.5 34.2-3.2 50.4-8.7c11.3-3.8 22.4-8.9 32-16.1c10.9-8.1 8.1-7.4-3-6.2c-13.3 1.4-26.6 1.6-39.9 .8c-12.4-.7-24.7-2.2-35.9-7.9c-8.8-4.6-16.4-9.1-23.4-16.2c-1-1.1-1.7-4.2 .2-6.2c1.9-1.9 5.8-.8 7 .2c12.2 10.2 30.5 18.6 49.3 19.5c10.2 .5 20.1 .7 30.4 .3c5.1-.2 12.8-.2 17.9-.3c2.6 0 9.8 .7 11.2-2.1c.4-.8 .4-1.8 .3-2.7c-1.5-40.9-4.5-86.9-47.3-106.5c-31.9-14.6-79.7-37.2-99.9-46.6c-4.7-2.2-10.2 1.3-10.2 6.5c0 13.6 .7 33.3 .7 51.1c-9.7-9.9-26-16.1-38.4-21.8c-14.1-6.5-28.7-12-43.5-16.6c-29.8-9.2-60.7-14.9-91.7-18c-35.2-3.5-71-1.8-105.7 5.3C147 115.1 90.8 142.6 48.2 182.7C22.1 207.3 1.6 242.4 .2 277.9c-2 50.3 12.1 77.3 38 105.2c41.3 44.4 130.2 50.6 166.2-2c16.2-23.7 19.7-55.8 8-82c-11.8-26.2-38.8-45.1-67.4-46c-22.2-.7-45.9 10.6-54.5 31.1c-6.5 15.7-2.8 35.1 9 47.3c4.6 4.8 10.9 8.7 17.7 7.1c4-.9 7.4-3.9 8-8c.9-6-4.4-9.9-7.6-14.5c-5.8-8.3-4.7-20.9 2.7-27.9c6.2-6 15.3-7.8 23.9-7.7c8 0 16.2 1.4 23.1 5.5c9.7 5.7 16.2 16.2 18.4 27.2c6.7 33-20.2 59.9-56.6 62c-18.6 1.1-37.6-3.8-52.1-15.5C40.1 329.9 31.1 269.4 73.2 237c40-30.7 90.4-22.8 120.2-6.8c23.8 12.8 41.5 33.6 55 56.7c6.7 11.6 12.5 23.7 17.8 36.1c5.1 11.8 9.9 23.8 20.2 32.5c6.8 5.8 15.2 5.6 24.1 5.6h50.8c6.9 0 5.2-4.6 2.2-7.7c-6.7-6.9-16.4-8.4-25.4-10.9c-20.5-5.6-18.4-32.8-12.7-32.8c18.3 0 18.9 .6 34.9 .3c23.2-.3 30.2-1.7 48.3 5c9.7 3.6 19 13.1 25.1 21.7z"
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
export class SiSuseIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
