import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cardmarket-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Cardmarket</svg:title>
    <svg:path
      d="M14.837.772c-.45 0-.6.255-.645.366-.044.11-.113.4.213.711l1.54 1.478a.124.124 0 0 1 .002.18L10.021 9.47a.934.934 0 0 0-.274.673.936.936 0 0 0 .289.669l3.977 3.82a.955.955 0 0 0 .664.267v.001c.259 0 .5-.1.68-.281l5.815-5.853a.142.142 0 0 1 .103-.042c.023 0 .065.005.1.04l1.54 1.478c.198.19.383.23.504.23.277 0 .577-.217.577-.691L24 1.726a.951.951 0 0 0-.95-.95zm-8.06.793-2.351.461s-.365.064-.606.428c-.192.286-.124.616-.124.616l3.082 14.66V1.566ZM2.843 4.907v.001L.52 5.752s-.308.106-.445.452c-.15.385-.03.634-.03.634L6.04 23.224h.86C6.559 21.8 2.843 4.907 2.843 4.907ZM23.31 12.63a.59.59 0 0 0-.417.175l-6.716 6.787a.976.976 0 0 0-.287.706c.004.267.11.515.303.7l1.084 1.046-7.668-.006.005-7.574 2.473 2.494a.592.592 0 0 0 .835.004.59.59 0 0 0 .004-.835l-3.2-3.227c-.246-.25-.562-.33-.843-.214-.282.116-.45.396-.45.747l-.006 8.794c0 .266.103.515.291.703a.986.986 0 0 0 .702.291l8.92.007v-.002c.354 0 .633-.168.747-.45.114-.283.03-.599-.224-.845l-1.708-1.647 6.578-6.648a.591.591 0 0 0-.005-.835.589.589 0 0 0-.418-.17z"
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
export class SiCardmarketIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#012169');
}
