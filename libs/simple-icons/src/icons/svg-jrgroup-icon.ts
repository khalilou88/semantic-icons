import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-jrgroup-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>JR Group</title>
      <path
        d="M19.955 13.653h1.089c2.684 0 2.684-4.123 2.684-4.123s0-4.162-2.684-4.162H9.18v8.869c0 1.556-3.112 1.478-3.112 1.478s-3.073.116-3.073-1.478v-3.423H0v4.395c0 3.19 5.68 3.384 6.107 3.423.428 0 6.107-.194 6.107-3.423V8.363h7.896c.661 0 .661 1.167.661 1.167s0 1.167-.66 1.167h-6.069l5.952 7.702H24Z"
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
export class SvgJrgroupIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
