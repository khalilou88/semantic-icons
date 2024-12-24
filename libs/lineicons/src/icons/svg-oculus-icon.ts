import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-oculus-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.20976 12.6941C5.15219 12.7307 5.09033 12.7533 5.02171 12.7632C4.95337 12.7735 4.88721 12.7714 4.81888 12.7714H3.42652C3.3582 12.7714 3.29203 12.7735 3.2237 12.7632C3.15537 12.753 3.09351 12.7307 3.03565 12.6941C2.92239 12.619 2.85407 12.4969 2.85407 12.3667C2.85407 12.2344 2.92239 12.1124 3.03565 12.0392C3.09321 12.0026 3.15507 11.9804 3.2237 11.9702C3.29203 11.9599 3.3582 11.962 3.42652 11.962H4.81919C4.88752 11.962 4.95369 11.9599 5.02199 11.9702C5.09033 11.9804 5.15219 12.0026 5.21008 12.0392C5.32332 12.1144 5.39163 12.2365 5.39163 12.3667C5.39134 12.499 5.32301 12.621 5.20976 12.6941ZM5.76926 11.4226C5.6197 11.3088 5.44888 11.2295 5.26331 11.1868C5.1565 11.1625 5.0497 11.1523 4.94074 11.1482C4.85949 11.1461 4.77856 11.1461 4.69731 11.1461H3.5484C3.46715 11.1461 3.38621 11.1461 3.30495 11.1482C3.196 11.1523 3.0892 11.1625 2.98241 11.1868C2.79651 11.2295 2.6257 11.3088 2.47612 11.4226C2.17512 11.6527 2 12.0003 2 12.3667C2 12.7348 2.17512 13.0807 2.47612 13.3105C2.6257 13.4243 2.79651 13.5039 2.9821 13.5463C3.0889 13.5706 3.19569 13.5808 3.30464 13.5849C3.38589 13.587 3.46684 13.587 3.54809 13.587H4.697C4.77826 13.587 4.85949 13.587 4.94046 13.5849C5.04942 13.5808 5.15619 13.5706 5.26299 13.5463C5.44888 13.5036 5.6197 13.4243 5.76897 13.3105C6.07027 13.0804 6.24509 12.7328 6.24541 12.3664C6.24573 11.9983 6.07059 11.6527 5.76926 11.4226Z"
        fill="#323544"
      />
      <path
        d="M20.2558 12.7392L19.8893 13.0965C20.1543 13.3824 20.543 13.5256 20.98 13.5256C21.5586 13.5256 22 13.2522 22 12.8062C22 12.3898 21.691 12.1627 21.2007 12.1165L20.9268 12.0913C20.7015 12.0703 20.5559 11.9989 20.5559 11.8727C20.5559 11.7381 20.7061 11.6623 20.9622 11.6623C21.2404 11.6623 21.4478 11.7718 21.5848 11.9316L21.9471 11.5784C21.7218 11.3217 21.3773 11.1997 20.9886 11.1997C20.3836 11.1997 19.9994 11.4856 19.9994 11.9064C19.9994 12.2892 20.2909 12.5414 20.812 12.5879L21.0902 12.6131C21.3155 12.6342 21.4346 12.71 21.4346 12.8361C21.4346 12.9918 21.249 13.0632 21.0108 13.0632C20.7061 13.0629 20.4414 12.9453 20.2558 12.7392ZM18.8779 13.4878H19.4476V11.2333H18.8561V12.5288C18.8561 12.8232 18.6354 13.0166 18.3483 13.0166C18.0657 13.0166 17.8758 12.8147 17.8758 12.5288V11.2333H17.284V12.6172C17.284 13.1682 17.7167 13.5215 18.2113 13.5215C18.4896 13.5215 18.728 13.3994 18.8782 13.2437L18.8779 13.4878ZM16.626 10.4131H16.0341V13.4878H16.626V10.4131ZM14.7846 13.4878H15.3543V11.2333H14.7624V12.5288C14.7624 12.8232 14.5417 13.0166 14.2546 13.0166C13.9721 13.0166 13.7822 12.8147 13.7822 12.5288V11.2333H13.1903V12.6172C13.1903 13.1682 13.623 13.5215 14.1176 13.5215C14.3959 13.5215 14.6344 13.3994 14.7846 13.2437V13.4878ZM12.3824 12.7896C12.2676 12.9157 12.0999 13.0041 11.8789 13.0041C11.4859 13.0041 11.2341 12.7307 11.2341 12.3647C11.2341 11.9904 11.4859 11.7168 11.8789 11.7168C12.0996 11.7168 12.2676 11.8051 12.3824 11.9397L12.7887 11.5529C12.5766 11.3343 12.2587 11.1953 11.8835 11.1953C11.1683 11.1953 10.6426 11.6957 10.6426 12.3603C10.6426 13.0248 11.1679 13.5253 11.8835 13.5253C12.2544 13.5253 12.5769 13.3865 12.7887 13.172L12.3824 12.7896ZM9.02615 13.0041C8.63315 13.0041 8.37708 12.7307 8.37708 12.3647C8.37708 11.9904 8.63315 11.7168 9.02615 11.7168C9.4192 11.7168 9.67528 11.9901 9.67528 12.3647C9.67556 12.7307 9.4192 13.0041 9.02615 13.0041ZM9.02615 13.5256C9.74142 13.5256 10.2671 13.0252 10.2671 12.3606C10.2671 11.696 9.74174 11.1956 9.02615 11.1956C8.31062 11.1956 7.78553 11.696 7.78553 12.3606C7.78553 13.0252 8.31091 13.5256 9.02615 13.5256Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgOculusIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
