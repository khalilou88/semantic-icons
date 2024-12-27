import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-us-wy-flag-icon',
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
        <path fill="#d80027" d="M0 0h512v512H0z" />
        <circle cx="256" cy="256" r="256" fill="#d80027" />
        <circle cx="256" cy="256" r="224" fill="#eee" />
        <circle cx="256" cy="256" r="208" fill="#0052b4" />
        <path
          fill="#eee"
          d="M163 128c-3 0-6 2-7 5 0 3 0 6 3 7v1a15 15 0 0 1 7 13 18 18 0 0 0-19 6c-2 2-4 3-7 3h-9c-11 0-20 9-20 20v14c0 9 7 16 15 16v12c0 3-2 7-4 9-4 4-6 9-6 14 0 10 6 17 15 20l14 23c3 4 9 4 12 0l3-5 2-1 8 14v14c0 12 7 22 16 27v35c0 4 3 8 8 8h14l4-1 2 1h15c2 0 4-2 4-4v-45c5-5 8-12 8-21h54l-18 60c-1 5 2 10 8 10h13c4 0 7-2 8-6l12-44c7 5 14 9 23 10v27c0 8 6 14 13 14h14c7 0 13-6 13-14V267c4-2 7-6 10-9v34a20 20 0 0 0 10 37V229c0-20-12-39-30-46-40-17-84-30-118-45-7-3-15-4-22-5-15 0-29 5-39 14-6-10-16-18-29-19z"
        />
        <circle cx="256" cy="230" r="64" fill="#0052b4" />
        <circle cx="256" cy="230" r="48" fill="#eee" />
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
export class SvgUsWyFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
