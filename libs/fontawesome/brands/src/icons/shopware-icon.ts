import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-shopware-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M403.5 455.41A246.17 246.17 0 0 1 256 504C118.81 504 8 393 8 256 8 118.81 119 8 256 8a247.39 247.39 0 0 1 165.7 63.5 3.57 3.57 0 0 1-2.86 6.18A418.62 418.62 0 0 0 362.13 74c-129.36 0-222.4 53.47-222.4 155.35 0 109 92.13 145.88 176.83 178.73 33.64 13 65.4 25.36 87 41.59a3.58 3.58 0 0 1 0 5.72zM503 233.09a3.64 3.64 0 0 0-1.27-2.44c-51.76-43-93.62-60.48-144.48-60.48-84.13 0-80.25 52.17-80.25 53.63 0 42.6 52.06 62 112.34 84.49 31.07 11.59 63.19 23.57 92.68 39.93a3.57 3.57 0 0 0 5-1.82A249 249 0 0 0 503 233.09z"
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
export class SiShopwareIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
