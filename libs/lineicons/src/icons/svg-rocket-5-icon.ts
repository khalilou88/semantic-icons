import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-rocket-5-icon',
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
        d="M12.7659 7.9789C13.666 7.07874 15.1255 7.07874 16.0256 7.9789C16.9258 8.87906 16.9258 10.3385 16.0256 11.2387C15.1255 12.1388 13.666 12.1388 12.7659 11.2387C11.8657 10.3385 11.8657 8.87906 12.7659 7.9789ZM14.965 9.03956C14.6506 8.72519 14.1409 8.72519 13.8265 9.03956C13.5121 9.35393 13.5121 9.86363 13.8265 10.178C14.1409 10.4924 14.6506 10.4924 14.965 10.178C15.2793 9.86363 15.2793 9.35393 14.965 9.03956Z"
        fill="#323544"
      />
      <path
        d="M20.6216 4.04316C20.5821 3.69619 20.3083 3.4224 19.9614 3.38283C16.2551 2.96017 12.3947 4.17038 9.55023 7.01484C8.88176 7.6833 8.30341 8.40811 7.81526 9.174C6.1781 9.23859 4.55997 9.89584 3.31006 11.1457C2.80493 11.6509 2.39581 12.2173 2.08364 12.8217C1.95144 13.0776 1.97753 13.3867 2.15076 13.6169C2.324 13.847 2.61377 13.9577 2.89631 13.9015C4.08094 13.6658 5.32046 13.7826 6.44797 14.2511L9.74979 17.5529C10.2185 18.6808 10.3351 19.9208 10.0992 21.1059C10.0429 21.3884 10.1534 21.6782 10.3836 21.8515C10.6137 22.0248 10.9228 22.0509 11.1788 21.9188C11.7836 21.6065 12.3505 21.1972 12.856 20.6917C14.1054 19.4423 14.7626 17.825 14.8277 16.1885C15.5945 15.7 16.3201 15.1211 16.9893 14.452C19.8332 11.6081 21.0435 7.74873 20.6216 4.04316ZM13.2079 17.061C12.999 18.0028 12.5281 18.8983 11.7953 19.631C11.7688 19.6576 11.742 19.6838 11.715 19.7097C11.6979 19.0354 11.5917 18.3628 11.3966 17.7111C12.0126 17.5417 12.6183 17.325 13.2079 17.061ZM6.29179 12.6049C5.63997 12.4095 4.96724 12.3032 4.29283 12.2859C4.31845 12.2592 4.34442 12.2327 4.37072 12.2064C5.1039 11.4732 5.99998 11.0022 6.94246 10.7934C6.67827 11.3831 6.46137 11.9889 6.29179 12.6049ZM10.6109 8.0755C12.9635 5.72292 16.1029 4.63755 19.1837 4.82052C19.3661 7.90068 18.2807 11.0392 15.9286 13.3913C14.4226 14.8973 12.5957 15.883 10.6685 16.3503L7.6523 13.3341C8.11969 11.4074 9.10531 9.58107 10.6109 8.0755Z"
        fill="#323544"
      />
      <path
        d="M3.03001 20.25C3.03002 20.2501 3.03002 20.2502 3.77953 20.223L3.03001 20.25C3.04425 20.6429 3.35947 20.9583 3.75235 20.9725L3.77953 20.223C3.75235 20.9725 3.75223 20.9725 3.75235 20.9725L3.75361 20.9726L3.75565 20.9727L3.76203 20.9729L3.78367 20.9735C3.80194 20.974 3.82777 20.9746 3.86028 20.9751C3.92523 20.9761 4.01715 20.9767 4.12879 20.9755C4.35089 20.9731 4.65671 20.9631 4.9863 20.9323C5.31222 20.9019 5.68221 20.8492 6.02513 20.7549C6.34629 20.6666 6.74723 20.5151 7.03929 20.223C7.93945 19.3229 7.93945 17.8634 7.03929 16.9633C6.13913 16.0631 4.67969 16.0631 3.77953 16.9633C3.48747 17.2553 3.33595 17.6563 3.24764 17.9774C3.15335 18.3204 3.10068 18.6903 3.07022 19.0163C3.03942 19.3459 3.02946 19.6517 3.02704 19.8738C3.02582 19.9854 3.02649 20.0773 3.0275 20.1423C3.028 20.1748 3.02859 20.2006 3.02907 20.2189L3.0297 20.2405L3.0299 20.2469L3.03001 20.25ZM4.84019 18.0239C5.15456 17.7096 5.66426 17.7096 5.97863 18.0239C6.293 18.3383 6.293 18.848 5.97863 19.1624C5.97872 19.1623 5.97878 19.1622 5.97863 19.1624C5.97661 19.1641 5.95331 19.1845 5.89153 19.2143C5.82709 19.2454 5.73944 19.2778 5.62746 19.3086C5.40168 19.3707 5.12727 19.4126 4.84673 19.4389C4.74185 19.4487 4.639 19.456 4.54111 19.4615C4.54657 19.3636 4.55391 19.2607 4.56371 19.1558C4.58993 18.8753 4.63189 18.6009 4.69396 18.3751C4.72476 18.2631 4.75718 18.1755 4.78826 18.111C4.81806 18.0492 4.83842 18.0259 4.84019 18.0239C4.84032 18.0238 4.84028 18.0238 4.84019 18.0239Z"
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
export class SvgRocket5Icon {
  readonly class = input<string>('');
}
