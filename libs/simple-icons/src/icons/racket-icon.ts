import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-racket-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Racket</svg:title>
    <svg:path
      d="M12 0a11.95 11.95 0 0 0-4.104.721c4.872 2.556 11.316 10.893 13.547 18.686A11.957 11.957 0 0 0 24 12c0-6.627-5.373-12-12-12zM4.093 2.974A11.971 11.971 0 0 0 0 12c0 3.026 1.12 5.789 2.968 7.9 1.629-4.894 4.691-9.611 7.313-12.246-1.872-2.016-3.968-3.618-6.188-4.68zm2.276 19.625A11.947 11.947 0 0 0 12 24c2.092 0 4.059-.536 5.772-1.478-.987-4.561-2.851-8.739-5.28-12.147-2.597 2.8-5.186 7.702-6.123 12.224z"
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
export class SiRacketIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#9F1D20');
}
