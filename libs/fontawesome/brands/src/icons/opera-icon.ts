import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-opera-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M313.9 32.7c-170.2 0-252.6 223.8-147.5 355.1 36.5 45.4 88.6 75.6 147.5 75.6 36.3 0 70.3-11.1 99.4-30.4-43.8 39.2-101.9 63-165.3 63-3.9 0-8 0-11.9-.3C104.6 489.6 0 381.1 0 248 0 111 111 0 248 0h.8c63.1.3 120.7 24.1 164.4 63.1-29-19.4-63.1-30.4-99.3-30.4zm101.8 397.7c-40.9 24.7-90.7 23.6-132-5.8 56.2-20.5 97.7-91.6 97.7-176.6 0-84.7-41.2-155.8-97.4-176.6 41.8-29.2 91.2-30.3 132.9-5 105.9 98.7 105.5 265.7-1.2 364z"
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
export class SiOperaIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 496 512');
}
