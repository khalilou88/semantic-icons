import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lemon-squeezy-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.63347 14.2751L14.9987 16.7557C15.6637 17.0632 16.1331 17.5795 16.3866 18.1716C17.0277 19.6711 16.1514 21.2047 14.7758 21.7563C13.4 22.3076 11.9337 21.9528 11.267 20.3934L8.93201 14.9187C8.75107 14.4944 9.2056 14.0774 9.63347 14.2751Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.95438 12.6701L15.4927 10.5765C17.3334 9.88075 19.344 11.1973 19.3169 13.1101C19.3165 13.1351 19.316 13.1601 19.3154 13.1853C19.2756 15.048 17.3209 16.3 15.5207 15.641L9.95962 13.6056C9.51602 13.4433 9.51274 12.837 9.95438 12.6701Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.64363 11.9446L15.088 9.63126C16.8972 8.86244 17.3563 6.55499 15.9394 5.22175C15.9208 5.2042 15.9022 5.18685 15.8835 5.1695C14.4942 3.88006 12.1978 4.33406 11.4069 6.03244L8.9638 11.2797C8.76887 11.6981 9.20942 12.1291 9.64363 11.9446Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.24325 11.0305L10.2227 5.60298C10.4681 4.93002 10.4226 4.24373 10.1689 3.65158C9.52644 2.1527 7.78653 1.66887 6.41113 2.22124C5.03594 2.77383 4.25886 4.02879 4.9269 5.58754L7.27714 11.0563C7.4594 11.4801 8.08548 11.4633 8.24325 11.0305Z"
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
export class SiLemonSqueezyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
