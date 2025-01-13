import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-eightsleep-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Eight Sleep</svg:title>
    <svg:path
      d="M19.847 7.28V4.105A4.104 4.104 0 0 0 15.745 0H8.258a4.104 4.104 0 0 0-4.105 4.102v3.183a4.092 4.092 0 0 0 2.415 3.738v.588a4.102 4.102 0 0 0-2.415 3.738v4.546A4.104 4.104 0 0 0 8.255 24h7.488a4.104 4.104 0 0 0 4.104-4.104v-4.553a4.102 4.102 0 0 0-2.415-3.738v-.587a4.102 4.102 0 0 0 2.415-3.738zM8.451 5.126c0-.818.662-1.482 1.48-1.483h4.133c.819 0 1.483.663 1.483 1.482v1.991c0 .819-.664 1.482-1.483 1.482H9.93a1.482 1.482 0 0 1-1.482-1.482l.003-1.99zm7.1 13.732c0 .818-.664 1.482-1.483 1.482H9.93a1.482 1.482 0 0 1-1.482-1.482v-2.752c0-.819.664-1.483 1.482-1.483h4.134c.819 0 1.483.664 1.483 1.483l.003 2.752z"
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
export class SiEightsleepIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#262729');
}
