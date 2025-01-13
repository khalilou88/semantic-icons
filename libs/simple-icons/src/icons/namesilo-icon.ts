import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-namesilo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>NameSilo</svg:title>
    <svg:path
      d="M4.65 0A4.65 4.65 0 0 0 0 4.65v14.7A4.65 4.65 0 0 0 4.65 24h14.7A4.65 4.65 0 0 0 24 19.35V4.65A4.65 4.65 0 0 0 19.35 0Zm7.21 4.2 4.64 3.048V8.86h-.006c-.124.4-2.156.718-4.644.718S7.33 9.26 7.206 8.86H7.2V7.248ZM7.2 9.384c0 .5 2.082.906 4.65.906 2.568 0 4.65-.406 4.65-.906v2.587c0 .5-2.082.905-4.65.905-2.568 0-4.65-.405-4.65-.905zm0 3.3c0 .5 2.082.906 4.65.906 2.568 0 4.65-.405 4.65-.905v2.586c0 .5-2.082.906-4.65.906-2.568 0-4.65-.406-4.65-.906zm0 3.301c0 .5 2.082.906 4.65.906 2.568 0 4.65-.406 4.65-.906v2.587c0 .5-2.082.906-4.65.906-2.568 0-4.65-.406-4.65-.906z"
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
export class SiNamesiloIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#031B4E');
}
