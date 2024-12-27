import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-monoprix-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Monoprix</title>
      <path
        d="M21.072 8.042C21.072 3.612 16.981 0 12 0 6.991 0 2.928 3.612 2.928 8.042S6.99 16.085 12 16.085c.282 0 .564-.029.847-.043.62.339.747.706.761.988.142 1.608-2.44 5.08-4.303 6.49l.254.48c.113-.028 10.723-3.47 11.429-15.026.056-.283.07-.565.084-.875v-.043z"
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
export class SvgMonoprixIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
