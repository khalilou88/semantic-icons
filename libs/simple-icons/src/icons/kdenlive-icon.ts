import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kdenlive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Kdenlive</svg:title>
    <svg:path
      d="m8.727 1.554 2.727 4.334v16.558h1.091V5.889l2.728-4.335zm-6 4.948V9.8h7.091c.003-.83 0-1.672-.006-2.498 0-.383-.356-.732-.718-.8H2.727zm12.303.001c-.402.024-.835.41-.834.837l-.014 12.619c0 .57.767 1.065 1.207.727l8.28-6.331c.441-.335.44-1.12 0-1.455l-8.265-6.287a.553.553 0 0 0-.374-.11zM-.001 12v3.299h9.818V12zm4.363 5.497v3.3h5.455v-3.3z"
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
export class SiKdenliveIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#527EB2');
}
