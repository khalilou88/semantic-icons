import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-thumbtack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Thumbtack</svg:title>
    <svg:path
      d="M6.18 6.38h11.69v2.68H6.17zm7.27 3.8v3.14c0 3.23-.02 3.74-.14 4.36a7.95 7.95 0 0 1-1.3 2.87c-.03 0-.78-1.35-.9-1.62-.17-.4-.3-.8-.4-1.25l-.09-.41-.02-5.78.16-.2a3.3 3.3 0 0 1 2.44-1.1zM12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Z"
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
export class SiThumbtackIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#009FD9');
}
