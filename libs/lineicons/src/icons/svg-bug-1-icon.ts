import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-bug-1-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.13354 2.07934C9.50403 1.8941 9.95453 2.04427 10.1398 2.41475L10.6825 3.50024L10.7007 3.50016H13.3466C13.3989 3.50016 13.451 3.50198 13.5027 3.50557L14.0481 2.41475C14.2334 2.04427 14.6839 1.8941 15.0544 2.07934C15.4248 2.26459 15.575 2.71509 15.3898 3.08557L14.8805 4.10404C15.0738 4.28408 15.2369 4.49958 15.359 4.74393L16.238 6.50191C17.4392 6.54884 18.3986 7.53746 18.3986 8.75016V9.48177L19.7955 9.03571C20.1901 8.9097 20.6121 9.12743 20.7381 9.52201C20.8641 9.9166 20.6464 10.3386 20.2518 10.4646L18.3986 11.0564V13.1252H20.0236C20.4379 13.1252 20.7736 13.461 20.7736 13.8752C20.7736 14.2894 20.4379 14.6252 20.0236 14.6252H18.3986V15.6252C18.3986 15.9799 18.3697 16.3279 18.3139 16.6669L20.2518 17.2857C20.6464 17.4117 20.8641 17.8337 20.7381 18.2283C20.6121 18.6229 20.1901 18.8406 19.7955 18.7146L17.8969 18.1083C16.9287 20.3955 14.6636 22.0002 12.0236 22.0002C9.3837 22.0002 7.11855 20.3955 6.15035 18.1083L4.25179 18.7146C3.85721 18.8406 3.43519 18.6229 3.30918 18.2283C3.18318 17.8337 3.40091 17.4117 3.79549 17.2857L5.73333 16.6669C5.67762 16.3279 5.64864 15.9799 5.64864 15.6252V14.6252H4.02364C3.60943 14.6252 3.27364 14.2894 3.27364 13.8752C3.27364 13.461 3.60943 13.1252 4.02364 13.1252H5.64864V11.0564L3.79549 10.4646C3.40091 10.3386 3.18318 9.9166 3.30918 9.52201C3.43519 9.12743 3.85721 8.9097 4.25179 9.03571L5.64864 9.48177V8.75016C5.64864 7.53746 6.60804 6.54884 7.80924 6.50191L8.68823 4.74393C8.83049 4.45942 9.02818 4.21402 9.26443 4.01817L8.79813 3.08557C8.61289 2.71509 8.76306 2.26459 9.13354 2.07934ZM14.5601 6.50016L14.0174 5.41475C13.8904 5.16067 13.6307 5.00016 13.3466 5.00016H10.7007C10.4166 5.00016 10.1569 5.16067 10.0299 5.41475L9.48716 6.50016H14.5601ZM7.89864 8.00016C7.48443 8.00016 7.14864 8.33595 7.14864 8.75016V15.6252C7.14864 18.3176 9.33125 20.5002 12.0236 20.5002C14.716 20.5002 16.8986 18.3176 16.8986 15.6252V8.75016C16.8986 8.33595 16.5629 8.00016 16.1486 8.00016H7.89864Z"
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
export class SvgBug1Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
