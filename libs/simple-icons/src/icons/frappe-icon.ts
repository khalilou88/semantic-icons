import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-frappe-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Frappe</svg:title>
    <svg:path
      d="M2.88 0C1.29 0 0 1.29 0 2.88v18.24C0 22.71 1.29 24 2.88 24h18.24c1.59 0 2.88-1.29 2.88-2.88V2.88C24 1.29 22.71 0 21.12 0H2.88zM8.4 6h8.024v2.111H8.4V6zm0 5.385h7.49v2.113h-4.93V18H8.4v-6.615z"
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
export class SiFrappeIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0089FF');
}
