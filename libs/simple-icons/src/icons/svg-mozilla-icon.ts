import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-mozilla-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Mozilla</title>
      <path
        d="M0 0v24h24V0zm10.13 6.706c1.481 0 2.858.706 3.352 2.224.565-1.377 1.73-2.224 3.353-2.224 1.87 0 3.565 1.13 3.565 3.564v4.765h1.412v2.26h-4.341v-5.86c0-1.8-.6-2.47-1.765-2.47-1.412 0-1.976 1.024-1.976 2.435V15h1.376v2.259h-4.341v-5.824c0-1.8-.6-2.47-1.765-2.47-1.412 0-1.976 1.024-1.976 2.435V15H9v2.259H2.647V15h1.377V9.176H2.647V6.918H6.99V8.47c.635-1.095 1.693-1.765 3.14-1.765z"
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
export class SvgMozillaIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
