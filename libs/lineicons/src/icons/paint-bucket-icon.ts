import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-paint-bucket-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.1068 3.19153C6.31391 2.83281 6.7726 2.70991 7.13132 2.91701L9.02379 4.00964C9.04575 4.02231 9.06682 4.03593 9.08699 4.05042L18.7336 9.61988L18.7357 9.61623L19.3852 9.99123C20.03 10.3635 21.005 10.9995 21.6855 11.8237C22.0293 12.2401 22.3303 12.7428 22.4483 13.3189C22.5705 13.9153 22.4858 14.5419 22.1331 15.1528C21.4111 16.4032 19.8122 16.8317 18.5618 16.1097C18.0163 15.7948 17.6496 15.3622 17.4404 14.862L14.4395 20.0596C13.8182 21.1358 12.4421 21.5045 11.366 20.8832L3.62538 16.4141C2.54922 15.7928 2.1805 14.4167 2.80182 13.3406L7.64772 4.94721L6.38132 4.21605C6.0226 4.00894 5.89969 3.55025 6.1068 3.19153ZM4.25736 13.8195L17.0649 10.3885L8.9449 5.70043L4.25736 13.8195ZM4.64239 15.2692L12.116 19.5841C12.4747 19.7912 12.9334 19.6683 13.1405 19.3096L17.4549 11.8369L4.64239 15.2692ZM18.764 13.2516C18.6992 13.6372 18.7123 13.9567 18.795 14.2051C18.8712 14.4339 19.018 14.6411 19.3118 14.8107C19.8448 15.1184 20.5263 14.9358 20.834 14.4028C21.0037 14.109 21.0272 13.8562 20.9788 13.62C20.9263 13.3635 20.7778 13.0802 20.5289 12.7787C20.1953 12.3747 19.74 12.0073 19.2951 11.7039C19.0615 12.1891 18.8509 12.735 18.764 13.2516Z"
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
export class SiPaintBucketIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
