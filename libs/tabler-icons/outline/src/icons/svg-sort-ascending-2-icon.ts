import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sort-ascending-2-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-sort-ascending-2"
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
      <path d="M14 9l3 -3l3 3" />
      <path
        d="M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z"
      />
      <path
        d="M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z"
      />
      <path d="M17 6v12" />
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
export class SvgSortAscending2Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
