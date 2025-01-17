import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-elgato-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Elgato</svg:title>
    <svg:path
      d="m13.8818 8.3964.0261.0196 9.9494 5.7172c-.4884 2.729-1.9196 5.2223-4.0384 7.0253A11.9262 11.9262 0 0 1 12.097 24c-3.1925 0-6.1939-1.2477-8.4527-3.5144C1.3868 18.2188.1427 15.2044.1427 12c0-3.2042 1.244-6.2187 3.5015-8.4854C5.9019 1.248 8.9032 0 12.097 0c2.4394 0 4.7847.7333 6.783 2.1187 1.9526 1.354 3.4466 3.2357 4.3227 5.4422.1112.2829.2149.5736.3051.8657l-2.1255 1.2359a9.4924 9.4924 0 0 0-.2619-.8694c-1.354-3.8303-4.9813-6.4048-9.0237-6.4048C6.8171 2.3883 2.522 6.7005 2.522 12c0 5.2995 4.295 9.6115 9.5748 9.6115 2.052 0 4.0084-.6442 5.6596-1.8647 1.6172-1.1955 2.8036-2.8337 3.4309-4.7364l.0065-.0419L9.5906 8.3048v7.2256l4.0004-2.3138 2.06 1.1811-5.9962 3.4688-2.12-1.2126V7.1943l2.1174-1.2245 4.2309 2.4279-.0013-.0013"
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
export class SiElgatoIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#101010');
}
