import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-dribbble-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.1107 11.5233C8.3396 11.5233 8.52515 11.3377 8.52515 11.1087C8.52515 10.8797 8.3396 10.6941 8.1107 10.6941C7.88179 10.6941 7.69624 10.8797 7.69624 11.1087C7.69624 11.3377 7.88179 11.5233 8.1107 11.5233ZM21.7888 12.9397C21.7258 12.8954 21.6771 12.8881 21.6367 12.9741C20.9406 14.4818 19.7676 13.7295 19.8841 13.7957C20.1443 13.6766 20.8286 13.1278 20.7252 12.37C20.6624 11.9069 20.2649 11.7015 19.843 11.775C19.1065 11.9034 18.8355 12.6978 18.9735 13.4011C18.9976 13.5218 19.0407 13.6214 19.0838 13.719C18.2515 14.3958 17.921 13.1132 17.8835 12.9599C17.8821 12.9517 18.5262 12.4148 18.7053 11.1355C18.8931 9.79466 18.4653 9.55051 18.028 9.55813C17.2186 9.57223 16.9999 11.2633 17.2937 12.6727C17.2691 12.6791 17.1546 12.7425 16.9705 12.7496C16.8381 12.3329 16.2723 11.9677 16.1242 12.1084C15.7536 12.4605 16.2141 13.1488 16.5381 13.2028C16.3435 14.4017 15.1262 14.1048 15.3528 12.6028C15.7492 11.8666 16.0507 10.7721 15.9969 10.1113C15.9778 9.87735 15.8048 9.56391 15.4137 9.57946C14.6613 9.60923 14.5795 11.3007 14.6677 12.5013C14.6633 12.4717 14.6214 12.6472 14.3131 12.7344C14.2402 12.3296 13.5884 11.9232 13.4349 12.1186C13.1477 12.4842 13.6455 13.1361 13.8813 13.1816C13.6866 14.3804 12.4694 14.0835 12.696 12.5815C13.0924 11.8454 13.3938 10.7509 13.34 10.0901C13.321 9.8561 13.148 9.54266 12.7568 9.55817C12.0044 9.58798 11.9226 11.2795 12.0109 12.48C12.0064 12.45 11.9636 12.6312 11.6427 12.717C11.6319 12.1918 10.9778 11.951 10.8206 12.1186C10.5405 12.4173 10.8848 13.0302 11.2032 13.1816C11.0085 14.3804 9.79128 14.0835 10.0179 12.5815C10.4143 11.8454 10.7158 10.7509 10.6619 10.0901C10.6429 9.8561 10.47 9.54266 10.0787 9.55817C9.3264 9.58798 9.26585 11.3645 9.35406 12.565C9.10624 13.6268 8.27519 14.9527 8.38316 12.2966C8.39382 12.1103 8.40546 12.0395 8.31257 11.9698C8.24296 11.9156 8.08468 11.9416 7.99816 11.9438C7.893 11.948 7.86664 12.0095 7.84339 12.1025C7.78925 12.3427 7.77953 12.5755 7.77179 12.8932C7.76671 13.0418 7.7548 13.1111 7.69757 13.3137C7.64042 13.5163 7.31437 13.8866 7.13585 13.8247C6.8882 13.7395 6.96945 13.0404 7.01585 12.56C7.05453 12.1804 6.9307 12.0099 6.61343 11.9479C6.42769 11.9092 6.31484 11.9152 6.1214 11.8542C5.93847 11.7965 5.89711 11.4505 5.50695 11.5658C5.29355 11.629 5.43074 12.0811 5.37945 12.4162C5.1273 14.0647 4.60265 14.11 4.35926 13.3092C5.45547 10.6244 4.67636 9.56594 4.22031 9.56594C3.74531 9.56594 3.20234 9.89313 3.43226 11.9866C3.32047 11.9539 3.28609 11.9364 3.16371 11.9364C2.47156 11.9364 2 12.4959 2 13.1861C2 13.8764 2.4716 14.4359 3.16375 14.4359C3.57234 14.4359 3.85922 14.2501 4.07648 13.9627C4.21824 14.1657 4.39086 14.4391 4.70652 14.4268C5.64742 14.3901 5.92105 12.4601 5.95336 12.3524C6.05394 12.3679 6.1491 12.3973 6.24199 12.4128C6.39675 12.436 6.408 12.4973 6.40449 12.6529C6.36347 13.9656 6.6057 14.4252 7.15515 14.4252C7.46128 14.4252 7.73414 14.1244 7.9221 13.9093C8.06249 14.1991 8.2862 14.4163 8.58632 14.4252C9.31355 14.4432 9.59199 13.2841 9.56659 13.4367C9.54667 13.5564 9.80253 14.4186 10.5512 14.4218C11.4786 14.4257 11.651 13.4058 11.6715 13.235C11.6752 13.2045 11.6741 13.201 11.6715 13.235L11.6708 13.2454C11.9652 13.1906 12.1171 13.0327 12.1171 13.0327C12.1171 13.0327 12.3535 14.4376 13.2292 14.4218C14.1386 14.4053 14.3101 13.4834 14.3326 13.3037C14.3373 13.266 14.3356 13.261 14.3326 13.3037C14.3325 13.3054 14.3324 13.3072 14.3323 13.3089C14.682 13.1817 14.774 13.054 14.774 13.054C14.774 13.054 14.9619 14.431 15.8861 14.443C16.7097 14.4538 17.0149 13.6104 17.0167 13.2574C17.1556 13.2589 17.4126 13.175 17.4065 13.1702C17.4065 13.1702 17.7082 14.3741 18.5507 14.4359C18.9462 14.465 19.243 14.2134 19.4121 14.0986C19.8096 14.4205 21.1332 14.8317 21.969 13.4147C22.087 13.2113 21.8333 12.9711 21.7888 12.9397ZM3.13035 13.9685C2.72652 13.9685 2.46758 13.5951 2.46758 13.1925C2.46758 12.7899 2.70527 12.4165 3.1091 12.4165C3.29082 12.4165 3.39191 12.4365 3.53344 12.5596C3.5591 12.6607 3.63183 12.894 3.66722 13C3.71465 13.1417 3.77105 13.2624 3.82793 13.3937C3.74668 13.7305 3.48031 13.9685 3.13035 13.9685ZM4.11441 12.5714C4.09762 12.5447 4.10113 12.5611 4.08234 12.5359C4.00832 12.3345 3.86566 11.885 3.84914 11.3745C3.83047 10.797 3.92672 10.1201 4.21047 10.1201C4.40273 10.1201 4.60707 11.492 4.11437 12.5714H4.11441ZM9.80038 11.9697C9.75484 11.627 9.75245 10.0993 10.1192 10.1414C10.3217 10.2234 9.99081 11.665 9.80038 11.9697ZM12.4785 11.9697C12.4329 11.627 12.4305 10.0993 12.7973 10.1414C12.9998 10.2234 12.6689 11.665 12.4785 11.9697ZM15.1353 11.991C15.0897 11.6483 15.0874 10.1206 15.4541 10.1626C15.6566 10.2447 15.3257 11.6863 15.1353 11.991ZM18.0684 10.052C18.4037 10.0172 18.3899 11.4815 17.7169 12.4059C17.6301 12.0718 17.497 10.1667 18.0684 10.0519V10.052ZM19.4778 13.2028C19.3701 12.6588 19.6484 12.3015 19.9353 12.2623C20.0355 12.2463 20.1808 12.3113 20.2098 12.4327C20.2575 12.6616 20.2029 13.0011 19.5608 13.4318C19.5618 13.4355 19.5018 13.324 19.4778 13.2028H19.4778Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDribbbleIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
