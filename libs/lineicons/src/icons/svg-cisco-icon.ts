import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-cisco-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6092 17.1437V16.2179L15.5908 16.2262C15.3825 16.327 15.1558 16.3845 14.9233 16.3954C14.6828 16.4137 14.444 16.3434 14.2517 16.1979C14.1145 16.092 14.0123 15.9474 13.9583 15.7829C13.9 15.603 13.8933 15.4104 13.9392 15.227C13.9825 15.0395 14.0875 14.872 14.2367 14.7529C14.37 14.6412 14.5325 14.5712 14.705 14.5512C15.0096 14.5171 15.3174 14.5745 15.5892 14.7162L15.6092 14.727V13.7962L15.5667 13.7845C15.2947 13.6977 15.0093 13.6605 14.7242 13.6745C14.4644 13.681 14.2086 13.7394 13.9717 13.8462C13.7325 13.9562 13.5217 14.1187 13.3558 14.322C13.1028 14.6416 12.9624 15.0358 12.9564 15.4435C12.9503 15.851 13.079 16.2492 13.3225 16.5762C13.5683 16.8912 13.9133 17.1137 14.3017 17.2062C14.7108 17.3062 15.14 17.2912 15.5408 17.1629L15.6092 17.1437ZM6.44666 17.1437V16.2179L6.42834 16.2262C6.22 16.327 5.99334 16.3845 5.76084 16.3954C5.52031 16.4139 5.28134 16.3436 5.08917 16.1979C4.95205 16.0922 4.85009 15.9475 4.79667 15.7829C4.73766 15.6032 4.73073 15.4105 4.77667 15.227C4.82 15.0395 4.92417 14.872 5.07417 14.7529C5.2075 14.6412 5.37 14.5712 5.5425 14.5512C5.84706 14.5171 6.15491 14.5745 6.42666 14.7162L6.44666 14.727V13.7962L6.40416 13.7845C6.13219 13.6977 5.84681 13.6605 5.56166 13.6745C5.30191 13.6811 5.04608 13.7395 4.80917 13.8462C4.57018 13.956 4.35929 14.1187 4.1925 14.322C3.93976 14.6417 3.79944 15.0358 3.79326 15.4433C3.78708 15.8508 3.9154 16.249 4.15833 16.5762C4.40392 16.8915 4.74957 17.1136 5.13834 17.2062C5.5475 17.3062 5.97584 17.2912 6.3775 17.1629L6.44666 17.1437ZM9.71666 16.3754L9.71334 17.1729L9.77166 17.1829C9.955 17.217 10.1392 17.2404 10.325 17.2537C10.4875 17.2695 10.6508 17.272 10.8142 17.2637C10.97 17.252 11.1242 17.2229 11.2733 17.177C11.4483 17.127 11.6108 17.0412 11.7492 16.9229C11.874 16.8158 11.9696 16.6787 12.0267 16.5245C12.126 16.2667 12.1239 15.9808 12.0208 15.7245C11.9671 15.5911 11.8819 15.4728 11.7725 15.3795C11.6665 15.2847 11.5423 15.2124 11.4075 15.167L10.8058 14.9437C10.734 14.913 10.6757 14.8574 10.6417 14.787C10.6285 14.7582 10.6223 14.7266 10.6235 14.695C10.6246 14.6633 10.6331 14.6323 10.6483 14.6045C10.6792 14.5539 10.7237 14.5129 10.7767 14.4862C10.8441 14.4537 10.9165 14.4329 10.9908 14.4245C11.1183 14.4062 11.2475 14.407 11.3742 14.4287C11.5242 14.4454 11.6725 14.4712 11.8183 14.5087L11.85 14.5154V13.7795L11.7925 13.767C11.6434 13.7313 11.4923 13.7043 11.34 13.6862C11.1426 13.6604 10.9427 13.6595 10.745 13.6837C10.495 13.7062 10.2575 13.8029 10.0608 13.9587C9.9275 14.0637 9.82666 14.2029 9.76834 14.362C9.68166 14.6037 9.68084 14.8687 9.76834 15.1112C9.81334 15.232 9.885 15.3395 9.97834 15.4287C10.0592 15.5062 10.1508 15.5729 10.2508 15.6254C10.3817 15.6954 10.5208 15.7495 10.665 15.7879C10.7125 15.802 10.76 15.817 10.8067 15.8329L10.8775 15.8587L10.8975 15.867C10.9675 15.892 11.0325 15.932 11.0858 15.9837C11.1233 16.0187 11.1525 16.062 11.17 16.1095C11.1815 16.1535 11.1818 16.1996 11.1708 16.2437C11.1483 16.3148 11.0986 16.3741 11.0325 16.4087C10.9607 16.4454 10.8832 16.4696 10.8033 16.4804C10.6857 16.4987 10.5664 16.5045 10.4475 16.4979C10.2918 16.4857 10.1368 16.4651 9.98334 16.4362C9.90331 16.4189 9.82359 16.4002 9.74416 16.3804L9.71666 16.3754ZM7.65416 17.2045H8.52916V13.732H7.65416V17.2045ZM17.7892 14.7579C17.8821 14.6821 17.9891 14.6255 18.1039 14.5911C18.2188 14.5568 18.3393 14.5454 18.4585 14.5576C18.5778 14.5698 18.6935 14.6054 18.799 14.6624C18.9044 14.7193 18.9977 14.7965 19.0733 14.8895C19.1492 14.9824 19.206 15.0893 19.2405 15.2041C19.275 15.319 19.2865 15.4395 19.2743 15.5587C19.2622 15.678 19.2266 15.7937 19.1697 15.8993C19.1127 16.0048 19.0355 16.098 18.9425 16.1737L18.9283 16.1854C18.7385 16.3309 18.4992 16.3961 18.2618 16.3671C18.0244 16.3381 17.8079 16.2172 17.6587 16.0302C17.5095 15.8433 17.4396 15.6053 17.464 15.3674C17.4884 15.1295 17.6052 14.9106 17.7892 14.7579ZM16.5183 15.4695C16.5226 15.7405 16.5871 16.0073 16.7071 16.2503C16.8272 16.4933 16.9998 16.7066 17.2125 16.8747C17.4251 17.0428 17.6725 17.1614 17.9367 17.2221C18.2009 17.2827 18.4753 17.2839 18.74 17.2254C19.0952 17.1581 19.4216 16.9845 19.6758 16.7275C19.9301 16.4705 20.1002 16.1423 20.1635 15.7864C20.2269 15.4305 20.1806 15.0637 20.0307 14.7348C19.8807 14.4058 19.6343 14.1302 19.3242 13.9445C19.0484 13.774 18.7325 13.6795 18.4084 13.6705C18.0843 13.6614 17.7637 13.7382 17.4788 13.893C17.194 14.0478 16.9551 14.2751 16.7864 14.552C16.6178 14.8289 16.5253 15.1454 16.5183 15.4695ZM21.1342 10.9412C21.1391 11.0527 21.1868 11.158 21.2675 11.2352C21.3481 11.3124 21.4554 11.3555 21.5671 11.3555C21.6787 11.3555 21.7861 11.3124 21.8667 11.2352C21.9473 11.158 21.9951 11.0527 22 10.9412V9.97867C21.9951 9.86714 21.9473 9.76183 21.8667 9.68461C21.7861 9.60742 21.6787 9.56436 21.5671 9.56436C21.4554 9.56436 21.3481 9.60742 21.2675 9.68461C21.1868 9.76183 21.1391 9.86714 21.1342 9.97867V10.9412ZM18.7642 10.9412C18.7725 11.0505 18.8218 11.1527 18.9022 11.2273C18.9826 11.3018 19.0882 11.3432 19.1979 11.3432C19.3076 11.3432 19.4132 11.3018 19.4936 11.2273C19.5741 11.1527 19.6234 11.0505 19.6317 10.9412V8.78367C19.6248 8.67339 19.5762 8.56989 19.4957 8.4942C19.4152 8.41855 19.3088 8.37639 19.1983 8.37639C19.0878 8.37639 18.9815 8.41855 18.901 8.4942C18.8205 8.56989 18.7718 8.67339 18.765 8.78367V10.9412M16.3592 11.8104C16.3675 11.9195 16.4167 12.0215 16.4969 12.0959C16.5772 12.1703 16.6826 12.2116 16.7921 12.2116C16.9015 12.2116 17.0069 12.1703 17.0872 12.0959C17.1675 12.0215 17.2167 11.9195 17.225 11.8104V7.14286C17.2201 7.03133 17.1723 6.92598 17.0917 6.8488C17.0111 6.77161 16.9037 6.72852 16.7921 6.72852C16.6804 6.72852 16.5731 6.77161 16.4925 6.8488C16.4118 6.92598 16.3641 7.03133 16.3592 7.14286V11.8104ZM13.9942 10.9412C14.001 11.0515 14.0497 11.155 14.1302 11.2307C14.2107 11.3063 14.317 11.3485 14.4275 11.3485C14.538 11.3485 14.6443 11.3063 14.7248 11.2307C14.8053 11.155 14.854 11.0515 14.8608 10.9412V8.78367C14.8559 8.67214 14.8082 8.56683 14.7275 8.48961C14.6469 8.41242 14.5396 8.36936 14.4279 8.36936C14.3163 8.36936 14.2089 8.41242 14.1283 8.48961C14.0477 8.56683 13.9999 8.67214 13.995 8.78367V10.9412M11.5783 10.9412C11.5889 11.0487 11.6391 11.1484 11.7191 11.2209C11.7991 11.2935 11.9032 11.3337 12.0112 11.3337C12.1192 11.3337 12.2234 11.2935 12.3034 11.2209C12.3834 11.1484 12.4336 11.0487 12.4442 10.9412V9.97867C12.4393 9.86714 12.3915 9.76183 12.3109 9.68461C12.2302 9.60742 12.1229 9.56436 12.0112 9.56436C11.8996 9.56436 11.7923 9.60742 11.7116 9.68461C11.631 9.76183 11.5832 9.86714 11.5783 9.97867V10.9412ZM9.18666 10.9412C9.19156 11.0527 9.23931 11.158 9.31997 11.2352C9.40063 11.3124 9.50794 11.3555 9.61959 11.3555C9.73122 11.3555 9.83856 11.3124 9.91922 11.2352C9.99984 11.158 10.0476 11.0527 10.0525 10.9412V8.78367C10.0476 8.67214 9.99984 8.56683 9.91922 8.48961C9.83856 8.41242 9.73122 8.36936 9.61959 8.36936C9.50794 8.36936 9.40063 8.41242 9.31997 8.48961C9.23931 8.56683 9.19156 8.67214 9.18666 8.78367V10.9412ZM6.78084 11.8104C6.78572 11.9219 6.83347 12.0272 6.91412 12.1044C6.99478 12.1816 7.10213 12.2247 7.21375 12.2247C7.32538 12.2247 7.43272 12.1816 7.51337 12.1044C7.59403 12.0272 7.64178 11.9219 7.64666 11.8104V7.14286C7.64178 7.03133 7.59403 6.92598 7.51337 6.8488C7.43272 6.77161 7.32538 6.72852 7.21375 6.72852C7.10213 6.72852 6.99478 6.77161 6.91412 6.8488C6.83347 6.92598 6.78572 7.03133 6.78084 7.14286V11.8104ZM4.39667 10.9412C4.40618 11.0495 4.45595 11.1504 4.53617 11.2239C4.61638 11.2974 4.72122 11.3381 4.83 11.3381C4.93878 11.3381 5.04362 11.2974 5.12383 11.2239C5.20406 11.1504 5.25381 11.0495 5.26334 10.9412V8.78367C5.25844 8.67214 5.21069 8.56683 5.13003 8.48961C5.04938 8.41242 4.94206 8.36936 4.83042 8.36936C4.71878 8.36936 4.61145 8.41242 4.5308 8.48961C4.45014 8.56683 4.40239 8.67214 4.3975 8.78367V10.9412M2 10.9412C2.0083 11.0503 2.05751 11.1523 2.13778 11.2267C2.21806 11.3011 2.32347 11.3424 2.43292 11.3424C2.54237 11.3424 2.64778 11.3011 2.72805 11.2267C2.80832 11.1523 2.85753 11.0503 2.86583 10.9412V9.97867C2.86094 9.86714 2.81319 9.76183 2.73254 9.68461C2.65188 9.60742 2.54455 9.56436 2.43292 9.56436C2.32128 9.56436 2.21395 9.60742 2.1333 9.68461C2.05264 9.76183 2.00489 9.86714 2 9.97867V10.9412Z"
        fill="#323544"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCiscoIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
