import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-calculator-1-icon',
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
        d="M13.7093 17.6096C13.4332 17.6096 13.2093 17.8334 13.2093 18.1096C13.2093 18.3857 13.4332 18.6096 13.7093 18.6096H16.2907C16.5668 18.6096 16.7907 18.3857 16.7907 18.1096C16.7907 17.8334 16.5668 17.6096 16.2907 17.6096H13.7093Z"
        fill="#323544"
      />
      <path
        d="M13.2093 16.6444C13.2093 16.3683 13.4332 16.1444 13.7093 16.1444H16.2907C16.5668 16.1444 16.7907 16.3683 16.7907 16.6444C16.7907 16.9206 16.5668 17.1444 16.2907 17.1444H13.7093C13.4332 17.1444 13.2093 16.9206 13.2093 16.6444Z"
        fill="#323544"
      />
      <path
        d="M13.6392 10.5163C13.4439 10.7116 13.4439 11.0282 13.6392 11.2234L14.2927 11.877L13.6392 12.5305C13.4439 12.7257 13.4439 13.0423 13.6392 13.2376C13.8344 13.4328 14.151 13.4328 14.3463 13.2376L14.9998 12.5841L15.6533 13.2376C15.8486 13.4328 16.1652 13.4328 16.3604 13.2376C16.5557 13.0423 16.5557 12.7257 16.3604 12.5305L15.7069 11.877L16.3604 11.2235C16.5557 11.0282 16.5557 10.7116 16.3604 10.5163C16.1652 10.3211 15.8486 10.3211 15.6533 10.5163L14.9998 11.1698L14.3463 10.5163C14.151 10.3211 13.8344 10.3211 13.6392 10.5163Z"
        fill="#323544"
      />
      <path
        d="M7.2093 17.377C7.2093 17.1008 7.43316 16.877 7.7093 16.877H10.2907C10.5668 16.877 10.7907 17.1008 10.7907 17.377C10.7907 17.6531 10.5668 17.877 10.2907 17.877H7.7093C7.43316 17.877 7.2093 17.6531 7.2093 17.377Z"
        fill="#323544"
      />
      <path
        d="M8.99988 10.0867C8.72374 10.0867 8.49988 10.3106 8.49988 10.5867V11.3769H7.70971C7.43357 11.3769 7.20971 11.6008 7.20971 11.8769C7.20971 12.1531 7.43357 12.3769 7.70971 12.3769H8.49988V13.1673C8.49988 13.4434 8.72374 13.6673 8.99988 13.6673C9.27603 13.6673 9.49988 13.4434 9.49988 13.1673V12.3769H10.2903C10.5664 12.3769 10.7903 12.1531 10.7903 11.8769C10.7903 11.6008 10.5664 11.3769 10.2903 11.3769H9.49988V10.5867C9.49988 10.3106 9.27603 10.0867 8.99988 10.0867Z"
        fill="#323544"
      />
      <path
        d="M4.5 4.25C4.5 3.00736 5.50736 2 6.75 2H17.25C18.4926 2 19.5 3.00736 19.5 4.25V19.75C19.5 20.9926 18.4926 22 17.25 22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V4.25ZM6.75 3.5C6.33579 3.5 6 3.83579 6 4.25V7.25H18V4.25C18 3.83579 17.6642 3.5 17.25 3.5H6.75ZM6 19.75C6 20.1642 6.33579 20.5 6.75 20.5H17.25C17.6642 20.5 18 20.1642 18 19.75V8.75H6V19.75Z"
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
export class SvgCalculator1Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
