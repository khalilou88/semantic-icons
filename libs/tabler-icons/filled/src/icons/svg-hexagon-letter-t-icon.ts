import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-hexagon-letter-t-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-hexagon-letter-t"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M13.666 1.429l6.75 3.98l.096 .063l.093 .078l.106 .074a3.22 3.22 0 0 1 1.284 2.39l.005 .204v7.284c0 1.175 -.643 2.256 -1.623 2.793l-6.804 4.302c-.98 .538 -2.166 .538 -3.2 -.032l-6.695 -4.237a3.23 3.23 0 0 1 -1.678 -2.826v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098c1 -.552 2.214 -.552 3.24 .015m.334 5.571h-4a1 1 0 1 0 0 2h1v7a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-7h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1"
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
export class SvgHexagonLetterTIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
