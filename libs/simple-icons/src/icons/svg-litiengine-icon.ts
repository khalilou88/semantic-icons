import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-litiengine-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LITIENGINE</title>
      <path
        d="m0 12.018 2.09 2.088L11.987 24l2.146-2.146-9.897-9.893 6.586-6.582-2.09-2.089Zm13.211 6.624 2.08 2.078 5.425-5.422-2.08-2.078zM9.85 2.151l6.606 6.602L9.9 15.306l2.134 2.133 6.555-6.553 3.258 3.257L24 11.993 12 0Zm-3.276 9.853 2.035 2.034 5.453-5.45-2.035-2.035z"
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
export class SvgLitiengineIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
