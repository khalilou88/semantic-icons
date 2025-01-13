import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vest-patches-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M151.2 69.7l55.9 167.7-11 33.1c-2.7 8.2-4.1 16.7-4.1 25.3L192 464c0 14.5 3.9 28.2 10.7 39.9C195 509 185.9 512 176 512L48 512c-26.5 0-48-21.5-48-48L0 270.5c0-9.5 2.8-18.7 8.1-26.6l47.9-71.8c5.3-7.9 8.1-17.1 8.1-26.6L64 128l0-73.7L64 48C64 21.5 85.5 0 112 0l4.5 0c.2 0 .4 0 .6 0c.4 0 .8 0 1.2 0c18.8 0 34.1 9.7 44.1 18.8C171.6 27.2 190.8 40 224 40s52.4-12.8 61.7-21.2C295.7 9.7 311 0 329.7 0c.4 0 .8 0 1.2 0c.2 0 .4 0 .6 0L336 0c26.5 0 48 21.5 48 48l0 6.3 0 73.7 0 17.5c0 9.5 2.8 18.7 8.1 26.6l47.9 71.8c5.3 7.9 8.1 17.1 8.1 26.6L448 464c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l0-168.2c0-5.2 .8-10.3 2.5-15.2L296.8 69.7C279.4 79.7 255.4 88 224 88s-55.4-8.3-72.8-18.3zM96 456a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM63.5 255.5c-4.7 4.7-4.7 12.3 0 17L79 288 63.5 303.5c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0L96 305l15.5 15.5c4.7 4.7 12.3 4.7 17 0s4.7-12.3 0-17L113 288l15.5-15.5c4.7-4.7 4.7-12.3 0-17s-12.3-4.7-17 0L96 271 80.5 255.5c-4.7-4.7-12.3-4.7-17 0zM304 280l0 8 0 32c0 8.8 7.2 16 16 16l32 0 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
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
export class SiVestPatchesIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
