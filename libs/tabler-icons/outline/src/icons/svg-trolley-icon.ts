import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-trolley-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-trolley"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M6 16l3 2" />
      <path d="M12 17l8 -12" />
      <path d="M17 10l2 1" />
      <path
        d="M9.592 4.695l3.306 2.104a1.3 1.3 0 0 1 .396 1.8l-3.094 4.811a1.3 1.3 0 0 1 -1.792 .394l-3.306 -2.104a1.3 1.3 0 0 1 -.396 -1.8l3.094 -4.81a1.3 1.3 0 0 1 1.792 -.394z"
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
export class SvgTrolleyIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
