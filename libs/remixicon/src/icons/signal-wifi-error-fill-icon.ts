import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-signal-wifi-error-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0005 3C16.2849 3 20.2196 4.49683 23.3104 6.99607L22.4989 8H18.0005L17.9999 13.571L12.0005 21L0.689941 6.99671C3.78078 4.49709 7.71583 3 12.0005 3ZM22.0005 19V21H20.0005V19H22.0005ZM22.0005 10V17H20.0005V10H22.0005Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSignalWifiErrorFillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
