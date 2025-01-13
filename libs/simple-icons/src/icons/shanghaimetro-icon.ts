import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shanghaimetro-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Shanghai Metro</svg:title>
    <svg:path
      d="M20.383 11.664h-1.716l-3.432-4.487-3.073 3.606L9.31 7.177l-3.513 4.487H3.63c.185-4.464 3.872-8.047 8.383-8.047 3.953 0 7.27 2.748 8.15 6.424h3.687C22.91 4.359 17.96.01 12 .01c-6.632 0-12 5.369-12 12 0 1.102.15 2.169.429 3.177h6.516l2.412-2.55 2.805 3.478 2.945-3.502 1.902 2.61h2.69c-1.287 2.967-4.256 5.495-7.699 5.495-2.84 0-5.357-1.681-6.875-3.942H.997C2.852 21.02 7.072 23.988 12 23.988c6.632 0 12-5.368 12-12 0-.116 0-.231-.012-.347l-3.605.023Z"
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
export class SiShanghaimetroIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#EC1C24');
}
