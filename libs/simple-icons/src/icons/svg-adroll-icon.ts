import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-adroll-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Adroll</title>
      <path
        d="M24 12c0-6.01-4.727-10.886-10.886-10.886a10.863 10.863 0 0 0-9.508 5.578L8.914 12c0-2.323 1.958-4.2 4.2-4.2 2.377 0 4.2 1.877 4.2 4.2s-1.836 4.2-4.2 4.2H4.065A4.07 4.07 0 0 0 0 20.266v2.62h13.114C19.232 22.886 24 18.01 24 12"
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
export class SvgAdrollIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
