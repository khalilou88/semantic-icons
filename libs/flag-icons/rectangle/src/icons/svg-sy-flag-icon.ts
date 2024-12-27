import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sy-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-sy"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#000001" d="M0 0h640v480H0Z" />
      <path fill="#fff" d="M0 0h640v320H0Z" />
      <path fill="#ce1126" d="M0 0h640v160H0Z" />
      <path
        fill="#007a3d"
        d="m161 300 39-120 39 120-102-74.2h126M401 300l39-120 39 120-102-74.2h126"
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
export class SvgSyFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
