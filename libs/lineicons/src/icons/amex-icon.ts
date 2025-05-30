import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-amex-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.90447 14.0236H4.84308L5.13438 13.0796H6.91451L7.2058 14.0236H8.98593V10.8986L10.1187 14.0236H10.9603L12.0931 10.9963V14.0236H12.9022V9.85693H11.5752L10.5395 12.6564L9.5038 9.85693H8.04732V13.8283L6.59087 9.85693H5.45803L3.90447 14.0236ZM19.9997 14.0236L18.4461 11.9403L19.9997 9.85693H18.8669L17.8312 11.0939L16.9897 9.85693H13.5912V14.0236H16.8926L17.9283 12.6564L18.964 14.0236H19.9997ZM5.9759 10.7033L6.49374 12.1356H5.45803L5.9759 10.7033ZM14.4004 10.8009H16.4718L17.3133 11.9403L16.3747 13.1773H14.4004V12.3634H16.2776V11.5171H14.4004V10.8009Z"
      fill="#323544"
    />
    <svg:path
      d="M19.381 6.04742C20.1699 6.04742 20.8095 6.687 20.8095 7.47597V16.5236C20.8095 17.3126 20.1699 17.9522 19.381 17.9522H4.61905C3.83007 17.9522 3.19048 17.3126 3.19048 16.5236V7.47597C3.19048 6.687 3.83007 6.04742 4.61905 6.04742H19.381ZM4.61905 4.85693C3.17259 4.85693 2 6.02951 2 7.47597V16.5236C2 17.9701 3.17259 19.1426 4.61905 19.1426H19.381C20.8274 19.1426 22 17.9701 22 16.5236V7.47597C22 6.02951 20.8274 4.85693 19.381 4.85693H4.61905Z"
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
export class SiAmexIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
