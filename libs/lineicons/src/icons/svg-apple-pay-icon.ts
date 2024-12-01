import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-apple-pay-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.12275 11.1955C7.13497 12.2998 8.12512 12.6665 8.13327 12.6706C8.12512 12.695 7.97436 13.1962 7.61171 13.7096C7.29796 14.1538 6.97198 14.5979 6.45857 14.606C5.95331 14.6142 5.79032 14.3167 5.21579 14.3167C4.63718 14.3167 4.45789 14.5979 3.98115 14.6142C3.48404 14.6305 3.10917 14.1334 2.79134 13.6892C2.14346 12.7847 1.65043 11.1303 2.3146 10.0139C2.64465 9.4597 3.23548 9.10927 3.87521 9.09705C4.3601 9.0889 4.82054 9.41488 5.11799 9.41488C5.41545 9.41488 5.97368 9.02371 6.56044 9.08075C6.80492 9.0889 7.49762 9.17854 7.93769 9.80605C7.90101 9.82642 7.1146 10.2706 7.12275 11.1955ZM6.17334 8.48177C6.4382 8.17209 6.61341 7.74425 6.56451 7.31641C6.18557 7.33271 5.72512 7.56089 5.45619 7.87057C5.21171 8.14357 4.99983 8.57956 5.05687 8.99926C5.48064 9.03185 5.91256 8.79145 6.17334 8.48177ZM9.98526 7.95267C10.1791 7.92048 10.3975 7.89224 10.6326 7.86405C10.8676 7.83585 11.1273 7.82379 11.4076 7.82379C11.8117 7.82379 12.158 7.87211 12.4507 7.96477C12.7434 8.06138 12.9825 8.1943 13.1722 8.3755C13.333 8.53258 13.4608 8.72185 13.5515 8.93528C13.6422 9.15275 13.6875 9.40245 13.6875 9.68434C13.6875 10.0267 13.6257 10.3247 13.502 10.5824C13.3783 10.8401 13.2093 11.0536 12.9949 11.2268C12.7805 11.3999 12.5249 11.5288 12.2281 11.6174C11.9312 11.702 11.6096 11.7463 11.2592 11.7463C10.9418 11.7463 10.6779 11.7221 10.4635 11.6778V14.513H9.98942V7.95267H9.98526ZM10.4594 11.263C10.5748 11.2952 10.7027 11.3194 10.8428 11.3315C10.983 11.3435 11.1355 11.3516 11.2963 11.3516C11.9024 11.3516 12.3682 11.2147 12.7022 10.9368C13.0361 10.663 13.201 10.2562 13.201 9.72459C13.201 9.46687 13.1557 9.24541 13.0691 9.0561C12.9825 8.86679 12.8589 8.70975 12.6981 8.58898C12.5373 8.4682 12.3435 8.3755 12.125 8.31512C11.9024 8.25469 11.6591 8.2225 11.387 8.2225C11.1727 8.2225 10.9871 8.23052 10.8304 8.24666C10.6738 8.2628 10.5501 8.28293 10.4594 8.29902V11.263ZM17.4557 13.3893C17.4557 13.5786 17.4598 13.772 17.464 13.9612C17.4722 14.1505 17.4928 14.3358 17.5258 14.5129H17.0806L17.0105 13.8445H16.9899C16.928 13.9371 16.8538 14.0298 16.759 14.1183C16.661 14.2145 16.5516 14.2984 16.4333 14.368C16.3096 14.4445 16.1694 14.5049 16.0086 14.5492C15.852 14.5935 15.6788 14.6177 15.4892 14.6177C15.2542 14.6177 15.048 14.5814 14.8707 14.5049C14.6935 14.4285 14.5451 14.3318 14.4337 14.211C14.3183 14.0901 14.2317 13.9492 14.1781 13.7921C14.1204 13.6351 14.0915 13.478 14.0915 13.321C14.0915 12.7612 14.3307 12.3343 14.813 12.0323C15.2954 11.7302 16.0169 11.5853 16.9857 11.5973V11.4684C16.9857 11.3436 16.9734 11.2027 16.9486 11.0416C16.9239 10.8805 16.8744 10.7274 16.792 10.5825C16.7095 10.4375 16.5899 10.3166 16.4292 10.22C16.2684 10.1233 16.0499 10.071 15.7737 10.071C15.5634 10.071 15.3572 10.1032 15.1552 10.1636C14.9561 10.2218 14.767 10.3101 14.5946 10.4254L14.442 10.0791C14.6563 9.93407 14.879 9.83339 15.1058 9.76897C15.3325 9.70854 15.5716 9.67635 15.8231 9.67635C16.1612 9.67635 16.4333 9.73274 16.6435 9.84545C16.8538 9.95816 17.0228 10.1032 17.1424 10.2804C17.2619 10.4576 17.3444 10.655 17.3898 10.8764C17.4351 11.0979 17.4557 11.3154 17.4557 11.5329V13.3893ZM16.9816 11.9839C16.726 11.9758 16.458 11.9879 16.1818 12.0121C15.9014 12.0402 15.6458 12.0966 15.4108 12.1853C15.1759 12.2739 14.9821 12.4027 14.8254 12.5759C14.6729 12.745 14.5945 12.9746 14.5945 13.2565C14.5945 13.5907 14.6935 13.8364 14.8872 13.9935C15.081 14.1505 15.2995 14.231 15.5428 14.231C15.7365 14.231 15.9138 14.2029 16.0664 14.1505C16.2189 14.0982 16.355 14.0257 16.4704 13.9371C16.5858 13.8484 16.6806 13.7478 16.759 13.635C16.8373 13.5223 16.8951 13.4095 16.9363 13.2887C16.9693 13.1558 16.9857 13.0632 16.9857 13.0028L16.9816 11.9839ZM18.3792 9.78502L19.6078 12.8578C19.6738 13.0269 19.7397 13.2041 19.8016 13.3853C19.8634 13.5666 19.917 13.7317 19.9624 13.8847H19.983C20.0283 13.7397 20.0819 13.5787 20.1438 13.3974C20.2056 13.2162 20.2716 13.031 20.3458 12.8417L21.496 9.78906H21.999L20.5973 13.2565C20.4571 13.6229 20.321 13.9572 20.1974 14.2552C20.0737 14.5532 19.9459 14.8231 19.8181 15.0647C19.6903 15.3063 19.5625 15.5158 19.4305 15.701C19.2986 15.8862 19.1543 16.0473 18.9935 16.1843C18.8039 16.3494 18.6307 16.4702 18.474 16.5427C18.3174 16.6192 18.2102 16.6675 18.1566 16.6837L17.9958 16.301C18.1154 16.2487 18.2514 16.1802 18.3998 16.0957C18.5482 16.0111 18.6926 15.8983 18.8327 15.7614C18.9523 15.6446 19.0883 15.4876 19.2326 15.2942C19.3769 15.1009 19.5047 14.8674 19.6202 14.5895C19.6614 14.4847 19.682 14.4163 19.682 14.3841C19.682 14.3398 19.6614 14.2673 19.6202 14.1787L17.8763 9.79708H18.3793L18.3792 9.78502Z"
        fill="#323544"
      />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgApplePayIcon {
  readonly class = input('');
}
