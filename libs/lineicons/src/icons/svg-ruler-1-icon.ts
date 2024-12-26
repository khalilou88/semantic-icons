import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ruler-1-icon',
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
        d="M17.1504 2.65608C16.2717 1.7774 14.8471 1.7774 13.9684 2.65608L12.7822 3.84234C12.7737 3.85005 12.7654 3.85799 12.7573 3.86615C12.7491 3.87432 12.7412 3.88263 12.7335 3.89107L10.6855 5.93902C10.6771 5.94673 10.6688 5.95467 10.6606 5.96283C10.6524 5.971 10.6445 5.97931 10.6368 5.98775L3.15901 13.4655C2.28033 14.3442 2.28033 15.7688 3.15901 16.6475L7.85255 21.341C8.73122 22.2197 10.1558 22.2197 11.0345 21.341L21.844 10.5316C22.7226 9.65292 22.7226 8.2283 21.844 7.34962L17.1504 2.65608ZM12.4954 8.85826C12.7882 9.15116 13.2631 9.15116 13.556 8.85826C13.8489 8.56537 13.8489 8.0905 13.556 7.7976L12.2521 6.49371L13.2881 5.45769L16.4268 8.59635C16.7197 8.88925 17.1946 8.88925 17.4875 8.59635C17.7804 8.30346 17.7804 7.82858 17.4875 7.53569L14.3488 4.39703L15.0291 3.71674C15.322 3.42385 15.7969 3.42385 16.0898 3.71674L20.7833 8.41028C21.0762 8.70317 21.0762 9.17804 20.7833 9.47094L9.97386 20.2804C9.68097 20.5733 9.2061 20.5733 8.91321 20.2804L4.21967 15.5868C3.92678 15.2939 3.92678 14.8191 4.21967 14.5262L4.89899 13.8469L8.03911 16.987C8.332 17.2799 8.80688 17.2799 9.09977 16.987C9.39266 16.6941 9.39266 16.2192 9.09977 15.9263L5.95965 12.7862L6.99591 11.7499L8.30151 13.0555C8.5944 13.3484 9.06928 13.3484 9.36217 13.0555C9.65506 12.7626 9.65506 12.2878 9.36217 11.9949L8.05657 10.6893L9.09259 9.65325L12.233 12.7936C12.5259 13.0865 13.0007 13.0865 13.2936 12.7936C13.5865 12.5007 13.5865 12.0259 13.2936 11.733L10.1533 8.59259L11.1915 7.55437L12.4954 8.85826Z"
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
export class SvgRuler1Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
