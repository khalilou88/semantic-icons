import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-radar-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.3685 4.39807L10.8842 10.433L12.6163 11.433L16.1006 5.39807C20.27 8.17002 22.4058 12.4771 20.6605 15.5C18.8003 18.7221 13.4717 18.8551 8.75027 16.1292C4.0289 13.4033 1.47976 8.72208 3.34002 5.50001C5.08527 2.47715 9.88324 2.17321 14.3685 4.39807ZM15.8842 1.77277L17.6163 2.77277L16.1163 5.37084L14.3842 4.37084L15.8842 1.77277ZM6.73233 20H17.0003V22H5.01761C4.94008 22.0014 4.86194 21.9938 4.78481 21.9768C4.77025 21.9735 4.7558 21.97 4.74147 21.9662C4.6589 21.944 4.57784 21.9108 4.50028 21.866C4.47106 21.8492 4.44301 21.831 4.41616 21.8118C4.30161 21.7292 4.20524 21.623 4.1342 21.5003C4.06328 21.3772 4.01939 21.2404 4.00518 21.0997C4.00446 21.0924 4.00381 21.085 4.00325 21.0777C3.98786 20.883 4.02924 20.6819 4.13425 20.5L6.38425 16.6029L8.1163 17.6029L6.73233 20Z"
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
export class SiRadarFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
