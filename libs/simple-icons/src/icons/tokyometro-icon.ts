import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tokyometro-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Tokyo Metro</svg:title>
    <svg:path
      d="M11.9832 18.2104c2.86.006 4.04-.949 4.043-2.392.003-1.7021-1.694-3.7822-2.923-5.0732 2.318-2.082 5.3251-3.622 6.5082-2.432 1.367 1.367.02 5.418-3.2131 9.8922l4.26 1.222c3.6132-6.4301 4.3802-12.7603 1.8901-14.4733-1.946-1.329-6.8521 1.337-10.5502 4.721-3.6871-3.398-8.5802-6.08-10.5323-4.759-2.5 1.704-1.748 8.0372 1.841 14.4803l4.2662-1.207C4.35 13.7033 3.02 9.6482 4.393 8.285c1.184-1.185 4.1861.365 6.5002 2.4561-1.237 1.286-2.9431 3.36-2.9451 5.0621-.003 1.444 1.176 2.402 4.035 2.408zm.004-2.34c-.947-.001-1.745-.242-1.743-1.0501 0-.748.637-1.88 1.75-3.106 1.11 1.23 1.739 2.364 1.738 3.113-.001.807-.8 1.045-1.745 1.044z"
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
export class SiTokyometroIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#149DD3');
}
