import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-square-pied-piper-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M32 419L0 479.2l.8-328C.8 85.3 54 32 120 32h327.2c-93 28.9-189.9 94.2-253.9 168.6C122.7 282 82.6 338 32 419M448 32S305.2 98.8 261.6 199.1c-23.2 53.6-28.9 118.1-71 158.6-28.9 27.8-69.8 38.2-105.3 56.3-23.2 12-66.4 40.5-84.9 66h328.4c66 0 119.3-53.3 119.3-119.2-.1 0-.1-328.8-.1-328.8z"
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
export class SiSquarePiedPiperIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
