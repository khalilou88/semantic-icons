import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-scuba-diving-tank-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-scuba-diving-tank"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 17v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-2z" />
      <path
        d="M8 2a2 2 0 0 1 1.732 1h1.15a1.496 1.496 0 0 1 2.236 0h1.882a1 1 0 0 1 0 2l-1.883 .001a2 2 0 0 1 -.115 .116v.983a5 5 0 0 1 3.998 4.9v4h-10v-4a5 5 0 0 1 4 -4.9v-.983a2 2 0 0 1 -.117 -.116h-1.151a2 2 0 1 1 -1.732 -3.001"
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
export class SvgScubaDivingTankIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
