import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-brenntag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Brenntag</svg:title>
    <svg:path
      d="M19.7305 12.01c-.768.959-1.899 1.8775-3.2745 2.421.828 1.02 1.246 2.156.9445 3.337-.2875 1.1275-1.3655 2.228-2.9 2.228H6.5v-5.999h7c3.86 0 7-3.1395 7-6.9985S17.36 0 13.5 0h-11v8.998h4V3.999h7c1.655 0 3 1.3445 3 2.9995s-1.345 2.9995-3 2.9995h-11V24h12c3.86 0 7-3.1395 7-6.9985 0-1.712-.4815-3.634-1.7695-4.9915"
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
export class SiBrenntagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#1A0033');
}
