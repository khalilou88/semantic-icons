import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-us-betsy-ross-flag-icon',
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
        <path fill="#d80027" d="M312 0h200v512H0V273Z" />
        <path
          fill="#eee"
          d="M280 41v39h232V41Zm0 78v39h232v-39zm0 78v39h232v-39ZM0 275v39h512v-39H312l-156-64Zm0 78v39h512v-39zm0 78v39h512v-39z"
        />
        <path fill="#0052b4" d="M0 0h312v275H0Z" />
        <path
          fill="#eee"
          d="m260 176 2 17-15 6 16 4 1 16 9-14 16 3-11-12 8-14-15 7zm-144 0-11 12-15-6 8 14-11 12 17-3 8 14 1-16 16-4-15-6zm173-47-10 13-15-5 9 13-9 13 15-5 10 13v-16l15-5-15-5zm-201 0v16l-16 5 16 5v16l9-13 16 5-10-13 10-13-16 5zm177-48-2 16-16 4 15 6-2 17 11-12 15 6-8-14 11-12-16 3zm-153 0-8 14-17-3 11 12-8 14 15-6 11 12-2-17 15-6-16-4zm134-32-12 11-14-8 7 15-13 11 17-2 6 15 4-16 16-1-14-8zm-116 0 3 16-14 9 16 1 4 16 7-15 16 2-12-11 6-15-14 8zm58-15-5 15h-16l13 10-5 15 13-9 13 9-5-15 13-10h-16zm58 217-12-11-14 8 7-15-13-11 17 2 6-15 4 16 16 1-14 8zm-116 0 3-16-14-9 16-1 4-16 7 15 16-2-12 11 6 15-14-8zm58 15-5-15h-16l13-10-5-15 13 9 13-9-5 15 13 10h-16z"
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
export class SvgUsBetsyRossFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
