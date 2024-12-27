import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-uv-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>uv</title>
      <path
        d="m0 .1058.0504 11.9496.0403 9.5597c.0055 1.3199 1.08 2.3854 2.4 2.3798l9.5596-.0403 5.9749-.0252.6075-.0026c1.316-.0056 2.3799-1.0963 2.3799-2.4123h1.0946v2.3894L24 23.9042 23.8992.005 12.9056.0513l.0463 9.5245v5.9637h-1.9583L11.04 9.584 10.9936.0594Z"
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
export class SvgUvIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
