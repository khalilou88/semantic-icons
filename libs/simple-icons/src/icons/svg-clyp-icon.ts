import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-clyp-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Clyp</title>
      <path
        d="M11.9995 17.9583a1.137 1.137 0 01-1.137-1.136V7.2347a1.138 1.138 0 012.275 0v9.5896c0 .626-.51 1.134-1.138 1.134m7.4397 2.4398a1.137 1.137 0 01-1.14-1.1379V4.7958a1.138 1.138 0 012.276 0v14.4654c0 .627-.51 1.136-1.138 1.136M15.7193 24a1.137 1.137 0 01-1.138-1.136V1.138a1.138 1.138 0 012.276 0v21.726c0 .627-.509 1.136-1.138 1.136m-7.4366-3.1599a1.137 1.137 0 01-1.138-1.136V4.2979a1.138 1.138 0 012.276 0v15.4064c0 .628-.51 1.137-1.138 1.137m-3.7199-4.9889a1.137 1.137 0 01-1.138-1.135V9.2857a1.138 1.138 0 012.276 0v5.4318c0 .626-.51 1.135-1.138 1.135z"
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
export class SvgClypIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
