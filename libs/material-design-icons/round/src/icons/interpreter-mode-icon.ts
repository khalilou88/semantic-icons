import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-interpreter-mode-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.5 16.5c-.83 0-1.5-.67-1.5-1.5v-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V15c0 .83-.67 1.5-1.5 1.5zm0 3.5c.28 0 .5-.22.5-.5v-1.04c1.51-.22 2.71-1.4 2.95-2.89.05-.3-.19-.57-.49-.57-.24 0-.45.17-.49.41-.2 1.18-1.23 2.09-2.47 2.09s-2.27-.9-2.47-2.09a.494.494 0 0 0-.49-.41c-.3 0-.54.27-.5.57.25 1.5 1.45 2.68 2.95 2.89v1.04c.01.28.23.5.51.5zM9 12c-2.21 0-4-1.79-4-4a3.999 3.999 0 0 1 5.34-3.77A5.938 5.938 0 0 0 9 8c0 1.43.5 2.74 1.34 3.77-.42.15-.87.23-1.34.23zm-1.89 1.13A4.965 4.965 0 0 0 5 17.22V20H1v-2.78c0-1.12.61-2.15 1.61-2.66 1.24-.64 2.76-1.19 4.5-1.43zM11 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm7.32 12a4.997 4.997 0 0 1-2.82-4.5c0-.89.23-1.73.64-2.45-.37-.03-.75-.05-1.14-.05-2.53 0-4.71.7-6.39 1.56A2.97 2.97 0 0 0 7 17.22V20h11.32z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInterpreterModeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
