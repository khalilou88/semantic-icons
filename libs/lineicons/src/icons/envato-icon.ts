import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-envato-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.9159 22C13.4095 22 13.8096 21.5999 13.8096 21.1064C13.8096 20.6128 13.4095 20.2127 12.9159 20.2127C12.4224 20.2127 12.0223 20.6128 12.0223 21.1064C12.0223 21.5999 12.4224 22 12.9159 22Z"
      fill="#323544"
    />
    <svg:path
      d="M18.053 15.0134L13.013 15.5539C12.9192 15.5633 12.8724 15.4477 12.9473 15.3883L17.878 11.5482C18.1967 11.2857 18.4029 10.8795 18.3154 10.4421C18.2279 9.77341 17.6749 9.33596 16.975 9.42345L11.6163 10.2077C11.5225 10.2202 11.4725 10.1015 11.5475 10.0421L16.8594 5.98639C17.9061 5.17086 17.9936 3.57107 17.0343 2.63993C16.1626 1.76817 14.7627 1.79629 13.891 2.66805L5.33268 11.3763C5.01397 11.7263 4.86712 12.1919 4.95461 12.6855C5.10146 13.4729 5.88574 13.9947 6.67314 13.851L11.2882 12.9105C11.3882 12.8886 11.4413 13.023 11.3569 13.0792L6.23882 16.3569C5.59828 16.7631 5.30769 17.4912 5.51079 18.2192C5.71389 19.1785 6.67626 19.7315 7.6074 19.5003L15.2596 17.6162C15.347 17.5943 15.4095 17.6943 15.3533 17.763L14.1597 19.2378C13.841 19.644 14.3628 20.1971 14.8002 19.8784L18.731 16.6475C19.4309 16.0664 18.9653 14.929 18.0623 15.0165L18.053 15.0134Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEnvatoIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
