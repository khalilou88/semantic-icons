import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cent-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M224 0c17.7 0 32 14.3 32 32l0 34.7c30.9 5.2 59.2 17.7 83.2 35.8c14.1 10.6 17 30.7 6.4 44.8s-30.7 17-44.8 6.4C279.4 137.5 252.9 128 224 128c-70.7 0-128 57.3-128 128s57.3 128 128 128c28.9 0 55.4-9.5 76.8-25.6c14.1-10.6 34.2-7.8 44.8 6.4s7.8 34.2-6.4 44.8c-24 18-52.4 30.6-83.2 35.8l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C101.2 430.1 32 351.1 32 256s69.2-174.1 160-189.3L192 32c0-17.7 14.3-32 32-32z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCentSignIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 384 512');
}
