import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-startdotgg-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>start.gg</title>
      <path
        d="M6 0A5.999 5.999 0 00.002 6v5.252a.75.75 0 00.75.748H5.25a.748.748 0 00.75-.747V6.749C6 6.334 6.336 6 6.748 6h16.497a.748.748 0 00.749-.748V.749A.743.743 0 0023.247 0zm12.75 12a.748.748 0 00-.75.75v4.5a.748.748 0 01-.747.748H.753a.754.754 0 00-.75.751v4.5a.75.75 0 00.75.751H18a5.999 5.999 0 005.999-6v-5.25a.75.75 0 00-.75-.75z"
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
export class SvgStartdotggIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
