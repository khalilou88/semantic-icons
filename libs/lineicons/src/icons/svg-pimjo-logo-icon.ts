import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pimjo-logo-icon',
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
        d="M8.16259 13.2084V9.53522H9.53248C9.78223 9.53522 10.0017 9.58063 10.1935 9.67398C10.3877 9.76227 10.5366 9.89346 10.6476 10.0675C10.756 10.2391 10.8115 10.4485 10.8115 10.6932C10.8115 10.9379 10.756 11.1448 10.6425 11.3189C10.534 11.4904 10.3852 11.6216 10.1935 11.7124C10.0017 11.8032 9.78223 11.8512 9.53248 11.8512H8.83366V13.2059H8.16259V13.2084ZM8.83366 11.2634H9.54509C9.66618 11.2634 9.77214 11.2406 9.86044 11.1952C9.94874 11.1473 10.0169 11.0792 10.0673 10.9934C10.1152 10.9076 10.1405 10.8092 10.1405 10.6982C10.1405 10.5872 10.1152 10.4838 10.0673 10.4031C10.0194 10.3173 9.94874 10.2517 9.86044 10.2063C9.77214 10.1584 9.66618 10.1331 9.54509 10.1331H8.83366V11.2659V11.2634Z"
        fill="#323544"
      />
      <path
        d="M11.248 13.2084V9.53522H11.919V13.2059H11.248V13.2084Z"
        fill="#323544"
      />
      <path
        d="M16.1045 9.53522V13.2059H15.4284V10.7109L14.2956 12.222H14.2174L13.0796 10.6654V13.2084H12.4086V9.53522H13.0494L14.2704 11.1927L15.4637 9.53522H16.107H16.1045Z"
        fill="#323544"
      />
      <path
        d="M16.5181 13.2084V12.5929H16.73C16.8864 12.5929 17.0125 12.5475 17.1033 12.4592C17.1992 12.3683 17.2471 12.2447 17.2471 12.0959V9.53522H17.9207V12.0681C17.9207 12.2952 17.8727 12.492 17.7718 12.666C17.676 12.8376 17.5397 12.9713 17.3581 13.0646C17.1815 13.1605 16.9696 13.2084 16.7274 13.2084H16.5155H16.5181Z"
        fill="#323544"
      />
      <path
        d="M20.166 9.53522C19.1518 9.53522 18.3318 10.3577 18.3318 11.3693C18.3318 12.381 19.1543 13.2034 20.166 13.2034C21.1776 13.2034 22 12.381 22 11.3693C22 10.3577 21.1776 9.53522 20.166 9.53522ZM20.166 12.5929C19.4923 12.5929 18.9449 12.0454 18.9449 11.3718C18.9449 10.6982 19.4923 10.1508 20.166 10.1508C20.8395 10.1508 21.387 10.6982 21.387 11.3718C21.387 12.0454 20.8395 12.5929 20.166 12.5929Z"
        fill="#323544"
      />
      <path
        d="M19.4497 11.3869C19.4497 11.5787 19.5254 11.7578 19.659 11.894C19.7928 12.0277 19.9744 12.1034 20.1662 12.1034C20.3579 12.1034 20.537 12.0277 20.6732 11.894C20.807 11.7603 20.8827 11.5787 20.8827 11.3869H19.4471H19.4497Z"
        fill="#323544"
      />
      <path
        d="M4.27305 8.97266C3.01669 8.97266 2 9.98935 2 11.2457V15.0274L3.40773 13.3497C3.67262 13.4607 3.96779 13.5213 4.27305 13.5213C5.52941 13.5213 6.54611 12.5046 6.54611 11.2457C6.54611 9.98683 5.52941 8.97266 4.27305 8.97266ZM4.27305 12.3179C3.68272 12.3179 3.20086 11.8386 3.20086 11.2457C3.20086 10.6528 3.68019 10.1735 4.27305 10.1735C4.86591 10.1735 5.34525 10.6528 5.34525 11.2457C5.34525 11.8386 4.86591 12.3179 4.27305 12.3179Z"
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
export class SvgPimjoLogoIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
