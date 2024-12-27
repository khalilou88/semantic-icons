import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-toyota-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7887 18.2556C11.7857 17.2721 12.5787 16.4789 13.5691 16.4771C14.5352 16.4786 15.329 17.2721 15.3483 18.2556C15.329 19.2279 14.5355 20.0214 13.5691 20.0351C12.5787 20.0214 11.7857 19.2279 11.7887 18.2556ZM13.5691 19.3795C14.1037 19.3713 14.5464 18.869 14.5519 18.2556C14.5464 17.6303 14.1037 17.1282 13.5691 17.1317C13.0113 17.128 12.5675 17.6303 12.5851 18.2556C12.5675 18.869 13.0113 19.3713 13.5691 19.3795ZM17.3621 17.2252V19.9413H16.6133V17.2252H15.5358V16.6175H18.393V17.2252H17.3621ZM19.2822 19.1912L19.002 19.9413H18.1127L19.5174 16.6175H20.4537L21.8125 19.9413H20.923L20.642 19.1912H19.2822ZM20.4537 18.6301L19.9859 17.4125L19.5174 18.6301H20.4537ZM3.59244 17.2252V19.9413H2.84311V17.2252H1.8125V16.6175H4.6228V17.2252H3.59244ZM4.81056 18.2553C4.81205 17.2719 5.60453 16.4786 6.5895 16.4769C7.56182 16.4784 8.35556 17.2719 8.36969 18.2553C8.35531 19.2277 7.5616 20.0211 6.5895 20.0348C5.60453 20.0211 4.81205 19.2277 4.81056 18.2553ZM6.5895 19.3792C7.1305 19.371 7.57276 18.8688 7.57324 18.2553C7.57276 17.6301 7.1305 17.128 6.5895 17.1315C6.03711 17.1278 5.59411 17.6301 5.60702 18.2553C5.59411 18.8688 6.03711 19.371 6.5895 19.3792ZM10.4302 19.941V18.6768L11.742 16.6175H10.8992L10.0559 18.0212L9.25944 16.6175H8.36969L9.6816 18.6768V19.941H10.4302Z"
        fill="#323544"
      />
      <path
        d="M11.836 3.69141C6.83447 3.69141 2.78025 6.20357 2.78025 9.3016C2.78025 12.3996 6.83447 14.9115 11.836 14.9115C16.8374 14.9115 20.8909 12.4003 20.8909 9.3016C20.8909 6.20283 16.837 3.69141 11.836 3.69141ZM16.5542 6.09615C16.7891 6.75818 15.7694 7.3805 14.0527 7.67247L14.0497 7.67618C13.8232 6.30154 13.326 5.24415 12.6964 4.73666C14.6825 4.85818 16.3044 5.39221 16.5542 6.09615ZM11.8357 6.02647C12.332 6.02647 12.7592 6.71031 12.9566 7.80492H12.9593C12.6029 7.83144 12.2274 7.84608 11.8357 7.84608C11.444 7.84608 11.069 7.83144 10.7126 7.80492H10.7153C10.9125 6.71031 11.3399 6.02647 11.8357 6.02647ZM7.11747 6.09615C7.3675 5.39199 8.98921 4.85795 10.9752 4.73666C10.3455 5.24415 9.8484 6.30128 9.62147 7.67592L9.61873 7.67247C7.90227 7.3805 6.88208 6.75792 7.11747 6.09615ZM4.28561 9.38518C4.28561 8.76134 4.49223 8.16679 4.86627 7.62483C4.88066 7.60399 4.89553 7.58292 4.9104 7.56208C4.92479 7.54199 4.93969 7.52189 4.95456 7.50205C4.95556 7.50083 4.95631 7.49957 4.95731 7.49834C4.97218 7.47824 4.98756 7.45841 5.00318 7.43831C5.01905 7.41795 5.03518 7.39737 5.05179 7.37728C5.06618 7.35918 5.08108 7.34131 5.09595 7.32321C5.12895 7.28402 5.16266 7.24508 5.1974 7.20663C5.2036 7.19944 5.21005 7.1925 5.21676 7.18531C5.23089 7.16918 5.24553 7.15331 5.2604 7.1377C5.2785 7.11808 5.29711 7.0985 5.31595 7.07915C5.38614 7.00647 5.4596 6.93528 5.53598 6.86534C5.54715 6.85492 5.55856 6.84473 5.56995 6.83457C5.57692 6.82812 5.58411 6.82166 5.59127 6.81547C5.60692 6.80134 5.62279 6.78744 5.63892 6.77379C5.64066 6.77208 5.64215 6.77057 5.64389 6.76934C5.65553 6.75918 5.66695 6.74925 5.67885 6.73934C5.69027 6.72966 5.70166 6.71973 5.71334 6.71031C5.9326 7.7305 7.38785 8.60634 9.49395 8.98483L9.49544 8.98312C9.4905 9.11457 9.48802 9.24553 9.48776 9.37673C9.48776 11.4933 10.0344 13.1628 10.8401 13.9146C7.14079 13.6197 4.28561 11.7039 4.28561 9.38518ZM11.8357 12.3976C11.1526 12.3976 10.5987 11.022 10.5987 9.20783C10.5987 9.17954 10.5992 9.15128 10.5997 9.12424L10.604 9.13166C10.9996 9.16541 11.4106 9.18476 11.836 9.18476C12.2613 9.18476 12.6751 9.16566 13.0729 9.13092L13.0724 9.13166C13.0724 9.15647 13.0734 9.18202 13.0734 9.20783C13.0734 11.022 12.5183 12.3976 11.8357 12.3976ZM12.8321 13.9146C13.6377 13.1631 14.1841 11.4933 14.1841 9.37673C14.1841 9.24379 14.1814 9.11331 14.1767 8.98386L14.1775 8.98483C16.2836 8.60657 17.7386 7.72999 17.9586 6.71079C17.9864 6.73386 18.0137 6.75718 18.0407 6.78099C18.0504 6.78892 18.0598 6.79737 18.0692 6.80605C18.0811 6.81621 18.0928 6.82689 18.1047 6.83757C18.1151 6.84673 18.1253 6.85592 18.1354 6.86534C18.1526 6.88095 18.1697 6.8966 18.1865 6.9127C18.2031 6.92808 18.2198 6.94395 18.2361 6.95983C18.2389 6.96231 18.2416 6.96505 18.2443 6.96776C18.2627 6.98537 18.2805 7.00324 18.2984 7.02112C18.3178 7.04021 18.3369 7.05954 18.3557 7.07915C18.3934 7.11783 18.4301 7.15702 18.4656 7.19673C18.4847 7.21779 18.5035 7.23912 18.5221 7.26021C18.5383 7.27883 18.5544 7.29766 18.57 7.3165C18.572 7.31876 18.5737 7.32099 18.5757 7.32321C18.607 7.36041 18.6375 7.39812 18.667 7.43608C18.6836 7.45741 18.6997 7.47873 18.7159 7.50008C18.7312 7.52066 18.7466 7.5415 18.7615 7.56208C18.7764 7.58292 18.791 7.60376 18.8057 7.6246C19.18 8.16631 19.3863 8.76086 19.3863 9.38518C19.3863 11.7039 16.5311 13.6195 12.8321 13.9146Z"
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
export class SvgToyotaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
