import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-rupee-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.91801 4.25098C5.91801 3.83676 6.2538 3.50098 6.66801 3.50098H17.833C18.2472 3.50098 18.583 3.83676 18.583 4.25098C18.583 4.66519 18.2472 5.00098 17.833 5.00098H14.4022C15.257 5.81999 15.8429 6.91737 16.0143 8.14746H17.833C18.2472 8.14746 18.583 8.48325 18.583 8.89746C18.583 9.31167 18.2472 9.64746 17.833 9.64746H16.0149C15.6507 12.2749 13.3955 14.2978 10.6679 14.2978H8.86012L15.7757 19.6574C16.1031 19.9111 16.1628 20.3822 15.9091 20.7096C15.6554 21.037 15.1843 21.0967 14.8569 20.843L6.20859 14.1406C5.95515 13.9442 5.8546 13.6084 5.9584 13.305C6.06219 13.0017 6.34737 12.7978 6.66801 12.7978H10.6679C12.565 12.7978 14.1457 11.4426 14.4946 9.64746H6.66797C6.25376 9.64746 5.91797 9.31167 5.91797 8.89746C5.91797 8.48325 6.25376 8.14746 6.66797 8.14746H14.4938C14.1434 6.35423 12.5637 5.00098 10.6679 5.00098H6.66801C6.2538 5.00098 5.91801 4.66519 5.91801 4.25098Z"
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
export class SiRupeeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
