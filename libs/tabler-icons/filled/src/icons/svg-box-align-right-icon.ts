import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-box-align-right-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-box-align-right"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M18.998 3.003h-5a1 1 0 0 0 -1 1v16a1 1 0 0 0 1 1h5a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z"
      />
      <path
        d="M9.008 19.003a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z"
      />
      <path
        d="M4.008 19.003a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
      />
      <path
        d="M4.008 14.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
      />
      <path
        d="M4.008 8.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
      />
      <path
        d="M4.008 3.002a1 1 0 0 1 .117 1.993l-.128 .007a1 1 0 0 1 -.117 -1.993l.128 -.007z"
      />
      <path
        d="M9.008 3.002a1 1 0 0 1 .117 1.993l-.127 .007a1 1 0 0 1 -.117 -1.993l.127 -.007z"
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
export class SvgBoxAlignRightIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
