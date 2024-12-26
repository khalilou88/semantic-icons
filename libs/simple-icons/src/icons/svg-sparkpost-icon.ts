import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sparkpost-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SparkPost</title>
      <path
        d="M16.2 9c-1.351.9-1.8 2.7-1.65 3.9-2.25-2.25 3.45-8.55-3-12.9C15.15 5.4 6 9.75 6 17.4c0 3 1.95 5.701 6 6.6 4.05-.898 6-3.6 6-6.6 0-4.5-2.7-6-1.8-8.4zM12 20.852c-1.8 0-3.45-1.5-3.45-3.451 0-1.801 1.5-3.45 3.45-3.45 1.8 0 3.45 1.5 3.45 3.45-.15 1.951-1.65 3.451-3.45 3.451z"
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
export class SvgSparkpostIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
