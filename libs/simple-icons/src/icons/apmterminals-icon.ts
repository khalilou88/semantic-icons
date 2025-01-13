import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-apmterminals-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>APM Terminals</svg:title>
    <svg:path
      d="M23.8 2.95 0 16.55v4.5L24 9.32V2.95zm.2 10.1-8.87 4.21v3.68l8.87-3.4Z"
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
export class SiApmterminalsIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FF6441');
}
