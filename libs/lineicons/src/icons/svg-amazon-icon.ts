import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-amazon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4076 13.6997C13.2454 14.5563 11.5608 15.0134 10.1104 15.0134C8.07669 15.0134 6.24584 14.2612 4.86074 13.0102C4.75192 12.9118 4.84942 12.7777 4.98001 12.8543C6.47481 13.7241 8.32307 14.2473 10.2323 14.2473C11.5199 14.2473 12.9363 13.9809 14.2387 13.4281C14.4355 13.3445 14.6 13.5569 14.4076 13.6997Z"
        fill="#323544"
      />
      <path
        d="M14.8908 13.1469C15.0397 13.3375 14.7254 14.1219 14.5852 14.4719C14.5426 14.5781 14.634 14.6208 14.7297 14.5407C15.354 14.0192 15.5141 12.9266 15.387 12.769C15.2599 12.6123 14.17 12.4774 13.5057 12.9449C13.403 13.0163 13.4204 13.1155 13.5344 13.1016C13.9088 13.0572 14.7428 12.9571 14.8908 13.1469Z"
        fill="#323544"
      />
      <path
        d="M13.5605 9.6445V9.19005C13.5605 9.12128 13.6128 9.07514 13.6754 9.07514H15.71C15.7753 9.07514 15.8275 9.12215 15.8275 9.19005V9.57921C15.8267 9.6445 15.7718 9.72982 15.6743 9.86476L14.62 11.37C15.0118 11.3604 15.4253 11.4188 15.7805 11.619C15.8606 11.6643 15.8824 11.7304 15.8885 11.7957V12.2806C15.8885 12.3468 15.8153 12.4243 15.7387 12.3842C15.1128 12.056 14.2814 12.0203 13.5892 12.3877C13.5187 12.426 13.4447 12.3494 13.4447 12.2833V11.8227C13.4447 11.7487 13.4456 11.6225 13.5196 11.5102L14.741 9.75855H13.678C13.6128 9.75855 13.5605 9.71241 13.5605 9.6445Z"
        fill="#323544"
      />
      <path
        d="M6.13877 12.48H5.51978C5.46058 12.4757 5.41357 12.4313 5.40922 12.3747V9.19789C5.40922 9.13434 5.46233 9.08384 5.52849 9.08384H6.10569C6.16576 9.08645 6.21364 9.13259 6.218 9.19005V9.60532H6.22931C6.37992 9.20398 6.66287 9.01681 7.04418 9.01681C7.43159 9.01681 7.67362 9.20398 7.84773 9.60532C7.99748 9.20398 8.33787 9.01681 8.70265 9.01681C8.96209 9.01681 9.2459 9.12389 9.41915 9.36417C9.61503 9.63144 9.57498 10.0197 9.57498 10.3601L9.57411 12.3651C9.57411 12.4286 9.521 12.48 9.45484 12.48H8.83672C8.77491 12.4757 8.72529 12.426 8.72529 12.3651V10.6814C8.72529 10.5473 8.73748 10.213 8.70788 10.0859C8.66174 9.87259 8.52331 9.81252 8.34397 9.81252C8.19423 9.81252 8.03752 9.91264 7.97397 10.0728C7.91042 10.233 7.91651 10.5012 7.91651 10.6814V12.3651C7.91651 12.4286 7.86341 12.48 7.79724 12.48H7.17912C7.11644 12.4757 7.06769 12.426 7.06769 12.3651L7.06682 10.6814C7.06682 10.327 7.12515 9.80556 6.6855 9.80556C6.24063 9.80556 6.25804 10.314 6.25804 10.6814V12.3651C6.25804 12.4286 6.20494 12.48 6.13877 12.48Z"
        fill="#323544"
      />
      <path
        d="M17.5792 9.01681C18.4976 9.01681 18.9947 9.80556 18.9947 10.8085C18.9947 11.7774 18.4454 12.5462 17.5792 12.5462C16.6772 12.5462 16.1862 11.7574 16.1862 10.7745C16.1862 9.78554 16.6833 9.01681 17.5792 9.01681ZM17.5844 9.66539C17.1282 9.66539 17.0995 10.287 17.0995 10.6744C17.0995 11.0627 17.0934 11.8915 17.5792 11.8915C18.0588 11.8915 18.0815 11.2229 18.0815 10.8154C18.0815 10.5473 18.0702 10.2269 17.9892 9.97271C17.9196 9.75158 17.7811 9.66539 17.5844 9.66539Z"
        fill="#323544"
      />
      <path
        d="M20.1857 12.48H19.5693C19.5075 12.4757 19.4579 12.426 19.4579 12.3651L19.457 9.18744C19.4622 9.12911 19.5136 9.08384 19.5763 9.08384H20.15C20.204 9.08645 20.2484 9.12302 20.2606 9.17264V9.65843H20.2719C20.4451 9.22401 20.688 9.01681 21.1155 9.01681C21.3932 9.01681 21.664 9.11692 21.8381 9.39116C22 9.64537 22 10.0728 22 10.3801V12.3799C21.993 12.4356 21.9417 12.48 21.8807 12.48H21.26C21.2034 12.4757 21.1564 12.4339 21.1503 12.3799V10.6544C21.1503 10.307 21.1904 9.79859 20.7629 9.79859C20.6123 9.79859 20.4739 9.89958 20.4051 10.0528C20.318 10.2469 20.3067 10.4402 20.3067 10.6544V12.3651C20.3058 12.4286 20.2519 12.48 20.1857 12.48Z"
        fill="#323544"
      />
      <path
        d="M11.9386 10.9626V10.8285C11.4903 10.8285 11.0175 10.9243 11.0175 11.4518C11.0175 11.7191 11.1568 11.9002 11.3945 11.9002C11.5677 11.9002 11.7244 11.7931 11.8228 11.619C11.9447 11.4048 11.9386 11.2037 11.9386 10.9626ZM12.5628 12.4713C12.5219 12.5079 12.4627 12.5105 12.4166 12.4861C12.2111 12.3155 12.1737 12.2362 12.0614 12.0734C11.7218 12.4199 11.4807 12.5235 11.041 12.5235C10.5196 12.5235 10.1147 12.2023 10.1147 11.5589C10.1147 11.0566 10.3864 10.7144 10.7746 10.5473C11.1107 10.3993 11.5799 10.3732 11.9386 10.3323V10.2522C11.9386 10.105 11.9499 9.93092 11.8629 9.80381C11.788 9.68976 11.6435 9.64275 11.5155 9.64275C11.2796 9.64275 11.0698 9.76376 11.0184 10.0145C11.008 10.0702 10.967 10.1251 10.9104 10.1277L10.3106 10.0632C10.2601 10.0519 10.2035 10.011 10.2183 9.93353C10.3559 9.20572 11.014 8.98633 11.6026 8.98633C11.9038 8.98633 12.2973 9.06642 12.535 9.29452C12.8362 9.57572 12.8075 9.95094 12.8075 10.3592V11.3239C12.8075 11.6138 12.9276 11.7409 13.0408 11.8976C13.0799 11.9533 13.0887 12.0203 13.0382 12.0621C12.9119 12.1675 12.6873 12.3633 12.5637 12.473L12.5628 12.4713Z"
        fill="#323544"
      />
      <path
        d="M3.82388 10.9626V10.8285C3.3764 10.8285 2.90367 10.9243 2.90367 11.4518C2.90367 11.7191 3.04209 11.9002 3.27976 11.9002C3.45388 11.9002 3.60972 11.7931 3.70809 11.619C3.82997 11.4048 3.82388 11.2037 3.82388 10.9626ZM4.44809 12.4713C4.40717 12.5079 4.34797 12.5105 4.30183 12.4861C4.09637 12.3155 4.05981 12.2362 3.94663 12.0734C3.6071 12.4199 3.36682 12.5235 2.9263 12.5235C2.40569 12.5235 2 12.2023 2 11.5589C2 11.0566 2.27249 10.7144 2.6599 10.5473C2.99595 10.3993 3.4652 10.3732 3.82388 10.3323V10.2522C3.82388 10.105 3.8352 9.93092 3.74901 9.80381C3.67327 9.68976 3.52875 9.64275 3.40165 9.64275C3.16572 9.64275 2.95503 9.76376 2.90367 10.0145C2.89322 10.0702 2.8523 10.1251 2.79659 10.1277L2.19588 10.0632C2.14539 10.0519 2.08967 10.011 2.1036 9.93353C2.24202 9.20572 2.89932 8.98633 3.48783 8.98633C3.78906 8.98633 4.18256 9.06642 4.42023 9.29452C4.72146 9.57572 4.69273 9.95094 4.69273 10.3592V11.3239C4.69273 11.6138 4.81287 11.7409 4.92604 11.8976C4.96609 11.9533 4.9748 12.0203 4.9243 12.0621C4.79807 12.1675 4.57346 12.3633 4.44983 12.473L4.44809 12.4713Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAmazonIcon {
  readonly class = input<string>('');
}
