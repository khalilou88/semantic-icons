import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-coder-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Coder</svg:title>
    <svg:path
      d="M10.899 3.548c-2.247 0-3.116 1.152-3.116 3.236v1.077a4.89 4.89 0 0 1 1.594-.277c.319 0 .638.03.943.103v-.598c0-.845.434-1.34 1.303-1.34h.32v-2.2Zm7.565 0v2.2h.319c.884 0 1.305.482 1.305 1.342v2.884c0 1.253.377 1.764 1.203 2.026-.826.248-1.203.773-1.203 2.026v2.141c0 .597 0 1.181-.16 1.779a4.373 4.373 0 0 1-.783 1.529 3.876 3.876 0 0 1-.695.685v.292h1.043c2.247 0 3.116-1.152 3.116-3.236v-3.264c0-.583.304-.845.796-.845H24v-2.2h-.58v-.014c-.477 0-.795-.277-.795-.846V6.785c0-2.085-.871-3.237-3.118-3.237Zm-5.363 2.813a.13.13 0 0 0-.13.13v.25c0 .072.058.13.13.13h3.219c.072 0 .144-.058.144-.13v-.25a.13.13 0 0 0-.13-.13Zm0 1.574a.13.13 0 0 0-.13.13v.249c0 .073.058.13.13.13h4.697c.073 0 .116-.072.116-.13v-.248a.13.13 0 0 0-.13-.13ZM9.406 8.94a4.864 4.864 0 0 0-4.362 2.754c-.015 0-.014.015-.03.015a4.373 4.373 0 0 0-1.564.102A4.533 4.533 0 0 0 .044 15.6a3.713 3.713 0 0 0-.044.553c0 .554.377 1.065.928 1.138a1.088 1.088 0 0 0 1.26-1.094c0-.102 0-.218.016-.32a2.31 2.31 0 0 1 1.753-1.939 2.133 2.133 0 0 1 .855-.043c.884.116 1.754-.335 2.13-1.122.276-.583.71-1.093 1.29-1.37a2.65 2.65 0 0 1 2.029-.117c.696.248 1.218.773 1.537 1.429.333.641.492 1.092 1.202 1.18.29.043 1.102.03 1.406.014.594 0 1.189.204 1.609.626a2.23 2.23 0 0 1 .565 1.065 2.209 2.209 0 0 1-.42 1.807 2.094 2.094 0 0 1-1.072.728 2.177 2.177 0 0 1-.61.074h-3.202c-.638 0-1.145-.51-1.145-1.152v-4.27a.323.323 0 0 0-.32-.32h-.449c-.884.015-1.594 1.006-1.594 2.055v3.831a2.047 2.047 0 0 0 2.044 2.056l5.102-.015a4.34 4.34 0 0 0 2.956-1.633c.725-.889 1.058-2.054.913-3.25-.232-1.85-1.652-3.393-3.478-3.743a4.04 4.04 0 0 0-1.507-.03c-.015 0-.015-.014-.03-.014-.797-1.676-2.507-2.784-4.362-2.784Zm5.102.57a.13.13 0 0 0-.116.131v.247c0 .073.058.131.13.131h2.348c.073 0 .13-.073.13-.13V9.64a.13.13 0 0 0-.13-.13Z"
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
export class SiCoderIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
