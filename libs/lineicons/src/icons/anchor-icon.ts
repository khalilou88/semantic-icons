import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-anchor-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.75 7.39648C13.9043 7.07002 14.75 6.00878 14.75 4.75C14.75 3.23122 13.5188 2 12 2C10.4812 2 9.25 3.23122 9.25 4.75C9.25 6.00878 10.0957 7.07002 11.25 7.39648V9H9.375C8.96079 9 8.625 9.33579 8.625 9.75C8.625 10.1642 8.96079 10.5 9.375 10.5H11.25L11.25 20.5H11.0029C8.10344 20.5 5.75293 18.1495 5.75293 15.25V14.4382L6.71984 15.4045C7.01283 15.6973 7.4877 15.6971 7.7805 15.4041C8.0733 15.1112 8.07315 14.6363 7.78016 14.3435L5.53023 12.095C5.23739 11.8023 4.76279 11.8023 4.46993 12.095L2.21986 14.3435C1.92686 14.6363 1.92669 15.1111 2.21948 15.4041C2.51227 15.6971 2.98715 15.6973 3.28014 15.4045L4.25293 14.4324V15.25C4.25293 18.9779 7.27501 22 11.0029 22H12.9958C16.7238 22 19.7458 18.9779 19.7458 15.25V14.4311L20.7198 15.4045C21.0128 15.6973 21.4877 15.6971 21.7805 15.4041C22.0733 15.1112 22.0731 14.6363 21.7802 14.3435L19.5302 12.095C19.2374 11.8023 18.7628 11.8023 18.4699 12.095L16.2199 14.3435C15.9269 14.6363 15.9267 15.1111 16.2195 15.4041C16.5123 15.6971 16.9871 15.6973 17.2801 15.4045L18.2458 14.4395V15.25C18.2458 18.1495 15.8953 20.5 12.9958 20.5H12.75L12.75 10.5H14.625C15.0392 10.5 15.375 10.1642 15.375 9.75C15.375 9.33579 15.0392 9 14.625 9H12.75V7.39648ZM10.75 4.75C10.75 4.05964 11.3096 3.5 12 3.5C12.6904 3.5 13.25 4.05964 13.25 4.75C13.25 5.44036 12.6904 6 12 6C11.3096 6 10.75 5.44036 10.75 4.75Z"
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
export class SiAnchorIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
