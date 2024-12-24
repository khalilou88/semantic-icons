import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-bb-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bb"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#00267f" d="M0-.2h512V512H0z" />
      <path fill="#ffc726" d="M170.7-.2h170.6V512H170.7z" />
      <path
        id="bb-a"
        fill="#000001"
        d="M256 173.3c-5.5 15.1-11.2 30.9-23.3 43a51.7 51.7 0 0 1 14.6-2.3v63.6l-18 2.7c-.7 0-.9-1-.9-2.4a243.6 243.6 0 0 0-11.7-53.6c-.4-2.3-7.2-11.3-2-9.7.7 0 7.7 3 6.6 1.6a68 68 0 0 0-37.1-19.2c-1.2-.3-2 .3-.9 1.7 18 27.7 33.1 60.4 33 99.2 7 0 24-4.1 31-4.1v44.9h8.8l2-125.4z"
      />
      <use
        xlink:href="#bb-a"
        width="100%"
        height="100%"
        transform="matrix(-1 0 0 1 512 0)"
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
export class SvgBbFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
