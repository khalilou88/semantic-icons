import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-document-currency-bangladeshi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M2.5 3.5A1.5 1.5 0 0 1 4 2h4.879a1.5 1.5 0 0 1 1.06.44l3.122 3.12a1.5 1.5 0 0 1 .439 1.061V12.5A1.5 1.5 0 0 1 12 14H4a1.5 1.5 0 0 1-1.5-1.5v-9ZM6 5.207a.75.75 0 0 1-.585-1.378A1.441 1.441 0 0 1 7.5 5.118V6h3.75a.75.75 0 0 1 0 1.5H7.5v3.25c0 .212.089.39.2.49.098.092.206.12.33.085.6-.167 1.151-.449 1.63-.821H9.5a.75.75 0 1 1 0-1.5h1.858a.75.75 0 0 1 .628 1.16 6.26 6.26 0 0 1-3.552 2.606 1.825 1.825 0 0 1-1.75-.425A2.17 2.17 0 0 1 6 10.75V7.5H4.75a.75.75 0 0 1 0-1.5H6v-.793Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    'aria-hidden': 'true',
    'data-slot': 'icon',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDocumentCurrencyBangladeshiIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
