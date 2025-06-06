import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-paypal-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.6458 7.76485C19.6136 7.73264 19.6136 7.73264 19.6136 7.73264C18.744 11.855 16.0065 14.0773 11.562 14.0773H9.75847L8.72787 20.744H7.76168L7.63286 21.4525C7.60065 21.7101 7.8261 22 8.08375 22H11.3044C11.6586 22 12.0129 21.7424 12.0773 21.3559L12.1095 21.2271L12.6892 17.3623L12.7214 17.1369C12.7536 16.7826 13.0757 16.4927 13.4944 16.4927H13.9775C17.1015 16.4927 19.5492 15.2367 20.2577 11.5652C20.612 9.95487 20.4187 8.69883 19.6458 7.76485Z"
      fill="#323544"
    />
    <svg:path
      d="M8.88836 13.6909L8.85615 13.8841C8.88836 13.4332 9.30704 13.1111 9.72572 13.1111H11.5293C15.1042 13.1111 17.8739 11.6619 18.7435 7.44285C18.7757 7.31403 18.7757 7.21741 18.7757 7.08858C19.0011 5.54268 18.7757 4.44767 17.9061 3.51369C17.6807 3.25604 17.3586 3.0306 17.0365 2.80516C16.5856 2.54751 16.1348 2.35427 15.5873 2.25765C15.233 2.16103 14.7821 2.12882 14.3312 2.06441C13.9447 2.03221 13.5905 2 13.1718 2H7.02039C6.56951 2 6.21524 2.32206 6.15083 2.70854L3.57434 19.1015C3.54213 19.4558 3.76758 19.7456 4.12185 19.7456H7.92217L8.88836 13.6909Z"
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
export class SiPaypalIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
