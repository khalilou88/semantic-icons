import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-tinygrad-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>tinygrad</title>
      <path
        d="M1.846 7.385V9.23H0v1.846h1.846v3.692h3.692v-1.846H3.692v-1.846h1.846V9.23H3.692V7.385zm5.539 0V9.23H9.23V7.385zm3.692 1.846v5.538h1.846v-3.692h1.846V9.23h-1.846zm3.692 1.846v3.692h1.846v-3.692zm3.693-1.846v3.692h3.692v1.846H24V9.231h-1.846v1.846h-1.846V9.23Zm3.692 5.538h-3.692v1.846h3.692zm-14.77-3.692v3.692h1.847v-3.692z"
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
export class SvgTinygradIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
