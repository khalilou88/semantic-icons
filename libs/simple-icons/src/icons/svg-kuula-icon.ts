import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-kuula-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Kuula</title>
      <path
        d="M12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.388 12-12S18.612 0 12 0Zm0 2.547A9.433 9.433 0 0 1 21.453 12 9.433 9.433 0 0 1 12 21.453 9.433 9.433 0 0 1 2.547 12 9.433 9.433 0 0 1 12 2.547Zm-.606 5.366 4.372-.693 2.01 3.944-3.13 3.13-3.944-2.01z"
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
export class SvgKuulaIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
