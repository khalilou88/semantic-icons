import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-helicopter-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M128 32c0-17.7 14.3-32 32-32L544 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L384 64l0 64 32 0c88.4 0 160 71.6 160 160l0 64c0 17.7-14.3 32-32 32l-160 0-64 0c-20.1 0-39.1-9.5-51.2-25.6l-71.4-95.2c-3.5-4.7-8.3-8.3-13.7-10.5L47.2 198.1c-9.5-3.8-16.7-12-19.2-22L5 83.9C2.4 73.8 10.1 64 20.5 64L48 64c10.1 0 19.6 4.7 25.6 12.8L112 128l208 0 0-64L160 64c-17.7 0-32-14.3-32-32zM384 320l128 0 0-32c0-53-43-96-96-96l-32 0 0 128zM630.6 425.4c12.5 12.5 12.5 32.8 0 45.3l-3.9 3.9c-24 24-56.6 37.5-90.5 37.5L256 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l280.2 0c17 0 33.3-6.7 45.3-18.7l3.9-3.9c12.5-12.5 32.8-12.5 45.3 0z"
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
export class SiHelicopterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 512');
}
