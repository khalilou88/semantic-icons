import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-shutterstock-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Shutterstock</title>
      <path
        d="M9.839 18.761h5.313a1.53 1.53 0 0 0 1.527-1.528v-5.76h5.237v5.76A6.767 6.767 0 0 1 15.152 24H9.839v-5.239M14.16 5.237H8.85a1.53 1.53 0 0 0-1.53 1.527v5.761H2.085V6.764A6.763 6.763 0 0 1 8.85 0h5.31v5.237Z"
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
export class SvgShutterstockIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
