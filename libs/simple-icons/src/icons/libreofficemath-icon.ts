import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-libreofficemath-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>LibreOffice Math</svg:title>
    <svg:path
      d="M22 0v7l-7-7h7zm-9 0 9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zM8 17H6v1h2v-1zm5 0h-2v1h2v-1zm2.293-1.293a1 1 0 0 0 1.414-1.414l-.793-.793.793-.793a1 1 0 0 0-1.414-1.414l-.793.793-.793-.793a1 1 0 1 0-1.414 1.414l.793.793-.793.793a1 1 0 0 0 1.414 1.414l.793-.793.793.793zM18 17h-2v1h2v-1zm0-8H9.862L8 13.653 7.338 12H6v1h.662L8 16.347 10.539 10H18V9z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLibreofficemathIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#C10018');
}
