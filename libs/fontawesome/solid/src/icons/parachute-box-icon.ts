import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-parachute-box-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M383.5 192c.3-5.3 .5-10.6 .5-16c0-51-15.9-96-40.2-127.6C319.5 16.9 288.2 0 256 0s-63.5 16.9-87.8 48.4C143.9 80 128 125 128 176c0 5.4 .2 10.7 .5 16L240 192l0 128-32 0c-7 0-13.7 1.5-19.7 4.2L68.2 192l28.3 0c-.3-5.3-.5-10.6-.5-16c0-64 22.2-121.2 57.1-159.3C62 49.3 18.6 122.6 4.2 173.6C1.5 183.1 9 192 18.9 192l6 0L165.2 346.3c-3.3 6.5-5.2 13.9-5.2 21.7l0 96c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-96c0-7.8-1.9-15.2-5.2-21.7L487.1 192l6 0c9.9 0 17.4-8.9 14.7-18.4C493.4 122.6 450 49.3 358.9 16.7C393.8 54.8 416 112.1 416 176c0 5.4-.2 10.7-.5 16l28.3 0L323.7 324.2c-6-2.7-12.7-4.2-19.7-4.2l-32 0 0-128 111.5 0z"
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
export class SiParachuteBoxIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
