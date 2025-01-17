import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-beekeeperstudio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Beekeeper Studio</svg:title>
    <svg:path
      d="M21.0092 4.6236 13.8544.5046c-1.1652-.6728-2.5929-.6728-3.7416 0L8.242 1.5877v10.4205c0 1.3292.7057 2.5764 1.8708 3.2492.5744.3282 1.2308.5088 1.8708.5088s1.2964-.1641 1.8708-.5088c1.165-.6728 1.8707-1.9036 1.8707-3.2492 0-1.3292-.7056-2.5764-1.8707-3.2492-.5744-.3282-1.2308-.5087-1.8708-.5087V5.9036c.64 0 1.2964.164 1.8708.5087l2.0348 1.1815c1.1652.6729 1.8708 1.9036 1.8708 3.2493v2.3466c0 1.3293-.7056 2.5765-1.8708 3.2493l-2.0348 1.1815c-.5744.3282-1.2308.5087-1.8708.5087s-1.2964-.164-1.8708-.5087L8.078 16.439c-1.165-.6728-1.8707-1.9036-1.8707-3.2492V2.7528L2.9744 4.6236c-1.1652.6728-1.8708 1.9036-1.8708 3.2492v8.2544c0 1.3292.7056 2.5764 1.8708 3.2492l7.1548 4.119c1.1652.6728 2.5928.6728 3.7416 0l7.1548-4.119c1.1652-.6728 1.8708-1.9036 1.8708-3.2492V7.8728a3.8203 3.8203 0 0 0-1.8872-3.2492ZM9.6862 9.0544c-.2134.164-.3939.3446-.558.5415V6.9703l.558-.3283v2.4124Zm1.4276-.6893c-.1969.0493-.3774.0985-.5579.1805v-2.363c.1805-.082.3774-.1313.558-.1805v2.363Z"
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
export class SiBeekeeperstudioIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#FAD83B');
}
