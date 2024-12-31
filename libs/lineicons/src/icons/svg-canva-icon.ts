import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-canva-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.8687 13.1727C21.8386 13.1727 21.8086 13.1928 21.7885 13.2429C21.588 13.8243 21.3073 14.1752 21.0768 14.1752C20.9465 14.1752 20.8963 14.0248 20.8963 13.8043C20.8963 13.2329 21.2372 12.0199 21.4076 11.4585C21.4276 11.3884 21.4377 11.3282 21.4377 11.2781C21.4377 11.1177 21.3474 11.0375 21.1269 11.0375C20.8963 11.0375 20.6357 11.1277 20.3951 11.5588C20.3149 11.1778 20.0543 11.0174 19.6934 11.0174C19.2824 11.0174 18.8814 11.2881 18.5506 11.7192C18.2198 12.1502 17.8288 12.2906 17.5381 12.2204C17.7486 11.7091 17.8288 11.3182 17.8288 11.0375C17.8288 10.5864 17.6083 10.3157 17.2474 10.3157C16.7061 10.3157 16.3953 10.837 16.3953 11.3783C16.3953 11.7994 16.5858 12.2304 17.0068 12.4409C16.6559 13.2329 16.1447 13.9547 15.9442 13.9547C15.6936 13.9547 15.6134 12.7216 15.6334 11.8395C15.6435 11.3382 15.6836 11.3082 15.6836 11.1578C15.6836 11.0676 15.6234 11.0074 15.3928 11.0074C14.8615 11.0074 14.6911 11.4585 14.6711 11.9798C14.661 12.1803 14.631 12.3708 14.5808 12.5612C14.3603 13.3532 13.8992 13.9647 13.5984 13.9647C13.4581 13.9647 13.418 13.8243 13.418 13.6439C13.418 13.0725 13.7388 12.3507 13.7388 11.7392C13.7388 11.2881 13.5383 11.0074 13.1674 11.0074C12.7263 11.0074 12.1549 11.5287 11.6035 12.5011C11.784 11.7593 11.8542 11.0375 11.3229 11.0375C11.2026 11.0375 11.0923 11.0676 10.992 11.1277C10.9219 11.1578 10.8818 11.228 10.8818 11.3082C10.9319 12.1001 10.2402 14.1351 9.58861 14.1351C9.46831 14.1351 9.40817 14.0048 9.40817 13.7943C9.40817 13.2229 9.749 12.0099 9.91942 11.4485C9.93947 11.3783 9.94949 11.3182 9.94949 11.258C9.94949 11.1077 9.85927 11.0275 9.63873 11.0275C9.40817 11.0275 9.14753 11.1177 8.90694 11.5488C8.81672 11.1678 8.5661 11.0074 8.20522 11.0074C7.61377 11.0074 6.96217 11.6289 6.67145 12.4409C6.2805 13.5236 5.5086 14.5762 4.45602 14.5762C3.50369 14.5762 3.00246 13.7842 3.00246 12.5312C3.00246 10.7167 4.33573 9.2431 5.31814 9.2431C5.78929 9.2431 6.00983 9.54384 6.00983 10.005C6.00983 10.5663 5.69907 10.817 5.69907 11.0375C5.69907 11.0976 5.74919 11.1678 5.85946 11.1678C6.29052 11.1678 6.79175 10.6666 6.79175 9.97489C6.79175 9.2832 6.25042 8.79199 5.26801 8.79199C3.63401 8.79199 2 10.426 2 12.5312C2 14.2053 2.82202 15.2077 4.24551 15.2077C5.21789 15.2077 6.06998 14.4559 6.52109 13.5737C6.57121 14.3055 6.90202 14.6864 7.41327 14.6864C7.86438 14.6864 8.22527 14.4158 8.50595 13.9446C8.61622 14.4358 8.89691 14.6764 9.26782 14.6764C9.68885 14.6764 10.0497 14.4058 10.3805 13.9146C10.3805 14.3055 10.4607 14.6764 10.8016 14.6764C10.962 14.6764 11.1524 14.6363 11.1825 14.496C11.5434 13.0224 12.4256 11.8094 12.6962 11.8094C12.7764 11.8094 12.7965 11.8896 12.7965 11.9798C12.7965 12.3808 12.5158 13.2028 12.5158 13.7241C12.5158 14.2955 12.7564 14.6664 13.2576 14.6664C13.809 14.6664 14.3703 13.9947 14.7412 13.0023C14.8615 13.9246 15.1122 14.6664 15.5031 14.6664C15.9843 14.6664 16.8564 13.6439 17.3777 12.5612C17.5782 12.5913 17.889 12.5813 18.1897 12.3708C18.0594 12.6916 17.9892 13.0424 17.9892 13.3833C17.9892 14.3857 18.4704 14.6664 18.8814 14.6664C19.3325 14.6664 19.6934 14.3957 19.9741 13.9246C20.0643 14.3456 20.3049 14.6564 20.7359 14.6564C21.4076 14.6564 21.999 13.9647 21.999 13.3933C22.0091 13.273 21.9389 13.1727 21.8687 13.1727ZM7.83431 14.1251C7.56364 14.1251 7.45337 13.8544 7.45337 13.4434C7.45337 12.7317 7.94458 11.5387 8.45583 11.5387C8.67637 11.5387 8.76659 11.7994 8.76659 12.1302C8.76659 12.8519 8.30546 14.1251 7.83431 14.1251ZM17.1872 11.9999C17.0268 11.8094 16.9667 11.5387 16.9667 11.3082C16.9667 11.0174 17.077 10.7769 17.1973 10.7769C17.3176 10.7769 17.3677 10.8972 17.3677 11.0776C17.3577 11.3583 17.2574 11.7893 17.1872 11.9999ZM19.3024 14.1251C19.0318 14.1251 18.9215 13.8043 18.9215 13.4434C18.9215 12.7517 19.4127 11.5387 19.924 11.5387C20.1445 11.5387 20.2247 11.7994 20.2247 12.1302C20.2347 12.8519 19.7836 14.1251 19.3024 14.1251Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCanvaIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
