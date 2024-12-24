import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-figma-icon',
  standalone: true,
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
        d="M17.2563 8.86992C18.2726 8.20325 18.9474 7.04878 18.9474 5.73984C18.9474 3.6748 17.2644 2 15.2075 2H8.78476C6.71972 2 5.04492 3.68293 5.04492 5.73984C5.04492 7.04878 5.71972 8.20325 6.73598 8.86992C5.71972 9.53659 5.04492 10.6911 5.04492 12C5.04492 13.3089 5.71972 14.4634 6.73598 15.1301C5.71972 15.7967 5.04492 16.9512 5.04492 18.2602C5.04492 20.3252 6.73598 22 8.80915 22C10.9067 22 12.614 20.3008 12.614 18.2195V14.7642C13.2807 15.3659 14.1669 15.7398 15.1344 15.7398H15.2157C17.2807 15.7398 18.9555 14.0569 18.9555 12C18.9474 10.6911 18.2726 9.53659 17.2563 8.86992ZM11.3864 18.2195C11.3864 19.626 10.2319 20.7805 8.80915 20.7805C7.41078 20.7805 6.27256 19.6504 6.27256 18.2602C6.27256 16.8699 7.40265 15.748 8.78476 15.7398H11.3864V18.2195ZM11.3864 14.5203H8.78476C7.39452 14.5203 6.27256 13.3902 6.27256 12C6.27256 10.6098 7.40265 9.47967 8.79289 9.47967H11.3945V14.5203H11.3864ZM11.3864 8.26016H8.78476C7.39452 8.26016 6.26443 7.13008 6.26443 5.73984C6.26443 4.34959 7.39452 3.21951 8.78476 3.21951H11.3864V8.26016ZM12.6059 3.21951H15.2075C16.5978 3.21951 17.7278 4.34959 17.7278 5.73984C17.7278 7.13008 16.5978 8.26016 15.2075 8.26016H12.6059V3.21951ZM15.2075 14.5203H15.1262C13.736 14.5203 12.6059 13.3902 12.6059 12C12.6059 10.6098 13.736 9.47967 15.1262 9.47967H15.2075C16.5978 9.47967 17.7278 10.6098 17.7278 12C17.7278 13.3902 16.5978 14.5203 15.2075 14.5203Z"
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
export class SvgFigmaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
