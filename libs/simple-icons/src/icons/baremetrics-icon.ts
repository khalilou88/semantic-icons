import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-baremetrics-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Baremetrics</svg:title>
    <svg:path
      d="M22.109 7.951l1.485 2.464a3.507 3.507 0 010 3.275l-4.505 7.717a3.333 3.333 0 01-2.94 1.793H7.83a3.335 3.335 0 01-2.94-1.793l-1.555-2.632 6.139-5.695 4.447 2.578a1.093 1.093 0 001.456-.198zm-13.39.628L1.99 16.15.406 13.725a3.495 3.495 0 010-3.27L5.158 2.59A3.338 3.338 0 018.1.8h8.008c1.228 0 2.357.687 2.942 1.79l1.616 2.722-6.017 5.592-4.432-2.574a1.098 1.098 0 00-1.499.248z"
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
export class SiBaremetricsIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#6078FF');
}
