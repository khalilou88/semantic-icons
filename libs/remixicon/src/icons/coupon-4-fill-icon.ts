import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-coupon-4-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.0049 20.9997H3.00488C2.4526 20.9997 2.00488 20.552 2.00488 19.9997V3.99969C2.00488 3.44741 2.4526 2.99969 3.00488 2.99969H10.0049C10.0049 4.10426 10.9003 4.99969 12.0049 4.99969C13.1095 4.99969 14.0049 4.10426 14.0049 2.99969H21.0049C21.5572 2.99969 22.0049 3.44741 22.0049 3.99969V19.9997C22.0049 20.552 21.5572 20.9997 21.0049 20.9997H14.0049C14.0049 19.8951 13.1095 18.9997 12.0049 18.9997C10.9003 18.9997 10.0049 19.8951 10.0049 20.9997ZM6.00488 7.99969V15.9997H8.00488V7.99969H6.00488ZM16.0049 7.99969V15.9997H18.0049V7.99969H16.0049Z"
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
export class SiCoupon4FillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
