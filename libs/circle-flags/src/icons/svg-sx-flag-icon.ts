import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sx-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#d80027" d="M0 0h512v256l-265 45.2z" />
        <path fill="#0052b4" d="M210 256h302v256H0z" />
        <path fill="#eee" d="M0 0v512l256-256z" />
        <g fill="#ffda44">
          <path d="M28 256a73.1 73.1 0 0 0-.2 5.6 72.3 72.3 0 1 0 144.5-5.6z" />
          <circle cx="100.2" cy="200.3" r="22.3" />
        </g>
        <path
          fill="#d80027"
          d="M50 194.8V267c0 38.4 50.2 50 50.2 50s50-11.6 50-50v-72.3h-100z"
        />
        <path
          fill="#338af3"
          d="M100.2 294c-9.3-3.4-28-12-28-27v-50H128v50c0 15-18.6 23.6-27.8 26.9z"
        />
        <path
          fill="#eee"
          d="M111.3 244.9v-11.2l-11.1-5.5-11.2 5.5V245l-5.5 5.5v22.3h33.4v-22.3z"
        />
      </g>
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
export class SvgSxFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
