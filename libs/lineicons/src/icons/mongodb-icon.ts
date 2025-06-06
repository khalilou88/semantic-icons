import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mongodb-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.7408 4.2309C12.8994 3.23804 12.1745 2.22263 12.0273 2.01426C12.0242 2.00986 12.0202 2.00627 12.0154 2.00378C12.0107 2.0013 12.0054 2 12 2C11.9947 2 11.9894 2.0013 11.9847 2.00378C11.9799 2.00627 11.9759 2.00987 11.9728 2.01427C11.8256 2.22264 11.1009 3.23805 10.2596 4.2309C3.04835 13.4177 11.3977 19.6158 11.3977 19.6158L11.4654 19.6629C11.5287 20.6218 11.686 22 11.686 22H12.3143C12.3143 22 12.4709 20.6277 12.5345 19.6691L12.6026 19.6158C12.6026 19.6158 20.9519 13.4177 13.7408 4.2309ZM12.0002 19.4811C12.0002 19.4811 11.6258 19.1619 11.5248 19.0019L11.5239 18.9847L11.9766 8.98294C11.9769 8.97687 11.9795 8.97116 11.9839 8.96697C11.9883 8.96278 11.9941 8.96044 12.0001 8.96044C12.0062 8.96044 12.012 8.96278 12.0164 8.96697C12.0208 8.97116 12.0234 8.97687 12.0237 8.98294L12.4764 18.9847L12.4755 19.0018C12.3746 19.1618 12.0002 19.4811 12.0002 19.4811Z"
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
export class SiMongodbIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
