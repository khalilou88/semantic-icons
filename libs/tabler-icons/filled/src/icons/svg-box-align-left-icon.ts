import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-box-align-left-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-box-align-left"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M10.002 3.003h-5a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1 -1v-16a1 1 0 0 0 -1 -1z"
      />
      <path
        d="M15.002 19.003a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z"
      />
      <path
        d="M20.003 19.003a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
      />
      <path
        d="M20.003 14.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
      />
      <path
        d="M20.003 8.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
      />
      <path
        d="M20.003 3.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
      />
      <path
        d="M15.002 3.002a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z"
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
export class SvgBoxAlignLeftIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
