import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-netcup-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>netcup</title>
      <path
        d="M5.25 0A5.239 5.239 0 0 0 0 5.25v13.5A5.239 5.239 0 0 0 5.25 24h13.5A5.239 5.239 0 0 0 24 18.75V5.25A5.239 5.239 0 0 0 18.75 0H5.25zm-.045 5.102h9.482c1.745 0 2.631.907 2.631 2.753v8.352h1.477v2.691h-4.666V8.58c0-.514-.298-.785-.889-.785H9.873v11.103H6.682V7.795H5.205V5.102z"
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
export class SvgNetcupIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
