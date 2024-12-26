import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-manageiq-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ManageIQ</title>
      <path
        d="M12.095.1C5.718.094.544 5.26.538 11.637v.022c0 2.069.547 4.005 1.496 5.683l2.869-2.868a7.685 7.685 0 0 1-.54-2.815c0-4.262 3.47-7.73 7.732-7.73s7.732 3.468 7.732 7.73-3.47 7.732-7.732 7.732a7.685 7.685 0 0 1-2.6-.46L6.596 21.83a11.515 11.515 0 0 0 5.499 1.388c2.316 0 4.467-.686 6.275-1.856l2.393 2.392L24 20.512l-2.349-2.349c1.262-1.852 2-4.09 2-6.505C23.66 5.269 18.452.078 12.096.101L12.095.1zm0 9.34c-1.225 0-2.214.991-2.214 2.217s.989 2.215 2.214 2.215a2.216 2.216 0 1 0 0-4.432zm-4.24 3.368C7.57 13.09.273 20.39 0 20.662L3.24 23.9l7.855-7.855-3.24-3.238v.001z"
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
export class SvgManageiqIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
