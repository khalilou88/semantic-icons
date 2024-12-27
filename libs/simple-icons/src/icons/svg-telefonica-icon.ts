import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-telefonica-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Telef&#243;nica</title>
      <path
        d="M7.162 3.581a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0M15.581 12a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m0 8.419a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0"
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
export class SvgTelefonicaIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
