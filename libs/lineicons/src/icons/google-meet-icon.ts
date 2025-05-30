import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-google-meet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.68505 3.72379L2 8.43633H6.68505H13.3129V11.9996V15.5628H6.68521L6.68505 8.43633H2V18.896C2 19.6581 2.61365 20.2754 3.37128 20.2754L16.5126 20.2755C17.2702 20.2755 17.8839 19.6582 17.8839 18.8962V15.926L20.8915 18.4065C21.3418 18.7606 22 18.4375 22 17.8617V6.25237C22 5.6696 21.3269 5.35009 20.8778 5.71905L17.8839 8.18804V5.10295C17.8839 4.34088 17.2702 3.72363 16.5126 3.72363L6.68505 3.72379Z"
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
export class SiGoogleMeetIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
