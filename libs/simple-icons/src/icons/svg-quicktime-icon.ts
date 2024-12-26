import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-quicktime-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>QuickTime</title>
      <path
        d="M12.002 0a11.998 12 0 106.629 22l1.98 1.97h3.139l.25-.25v-3.15l-2-1.98A11.938 11.94 0 0024 12 11.998 12 0 0012.002 0m0 4.2a7.799 7.8 0 016.949 11.33l-5.25-5.26a2.404 2.404 0 10-3.4 3.4l5.27 5.26a7.759 7.76 0 01-3.57.87 7.799 7.8 0 010-15.6z"
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
export class SvgQuicktimeIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
