import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-medusa-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Medusa</svg:title>
    <svg:path
      d="M20.325 3.8958 14.8913.7692a5.7283 5.7283 0 0 0-5.7342 0L3.6983 3.8958C1.9455 4.9213.8437 6.8223.8437 8.8484v6.2783c0 2.051 1.1018 3.927 2.8546 4.9526l5.4337 3.1515a5.7283 5.7283 0 0 0 5.7343 0l5.4338-3.1515c1.7778-1.0256 2.8545-2.9015 2.8545-4.9526V8.8484c.0501-2.026-1.0517-3.927-2.8296-4.9526Zm-8.3133 13.6821c-3.08 0-5.584-2.5013-5.584-5.5778 0-3.0767 2.504-5.578 5.584-5.578 3.08 0 5.609 2.5013 5.609 5.578 0 3.0765-2.504 5.5778-5.609 5.5778z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMedusaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
