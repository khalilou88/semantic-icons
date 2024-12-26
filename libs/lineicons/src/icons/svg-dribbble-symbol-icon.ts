import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-dribbble-symbol-icon',
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
        d="M11.9835 2C6.46282 2 2 6.46281 2 11.9835C2 17.5041 6.46282 22 11.9835 22C17.5041 22 22 17.5041 22 11.9835C22 6.46281 17.5041 2 11.9835 2ZM20.4793 12.281C18.5289 12.1488 16.4793 12.3471 14.4628 12.843C14.1653 12.0496 13.8678 11.2893 13.5372 10.5289C15.6198 9.83471 17.5703 8.80992 19.2562 7.58678C20.0496 8.87603 20.4793 10.3967 20.4793 12.0165C20.5124 12.0826 20.4793 12.1818 20.4793 12.281ZM18.3636 6.36364C16.7769 7.55372 14.8926 8.5124 12.876 9.1405C11.8182 7.02479 10.6281 5.23967 9.37191 3.85124C10.1984 3.58678 11.0579 3.45455 11.9835 3.45455C14.5289 3.4876 16.8099 4.61157 18.3636 6.36364ZM7.91736 4.5124C9.17356 5.7686 10.3636 7.4876 11.4215 9.57025C8.80992 10.1983 6.13224 10.2975 3.71901 9.86777C4.34711 7.55372 5.86778 5.63636 7.91736 4.5124ZM3.4876 11.3223C4.57851 11.5537 5.70249 11.6529 6.82645 11.6529C8.54546 11.6529 10.3306 11.4215 12.0827 10.9587C12.4132 11.6859 12.7438 12.4463 13.0083 13.2397C10.0992 14.1653 7.52067 15.6198 5.47108 17.5041C4.24793 15.9835 3.4876 14.0661 3.4876 11.9835C3.4876 11.7521 3.4876 11.5537 3.4876 11.3223ZM6.52893 18.5289C8.41323 16.8099 10.8265 15.4545 13.5041 14.6281C13.6033 14.9587 13.7025 15.2893 13.8017 15.5868C14.2314 17.0744 14.562 18.562 14.7934 19.9835C13.9008 20.281 12.9752 20.4793 11.9835 20.4793C9.90083 20.5124 8.01654 19.7521 6.52893 18.5289ZM16.2149 19.3554C15.9835 18 15.6529 16.5785 15.2562 15.157C15.157 14.8264 15.0579 14.5289 14.9587 14.1983C16.7438 13.7686 18.595 13.6033 20.3141 13.7025C19.8182 16.1488 18.2645 18.1653 16.2149 19.3554Z"
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
export class SvgDribbbleSymbolIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
