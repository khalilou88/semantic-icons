import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pointy-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Pointy</title>
      <path
        d="M8.076.025S4.52.234 2.833 2.751c-1.58 2.351-1.465 5.145-1.1 8.121C2.096 13.831 2.587 24 2.587 24c.002.003 11.235-11.526 11.23-11.506 1.75-1.805 2.408-4.468 2.395-5.961-.037-4.274-3.461-6.815-8.136-6.508zm.777 10.774c-1.991 0-3.604-1.632-3.604-3.645 0-2.015 1.614-3.649 3.604-3.649s3.642 1.512 3.642 3.527c0 2.011-1.652 3.767-3.642 3.767zm2.765-3.741a1.58 1.58 0 1 1-3.162 0 1.58 1.58 0 0 1 3.162 0zm10.879 1.431s-2.325.158-3.644.57c-1.317.413-2.502 1.076-2.502 1.076s.495-.852.705-2.361c.207-1.511-.14-2.652-.14-2.652l5.581 3.367Z"
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
export class SvgPointyIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
