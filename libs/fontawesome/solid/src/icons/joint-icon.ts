import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-joint-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M448 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 11c0 55.2 21.9 108.1 60.9 147.1l21 21c9 9 14.1 21.2 14.1 33.9l0 11c0 17.7 14.3 32 32 32s32-14.3 32-32l0-11c0-29.7-11.8-58.2-32.8-79.2l-21-21C463.2 117.8 448 81.2 448 43l0-11zM576 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-11c0-55.2-21.9-108.1-60.9-147.1l-21-21c-9-9-14.1-21.2-14.1-33.9l0-11c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 11c0 29.7 11.8 58.2 32.8 79.2l21 21c27 27 42.2 63.6 42.2 101.8l0 11zM229.8 360c-4.7-2.3-10-2.7-15.2-2c-37.8 5.6-75.2 14.3-106.9 22.8C81.3 388 58.3 395.1 42 400.4c-8.2 2.7-14.7 4.9-19.2 6.5c-2.3 .8-4 1.4-5.2 1.8l-1.3 .5C6.8 412.5 0 421.4 0 432s6.8 19.5 16.3 22.7l1.3 .5c1.2 .4 3 1.1 5.2 1.8c4.5 1.6 11 3.8 19.2 6.5c16.3 5.4 39.2 12.5 65.7 19.6C160.3 497.3 228.8 512 288 512l67.3 0c4.1 0 6.3-5.1 3.6-8.3L256.5 380.8c-7.4-8.9-16.5-15.9-26.7-20.8zM445 512l19 0 51.3 0c4.1 0 6.3-5.1 3.6-8.3L416.5 380.8C401.3 362.5 378.8 352 355 352l-19 0-48 0c-1.1 0-2.3 0-3.4 0c-4.1 0-6.2 5.1-3.5 8.3L383.5 483.2C398.7 501.5 421.2 512 445 512zm-3.9-151.7L543.5 483.2c14.6 17.5 35.9 27.9 58.6 28.7c21.1-1.1 37.9-18.6 37.9-39.9l0-80c0-22.1-17.9-40-40-40l-155.3 0c-4.1 0-6.3 5.1-3.6 8.3z"
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
export class SiJointIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
