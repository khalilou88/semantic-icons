import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-network-wifi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 4C7.7 4 3.78 5.6.79 8.24.35 8.63.32 9.3.73 9.71l10.56 10.58c.39.39 1.02.39 1.42 0L23.27 9.71c.41-.41.38-1.08-.06-1.47A16.871 16.871 0 0 0 12 4zm0 4c-2.86 0-5.5.94-7.65 2.51L2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-1.43 1.43A12.99 12.99 0 0 0 12 8z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNetworkWifiIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
