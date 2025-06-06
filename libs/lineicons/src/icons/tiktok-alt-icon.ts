import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tiktok-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.8571 3H5.14286C3.96129 3 3 3.96129 3 5.14286V18.8571C3 20.0387 3.96129 21 5.14286 21H18.8571C20.0387 21 21 20.0387 21 18.8571V5.14286C21 3.96129 20.0387 3 18.8571 3ZM17.1454 10.8527C17.0471 10.8623 16.9485 10.8673 16.8497 10.8677C16.3165 10.8678 15.7917 10.7351 15.3227 10.4816C14.8536 10.2281 14.4551 9.86177 14.163 9.41572V14.3601C14.163 15.0829 13.9487 15.7895 13.5471 16.3904C13.1456 16.9914 12.5748 17.4598 11.9071 17.7364C11.2393 18.013 10.5045 18.0854 9.79564 17.9444C9.08673 17.8033 8.43559 17.4553 7.92451 16.9442C7.41343 16.4331 7.06536 15.782 6.92435 15.0731C6.78337 14.3642 6.85572 13.6294 7.13231 12.9617C7.40893 12.2939 7.8773 11.7231 8.47827 11.3216C9.07924 10.92 9.7858 10.7057 10.5086 10.7057C10.5849 10.7057 10.6594 10.7126 10.7344 10.7173V12.5181C10.6594 12.5091 10.5857 12.4954 10.5086 12.4954C10.0139 12.4954 9.53949 12.6919 9.18971 13.0417C8.83993 13.3915 8.64344 13.8659 8.64344 14.3606C8.64344 14.8552 8.83993 15.3297 9.18971 15.6794C9.53949 16.0292 10.0139 16.2257 10.5086 16.2257C11.5389 16.2257 12.4487 15.414 12.4487 14.3837L12.4667 5.98629H14.1896C14.2683 6.73485 14.6076 7.43195 15.1483 7.95569C15.6889 8.4794 16.3964 8.79641 17.1471 8.85128V10.8527"
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
export class SiTiktokAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
