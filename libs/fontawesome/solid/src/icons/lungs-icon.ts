import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lungs-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M320 0c17.7 0 32 14.3 32 32l0 132.1c0 16.4 8.4 31.7 22.2 40.5l9.8 6.2 0-45.5C384 127 415 96 453.3 96c21.7 0 42.8 10.2 55.8 28.8c15.4 22.1 44.3 65.4 71 116.9c26.5 50.9 52.4 112.5 59.6 170.3c.2 1.3 .2 2.6 .2 4l0 7c0 49.1-39.8 89-89 89c-7.3 0-14.5-.9-21.6-2.7l-72.7-18.2C414 480.5 384 442.1 384 398l0-73 90.5 57.6c7.5 4.7 17.3 2.5 22.1-4.9s2.5-17.3-4.9-22.1L384 287.1l0-.4-44.1-28.1c-7.3-4.6-13.9-10.1-19.9-16.1c-5.9 6-12.6 11.5-19.9 16.1L256 286.7 161.2 347l-13.5 8.6c0 0 0 0-.1 0c-7.4 4.8-9.6 14.6-4.8 22.1c4.7 7.5 14.6 9.7 22.1 4.9l91.1-58 0 73.4c0 44.1-30 82.5-72.7 93.1l-72.7 18.2c-7.1 1.8-14.3 2.7-21.6 2.7c-49.1 0-89-39.8-89-89l0-7c0-1.3 .1-2.7 .2-4c7.2-57.9 33.1-119.4 59.6-170.3c26.8-51.5 55.6-94.8 71-116.9c13-18.6 34-28.8 55.8-28.8C225 96 256 127 256 165.3l0 45.5 9.8-6.2c13.8-8.8 22.2-24.1 22.2-40.5L288 32c0-17.7 14.3-32 32-32z"
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
export class SiLungsIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
