import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-az-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-az"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#3f9c35" d="M0 0h512v512H0z" />
      <path fill="#ed2939" d="M0 0h512v341.3H0z" />
      <path fill="#00b9e4" d="M0 0h512v170.7H0z" />
      <circle cx="238.8" cy="256" r="76.8" fill="#fff" />
      <circle cx="255.9" cy="256" r="64" fill="#ed2939" />
      <path
        fill="#fff"
        d="m324.2 213.3 8.1 23 22-10.5-10.4 22 23 8.2-23 8.2 10.4 22-22-10.5-8.1 23-8.2-23-22 10.5 10.5-22-23-8.2 23-8.2-10.5-22 22 10.5z"
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
export class SvgAzFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
