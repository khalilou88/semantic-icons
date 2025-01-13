import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mastercard-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.0504 12.0142H11.7911C11.8293 11.8004 11.7606 11.6171 11.5239 11.6171C11.2871 11.6171 11.1191 11.7393 11.0504 12.0142Z"
      fill="#323544"
    />
    <svg:path
      d="M6.87349 12.4113C6.86251 12.4095 6.85004 12.4073 6.83629 12.4048C6.72557 12.3845 6.53159 12.3491 6.36174 12.4646C6.17078 12.5945 6.11741 12.8233 6.31599 12.9C6.50706 12.9734 6.78916 12.8467 6.82763 12.6477L6.87349 12.4113Z"
      fill="#323544"
    />
    <svg:path
      d="M20.4733 12.3424C20.5345 12.144 20.5011 11.8961 20.4351 11.8081C20.252 11.5638 19.8306 11.7569 19.7021 12.2358C19.6181 12.5487 19.8015 12.7854 20.0076 12.7854C20.2291 12.7853 20.3665 12.6097 20.4733 12.3424Z"
      fill="#323544"
    />
    <svg:path
      d="M16.9532 12.4113C16.9422 12.4095 16.9297 12.4073 16.916 12.4048C16.8053 12.3845 16.6114 12.3491 16.4416 12.4646C16.2506 12.5945 16.1971 12.8233 16.3958 12.9C16.587 12.9734 16.869 12.8467 16.9072 12.6477L16.9532 12.4113Z"
      fill="#323544"
    />
    <svg:path
      d="M16.0812 6.08019C19.3505 6.08019 22.001 8.73068 22.001 12.0001C22.001 15.2693 19.3505 17.9198 16.0812 17.9197C14.6624 17.9197 13.3715 17.4231 12.352 16.591C13.1297 15.8402 13.7234 14.9 14.0419 13.8374H13.5501C13.2418 14.7823 12.7004 15.6157 11.9965 16.2847C11.288 15.61 10.7577 14.7701 10.453 13.8404H9.96108C10.2782 14.897 10.8618 15.8383 11.6335 16.5869C10.6164 17.4106 9.33154 17.9198 7.9209 17.9198C4.65146 17.9198 2.00098 15.2693 2.00098 12C2.00098 8.73056 4.65157 6.08008 7.9209 6.08008C9.33166 6.08008 10.6164 6.58933 11.6335 7.413C10.8509 8.17097 10.2752 9.11647 9.96108 10.1596H10.453C10.7576 9.22984 11.2879 8.39001 11.9965 7.71525C12.7003 8.38416 13.2418 9.21774 13.5501 10.1625H14.0419C13.7234 9.09984 13.1297 8.15975 12.352 7.40891C13.3715 6.5767 14.6624 6.08019 16.0812 6.08019ZM18.059 11.1964L17.6502 13.3868H18.252L18.4371 12.3841C18.6055 11.7616 18.8644 11.7648 19.0157 11.7667H19.0157C19.0237 11.7668 19.0314 11.7669 19.0388 11.7669L19.2006 11.1964C18.8998 11.1964 18.7224 11.3041 18.6298 11.4122L18.5758 11.1964H18.059ZM10.3249 10.6397H9.72927L9.31687 12.7167C9.20216 13.3122 9.6528 13.3964 9.79015 13.3964C9.92774 13.3964 10.1033 13.3733 10.2332 13.2893L10.2714 12.8465C9.92774 12.9 9.91237 12.7472 9.94299 12.5791L10.1111 11.6934H10.4165L10.5232 11.22H10.2027L10.3249 10.6397ZM11.4934 11.1895C10.5604 11.1895 10.4172 12.0867 10.3885 12.2665C10.3876 12.2722 10.3868 12.2771 10.3861 12.2813C10.3632 12.4189 10.348 13.3886 11.3788 13.3886C11.6308 13.3963 11.9974 13.3657 12.1426 13.2892L12.2342 12.8389C12.1426 12.8616 11.7988 12.8923 11.562 12.8923C11.5584 12.8923 11.5548 12.8923 11.5512 12.8923L11.5413 12.8923C11.3039 12.8928 10.9456 12.8934 11.0122 12.4113H12.3103C12.3791 12.0599 12.5395 11.1895 11.4934 11.1895ZM9.30173 11.2658C9.05491 11.1724 8.8548 11.1782 8.75207 11.1811C8.7372 11.1815 8.72437 11.1819 8.71373 11.1819L8.70967 11.1819C8.60899 11.1818 7.91305 11.1808 7.80505 11.7012C7.72107 12.1059 7.86923 12.2733 8.01125 12.3349C8.16105 12.3998 8.26842 12.4615 8.35895 12.5134L8.35896 12.5134C8.40693 12.541 8.45018 12.5658 8.49251 12.587C8.64363 12.6625 8.61587 12.9153 8.41604 12.9153C8.40025 12.9153 8.37542 12.9166 8.34362 12.9184L8.34351 12.9184C8.19047 12.9267 7.87607 12.9439 7.62957 12.8617L7.54559 13.3122C7.82053 13.3887 8.04175 13.3887 8.24818 13.3887C8.25472 13.3887 8.2624 13.3888 8.27113 13.3889C8.45595 13.3907 9.10785 13.3973 9.2025 12.7701C9.25098 12.4498 9.11089 12.3042 8.99629 12.2358C8.88181 12.1593 8.69086 12.0525 8.56875 11.9989C8.44653 11.9455 8.35492 11.7394 8.57638 11.6783C8.71373 11.6629 8.99618 11.6629 9.16437 11.7088L9.30173 11.2658ZM5.79673 10.7465H4.81943L4.09385 12.3502L3.97925 10.7465H3.02482L2.51318 13.3886H3.10869L3.47524 11.4796L3.63569 13.3886H4.20071L5.03314 11.5255L4.68185 13.3886H5.30046L5.79673 10.7465ZM5.86535 11.7317C5.90078 11.728 5.95076 11.7215 6.00906 11.714L6.00916 11.714L6.00917 11.714C6.1898 11.6908 6.4503 11.6573 6.60607 11.6629C6.6258 11.6637 6.64575 11.664 6.66562 11.6644C6.85347 11.668 7.03477 11.6715 6.97261 11.9684C6.95301 11.9703 6.9183 11.9693 6.87234 11.9679H6.87233C6.56025 11.9584 5.72932 11.9333 5.58302 12.7318C5.51428 13.1826 5.90359 13.4116 6.20902 13.3964C6.51446 13.3811 6.59844 13.3428 6.70541 13.2664L6.78177 13.3886H7.33904L7.57586 12.1974C7.63697 11.8996 7.73609 11.1818 6.73591 11.1818C6.70498 11.1831 6.6734 11.184 6.64039 11.1849L6.64029 11.1849C6.4778 11.1893 6.28076 11.1947 5.95696 11.2583L5.86535 11.7317ZM15.1509 11.2505C15.3496 11.2505 15.4562 11.2657 15.6091 11.3574L15.9987 10.9681C15.846 10.8 15.6701 10.635 15.1816 10.6168C14.7693 10.6015 14.0627 10.9024 13.8375 11.7239C13.5321 12.8389 14.2039 13.3886 14.8226 13.3886C15.1509 13.3886 15.3496 13.3428 15.548 13.2512L15.3724 12.7167C14.7614 12.9227 14.3263 12.6097 14.4256 11.976C14.5094 11.4402 14.9524 11.2505 15.1509 11.2505ZM20.6027 11.3698C20.5225 11.2858 20.4307 11.1895 20.2213 11.1895C20.2037 11.1895 20.1857 11.1894 20.1672 11.1892C19.8389 11.186 19.3658 11.1814 19.0913 12.1211C18.8972 12.7845 19.2897 13.3887 19.7172 13.3887C19.9158 13.3812 20.1143 13.2971 20.2363 13.2131L20.313 13.3887H20.9543L21.4736 10.6093H20.8473L20.6872 11.449C20.6574 11.4272 20.6308 11.3993 20.6027 11.3698ZM15.945 11.7317C15.9805 11.728 16.0306 11.7215 16.089 11.714C16.2696 11.6907 16.5299 11.6573 16.6858 11.6629C16.7055 11.6637 16.7254 11.664 16.7453 11.6644C16.9331 11.668 17.1146 11.6715 17.0523 11.9684C17.0327 11.9703 16.998 11.9693 16.9521 11.9679H16.952C16.64 11.9584 15.809 11.9333 15.6627 12.7318C15.5939 13.1826 15.9832 13.4116 16.2886 13.3964C16.5943 13.3811 16.678 13.3428 16.7851 13.2664L16.8616 13.3886H17.4188L17.6557 12.1974C17.7168 11.8996 17.8159 11.1818 16.8155 11.1818C16.7846 11.1831 16.753 11.184 16.7199 11.1849H16.7199C16.5575 11.1893 16.3604 11.1947 16.0368 11.2583L15.945 11.7317ZM12.7322 11.22L12.3274 13.3886L12.9231 13.3887L13.1062 12.3958C13.2715 11.7852 13.5317 11.7898 13.6825 11.7924H13.6825C13.692 11.7926 13.701 11.7928 13.7095 11.7928L13.8622 11.22C13.5646 11.22 13.389 11.3269 13.2972 11.4339L13.2438 11.22H12.7322Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMastercardIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
