import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-double-quotes-end-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.4486 18.1774C7.4482 18.1776 7.44781 18.1778 7.12664 17.5L7.4486 18.1774C7.21625 18.2875 6.94291 18.2713 6.72563 18.1338C6.50835 17.9963 6.37664 17.7571 6.37664 17.5V14.9428C4.17809 14.5844 2.5 12.6765 2.5 10.3766C2.5 7.82142 4.57142 5.75 7.12664 5.75C9.68187 5.75 11.7533 7.82142 11.7533 10.3766C11.7533 13.222 10.704 15.1727 9.63212 16.4114C9.10021 17.0262 8.56716 17.461 8.16294 17.7445C7.96053 17.8864 7.78936 17.9911 7.66525 18.062C7.60315 18.0974 7.5527 18.1245 7.51584 18.1437C7.49741 18.1532 7.48237 18.1608 7.47095 18.1665L7.45658 18.1735L7.45148 18.176L7.4486 18.1774ZM4 10.3766C4 12.1034 5.39985 13.5033 7.12664 13.5033C7.54086 13.5033 7.87664 13.8391 7.87664 14.2533V16.0602C8.07495 15.8837 8.28625 15.6744 8.49781 15.4299C9.36427 14.4286 10.2533 12.8176 10.2533 10.3766C10.2533 8.64985 8.85344 7.25 7.12664 7.25C5.39985 7.25 4 8.64985 4 10.3766Z"
        fill="#323544"
      />
      <path
        d="M18.1986 18.1774C18.1982 18.1776 18.1978 18.1778 17.8766 17.5L18.1986 18.1774C17.9662 18.2875 17.6929 18.2713 17.4756 18.1338C17.2584 17.9963 17.1266 17.7571 17.1266 17.5V14.9428C14.9281 14.5844 13.25 12.6765 13.25 10.3766C13.25 7.82142 15.3214 5.75 17.8766 5.75C20.4319 5.75 22.5033 7.82142 22.5033 10.3766C22.5033 13.222 21.454 15.1727 20.3821 16.4114C19.8502 17.0262 19.3172 17.461 18.9129 17.7445C18.7105 17.8864 18.5394 17.9911 18.4152 18.062C18.3531 18.0974 18.3027 18.1245 18.2658 18.1437C18.2474 18.1532 18.2324 18.1608 18.221 18.1665L18.2066 18.1735L18.2015 18.176L18.1986 18.1774ZM14.75 10.3766C14.75 12.1034 16.1498 13.5033 17.8766 13.5033C18.2909 13.5033 18.6266 13.8391 18.6266 14.2533V16.0602C18.825 15.8837 19.0362 15.6744 19.2478 15.4299C20.1143 14.4286 21.0033 12.8176 21.0033 10.3766C21.0033 8.64985 19.6034 7.25 17.8766 7.25C16.1498 7.25 14.75 8.64985 14.75 10.3766Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDoubleQuotesEnd1Icon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
