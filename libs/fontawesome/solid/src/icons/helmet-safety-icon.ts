import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-helmet-safety-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M256 32c-17.7 0-32 14.3-32 32l0 2.3 0 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288l0 64 512 0 0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1l0-99.6 0-2.3c0-17.7-14.3-32-32-32l-64 0zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6L16.6 384z"
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
export class SiHelmetSafetyIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 576 512');
}
