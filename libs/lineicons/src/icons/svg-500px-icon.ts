import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-500px-icon',
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
        d="M19.5092 18.6239C19.3678 18.4831 19.2483 18.3998 19.1425 18.3696C19.0356 18.3389 18.9403 18.3619 18.8663 18.4359L18.7972 18.505C18.0705 19.2317 17.2237 19.8028 16.2816 20.2012C15.3061 20.6139 14.2702 20.8228 13.2015 20.8228C12.1328 20.8228 11.0969 20.6139 10.1214 20.2012C9.17924 19.8028 8.33302 19.2317 7.60574 18.505C6.84886 17.7476 6.27778 16.9013 5.91003 15.9899C5.55104 15.1004 5.43376 14.4318 5.39539 14.212C5.39156 14.1917 5.38882 14.1753 5.38662 14.1632C5.3373 13.9045 5.09889 13.8864 4.7569 13.9391C4.6144 13.961 4.18088 14.0273 4.22253 14.3386L4.22363 14.3457C4.33817 15.067 4.54041 15.7745 4.8254 16.4481C5.28359 17.5311 5.93907 18.5028 6.77323 19.3375C7.60793 20.1722 8.5802 20.8277 9.66263 21.2853C10.784 21.7594 11.9744 22 13.2015 22C14.4281 22 15.6185 21.7594 16.7403 21.2848C17.8222 20.8271 18.7945 20.1717 19.6297 19.337C19.6314 19.3348 19.6769 19.2898 19.7021 19.2624C19.7936 19.1621 19.8736 18.9873 19.5092 18.6239ZM19.3458 6.55004C18.5851 5.82988 17.7515 5.29113 16.7228 4.85597C15.6037 4.38299 14.4149 4.14294 13.19 4.14294C12.0177 4.14294 10.7703 4.3797 9.85336 4.77595C9.7558 4.81432 9.69716 4.89324 9.684 5.0034C9.67195 5.10808 9.70045 5.24564 9.7706 5.42431C9.82705 5.56955 9.97831 5.95539 10.2704 5.84413C11.2082 5.48624 12.2451 5.28894 13.19 5.28894C14.2609 5.28894 15.2989 5.49885 16.2761 5.91209C17.0527 6.24038 17.7855 6.71501 18.5818 7.40502C18.6399 7.45544 18.7013 7.4812 18.7649 7.4812C18.9205 7.4812 19.0691 7.32829 19.1968 7.18579C19.4094 6.94684 19.5552 6.74844 19.3458 6.55004ZM14.3985 13.8393L13.6986 13.1394L14.4286 12.405C14.5881 12.2318 14.4472 12.0477 14.3064 11.9068C14.1014 11.7024 13.9041 11.6492 13.7775 11.766L13.0524 12.4927L12.3186 11.7589C12.2796 11.7216 12.2309 11.7019 12.1766 11.7019C12.079 11.7019 11.9634 11.7682 11.833 11.8986C11.6077 12.1239 11.5589 12.2801 11.6768 12.4045L12.4101 13.1356L11.6806 13.8667C11.6209 13.9265 11.5907 13.9906 11.5913 14.058C11.5929 14.1906 11.714 14.3068 11.7864 14.3759L11.8094 14.3978C11.9338 14.52 12.0522 14.5819 12.1613 14.5819C12.2517 14.5819 12.307 14.5392 12.3268 14.5211C12.3816 14.4701 13.0009 13.8431 13.0595 13.7829L13.7501 14.4712C13.8142 14.543 13.8833 14.5792 13.9644 14.5814C14.0746 14.5814 14.1951 14.5162 14.3217 14.3868C14.6193 14.0826 14.4703 13.9188 14.3985 13.8393ZM19.1716 10.4846C18.8422 9.7047 18.3703 9.00482 17.7691 8.4036C17.1678 7.80292 16.468 7.33103 15.6881 7.0011C14.8808 6.65965 14.0236 6.48646 13.1396 6.48646C12.2457 6.48646 11.3523 6.66404 10.556 7.0011C9.91967 7.2702 8.84272 7.96295 8.21245 8.6135L8.20861 8.61734V3.22931H17.2588C17.5882 3.22547 17.5882 2.76565 17.5882 2.61493C17.5882 2.46366 17.5882 2.00384 17.2577 2H7.47201C7.20565 2 7.04068 2.22142 7.04068 2.42694V10.0105C7.04068 10.255 7.34541 10.432 7.62876 10.4923C8.18176 10.6107 8.30946 10.4336 8.44483 10.2467L8.46291 10.2221C8.66953 9.91461 9.3157 9.26461 9.32228 9.25803C10.3307 8.24959 11.679 7.6944 13.1187 7.6944C14.5514 7.6944 15.8958 8.24959 16.9042 9.25803C17.9159 10.2698 18.4728 11.6103 18.4728 13.0331C18.4728 14.4608 17.9187 15.8014 16.9119 16.8076C15.9182 17.8013 14.53 18.3713 13.1034 18.3713C12.1371 18.3713 11.2043 18.1137 10.4053 17.6264L10.4085 13.0156C10.4085 12.4006 10.6755 11.732 11.1221 11.2278C11.6335 10.6507 12.3372 10.3328 13.105 10.3328C13.8488 10.3328 14.5431 10.615 15.0605 11.1275C15.5741 11.6366 15.8569 12.3146 15.8569 13.0364C15.8569 14.5776 14.6451 15.7844 13.0984 15.7844C12.8003 15.7844 12.2583 15.6529 12.2358 15.6474C11.9234 15.5542 11.7908 15.9877 11.7469 16.1308C11.5787 16.6805 11.8313 16.7895 11.8839 16.806C12.3816 16.96 12.7082 16.9896 13.1363 16.9896C15.3198 16.9896 17.096 15.2122 17.096 13.0276C17.096 10.8606 15.3209 9.09745 13.1385 9.09745C12.0697 9.09745 11.0657 9.50575 10.3115 10.2473C9.59357 10.9537 9.18143 11.8959 9.18143 12.8314L9.18088 12.855C9.17759 12.9717 9.1754 15.7356 9.1743 16.6432L9.17047 16.6383C8.75997 16.1839 8.3544 15.4884 8.0853 14.7776C7.98007 14.4992 7.74166 14.5485 7.41666 14.6483C7.27471 14.6921 6.84283 14.8253 6.93874 15.1371L6.93984 15.141C6.94423 15.1536 7.04781 15.4397 7.1081 15.5816C7.43748 16.361 7.90937 17.0608 8.5106 17.6626C9.11128 18.2633 9.8117 18.7352 10.5916 19.0651C11.3989 19.4066 12.2561 19.5797 13.1396 19.5797C14.023 19.5797 14.8808 19.4066 15.6881 19.0646C16.468 18.7352 17.1678 18.2633 17.7691 17.6621C18.3697 17.0608 18.8422 16.361 19.1716 15.5811C19.513 14.7738 19.6862 13.9166 19.6862 13.0331C19.6862 12.1491 19.513 11.2919 19.1716 10.4846Z"
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
export class Svg500pxIcon {
  readonly class = input('');
}
