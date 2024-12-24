import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-brand-kick-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-brand-kick"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M9 3a1 1 0 0 1 1 1v3h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h1v-1a1 1 0 0 1 .883 -.993l.117 -.007h6a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-1v1a1 1 0 0 1 -.883 .993l-.117 .007h-1v2h1a1 1 0 0 1 .993 .883l.007 .117v1h1a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-1h-1a1 1 0 0 1 -.993 -.883l-.007 -.117v-1h-1v3a1 1 0 0 1 -.883 .993l-.117 .007h-5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1z"
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
export class SvgBrandKickIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
