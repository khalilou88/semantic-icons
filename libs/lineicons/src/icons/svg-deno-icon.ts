import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-deno-icon',
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
        d="M22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12ZM7.06285 5.38175C7.31929 5.45093 7.47261 5.71195 7.41011 5.96851L7.40706 5.98039L6.743 8.44133L6.73972 8.45308C6.66464 8.70625 6.40081 8.85472 6.14441 8.78552C5.88796 8.71632 5.73464 8.45531 5.79714 8.19875L5.80019 8.18687L6.46425 5.72593L6.46753 5.71418C6.54261 5.46097 6.80644 5.31253 7.06285 5.38175ZM15.5953 5.84695C15.8518 5.91613 16.0051 6.17715 15.9425 6.43371L15.9395 6.44558L15.4178 8.37894L15.3749 8.34691C15.1154 8.15549 14.8395 7.98742 14.5505 7.84465L14.9967 6.19113L15 6.17937C15.0751 5.92617 15.3389 5.77773 15.5953 5.84695ZM11.2521 3.07227C11.2682 3.14487 11.2673 3.22019 11.2497 3.29242L11.2466 3.30429L10.5825 5.76523L10.5793 5.77699C10.5042 6.03019 10.2404 6.17863 9.98395 6.10941C9.72755 6.04023 9.57421 5.77921 9.63668 5.52265L9.63975 5.51078L10.2587 3.21641L10.3238 3.20343C10.6307 3.14357 10.9407 3.09979 11.2521 3.07227ZM17.3627 4.77219L17.4203 4.8148C17.6883 5.01471 17.9451 5.22935 18.1893 5.45773L18.175 5.51019L18.1717 5.52195C18.0967 5.77515 17.8328 5.92359 17.5764 5.85437C17.32 5.78519 17.1667 5.52418 17.2291 5.26761L17.2322 5.25578L17.3627 4.77219ZM13.4991 3.1525L13.5685 3.16402C13.8669 3.21466 14.1625 3.28043 14.4543 3.36109L14.2064 4.27973L14.2031 4.29148C14.128 4.54469 13.8642 4.69312 13.6078 4.62391C13.3513 4.55473 13.198 4.29371 13.2605 4.03715L13.2635 4.02527L13.4991 3.1525ZM11.8307 16.9145C11.896 16.9321 11.957 16.9631 12.0097 17.0055C12.0624 17.048 12.1057 17.1009 12.1368 17.161L12.1513 17.2327L12.1743 17.3475L12.1901 17.4272L12.1881 17.4457C12.1858 17.4643 12.1824 17.4829 12.1779 17.5013L12.1748 17.5133L11.5108 19.9742L11.5075 19.9859C11.4324 20.2391 11.1686 20.3876 10.9122 20.3183C10.6557 20.2492 10.5024 19.9881 10.5649 19.7316L10.5679 19.7197L11.232 17.2588L11.2353 17.247C11.3104 16.9939 11.5742 16.8454 11.8307 16.9145ZM7.20328 14.3802C7.45059 14.5968 7.73363 14.7895 8.04899 14.9565L7.44687 17.1879L7.44359 17.1997C7.36852 17.4529 7.10469 17.6013 6.84828 17.5321C6.59184 17.4629 6.43851 17.2019 6.50101 16.9453L6.50407 16.9334L7.16813 14.4725L7.17273 14.4564C7.1809 14.4298 7.19117 14.4043 7.20328 14.3802ZM5.61973 11.5502C5.87617 11.6194 6.02945 11.8804 5.96695 12.1369L5.96391 12.1488L5.29985 14.6097L5.29656 14.6215C5.22149 14.8747 4.95766 15.0231 4.70125 14.9539C4.44481 14.8847 4.29149 14.6237 4.35399 14.3672L4.35703 14.3553L5.02109 11.8944L5.02441 11.8826C5.09945 11.6294 5.36328 11.481 5.61973 11.5502ZM20.5097 10.9913C20.7661 11.0605 20.9193 11.3215 20.8569 11.5781L20.8538 11.5899L20.1897 14.0509L20.1865 14.0627C20.1114 14.3159 19.8476 14.4643 19.5911 14.3951C19.3347 14.3259 19.1814 14.0649 19.2439 13.8083L19.2469 13.7965L19.911 11.3355L19.9143 11.3237C19.9893 11.0705 20.2532 10.9221 20.5097 10.9913ZM4.17355 7.70512C4.2125 7.70623 4.25121 7.71192 4.28883 7.72207C4.54527 7.79125 4.69859 8.05227 4.63609 8.30883L4.63305 8.32071L3.96899 10.7817L3.96567 10.7934C3.89063 11.0466 3.6268 11.1951 3.37035 11.1258C3.27755 11.1009 3.19421 11.0491 3.13086 10.9769C3.2633 9.82907 3.61742 8.71787 4.17355 7.70512ZM18.8277 7.72207C19.0841 7.79125 19.2374 8.05227 19.1749 8.30883L19.1719 8.32071L18.5078 10.7817L18.5045 10.7934C18.4295 11.0466 18.1656 11.1951 17.9092 11.1258C17.6527 11.0567 17.4995 10.7956 17.5619 10.5391L17.565 10.5272L18.2291 8.06625L18.2323 8.05449C18.3074 7.80129 18.5713 7.65285 18.8277 7.72207ZM9.11007 18.1058C9.36653 18.175 9.5198 18.436 9.45733 18.6926L9.45427 18.7045L8.979 20.4657L8.9126 20.4412C8.62644 20.3344 8.34597 20.213 8.07227 20.0774L8.51145 18.45L8.51477 18.4383C8.58981 18.1851 8.85367 18.0367 9.11007 18.1058ZM11.6641 7.68164C13.0628 7.68164 14.2626 8.06887 15.2069 8.80736C16.3807 9.72536 16.8243 10.989 17.2038 12.3603L18.7264 18.0385C17.2989 19.6082 15.3506 20.649 13.2436 20.9275C13.1172 20.068 12.9535 19.2115 12.7904 18.3581L12.7657 18.2289C12.7352 18.0695 12.7036 17.9023 12.6714 17.7328L12.6709 17.73C12.5014 16.8356 12.3201 15.8787 12.2451 15.67C12.1558 15.4216 12.0765 15.2373 11.8021 15.2432C8.57551 15.3119 6.49414 13.939 6.49414 11.7889C6.49414 9.51229 8.75615 7.68164 11.6641 7.68164Z"
        fill="#323544"
      />
      <path
        d="M12.2891 9.32617C12.6343 9.32617 12.9141 9.60597 12.9141 9.95117C12.9141 10.2964 12.6343 10.5762 12.2891 10.5762C11.9439 10.5762 11.6641 10.2964 11.6641 9.95117C11.6641 9.60597 11.9439 9.32617 12.2891 9.32617Z"
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
export class SvgDenoIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
