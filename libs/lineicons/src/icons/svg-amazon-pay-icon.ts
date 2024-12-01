import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-amazon-pay-icon',
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
        d="M7.40787 6.45016C6.87342 6.45016 6.31253 6.69816 5.87697 7.08483L5.82808 6.75305C5.81564 6.6695 5.74875 6.59883 5.65097 6.59883H5.18586C5.10075 6.59883 5.03141 6.66839 5.03141 6.75305C5.03141 8.86373 5.03141 10.9746 5.03141 13.0853C5.03141 13.1702 5.10097 13.2395 5.18586 13.2395H5.79364C5.87853 13.2395 5.94786 13.17 5.94786 13.0853V10.8986C6.33342 11.2424 6.83476 11.4402 7.37076 11.4402C8.6441 11.4402 9.39699 10.3377 9.39699 8.96573C9.39699 7.6835 8.90477 6.45016 7.40787 6.45016ZM8.01609 10.3755C7.7792 10.6091 7.51476 10.6726 7.11653 10.6726C6.76209 10.6726 6.29586 10.4877 5.94764 10.2304V7.63861C6.31031 7.36017 6.77275 7.2095 7.15831 7.2095C8.16498 7.2095 8.43921 8.00106 8.43921 8.90751C8.44498 9.51862 8.33254 10.0635 8.01609 10.3755Z"
        fill="#323544"
      />
      <path
        d="M13.8481 11.1704C13.8481 11.2553 13.7785 11.3246 13.6932 11.3246H13.2394C13.1414 11.3246 13.0745 11.2537 13.0618 11.1704L13.0163 10.8615C12.8078 11.038 12.5518 11.1931 12.2743 11.3011C11.7407 11.5084 11.1254 11.5426 10.604 11.2224C10.2269 10.9911 10.0269 10.5386 10.0269 10.0717C10.0269 9.71062 10.1383 9.35261 10.3849 9.09283C10.714 8.73772 11.1914 8.56328 11.7674 8.56328C12.1154 8.56328 12.6134 8.60417 12.9758 8.72261V8.10105C12.9758 7.46905 12.7098 7.19571 12.0083 7.19571C11.472 7.19571 11.0618 7.2766 10.4912 7.45416C10.3998 7.45727 10.3463 7.38771 10.3463 7.30283V6.94838C10.3463 6.86327 10.4189 6.78104 10.4976 6.75616C10.9052 6.57838 11.4827 6.46771 12.0965 6.44727C12.8967 6.44727 13.8478 6.62771 13.8478 7.85861V11.1704H13.8481ZM12.9761 10.2628V9.32506C12.6716 9.24172 12.1676 9.20728 11.9727 9.20728C11.6647 9.20728 11.3274 9.28017 11.1512 9.46972C11.0196 9.60884 10.96 9.80839 10.96 10.0013C10.96 10.2508 11.0463 10.5011 11.248 10.6248C11.4823 10.784 11.8456 10.7646 12.1869 10.6675C12.5149 10.5746 12.8232 10.4097 12.9761 10.2628Z"
        fill="#323544"
      />
      <path
        d="M14.7066 13.0771C14.7066 12.962 14.7066 12.8586 14.7066 12.7435C14.7066 12.6486 14.7533 12.5831 14.8522 12.5891C15.0371 12.6153 15.2984 12.6415 15.4842 12.6033C15.7266 12.5529 15.9004 12.3811 16.0033 12.1455C16.1482 11.814 16.2442 11.5466 16.3048 11.3713L14.4644 6.81173C14.4333 6.73439 14.4242 6.59084 14.5786 6.59084H15.2219C15.3446 6.59084 15.3946 6.66884 15.4222 6.74506L16.7566 10.4486L18.0304 6.74506C18.0564 6.66928 18.1086 6.59084 18.2302 6.59084H18.8369C18.9904 6.59084 18.9817 6.73417 18.9511 6.81173L17.1253 11.5135C16.8891 12.1393 16.5744 13.1362 15.8655 13.3093C15.5102 13.4022 15.0617 13.3686 14.7984 13.2584C14.7319 13.2251 14.7066 13.136 14.7066 13.0771Z"
        fill="#323544"
      />
      <path
        d="M20.6941 12.8871C20.0719 12.8957 19.3372 13.0351 18.7799 13.4262C18.6079 13.5455 18.6381 13.7113 18.8294 13.6893C19.4561 13.614 20.851 13.4448 21.1003 13.7635C21.3503 14.0822 20.8239 15.3968 20.5912 15.9849C20.5192 16.1602 20.6714 16.2329 20.8321 16.0995C21.8748 15.2262 22.1456 13.3953 21.9323 13.132C21.8254 13.0002 21.3163 12.8784 20.6941 12.8871Z"
        fill="#323544"
      />
      <path
        d="M2.14382 13.5537C1.99848 13.5737 1.93582 13.758 2.08782 13.904C4.69916 16.3533 8.15007 17.5526 11.9814 17.5526C14.7141 17.5526 17.8868 16.6611 20.0768 14.9808C20.4388 14.7015 20.1303 14.2828 19.759 14.4482C17.3037 15.5315 14.6365 16.0537 12.2092 16.0537C8.61163 16.0537 5.12917 15.3026 2.3116 13.5966C2.25026 13.5593 2.19226 13.5471 2.14382 13.5537Z"
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
export class SvgAmazonPayIcon {
  readonly class = input('');
}
