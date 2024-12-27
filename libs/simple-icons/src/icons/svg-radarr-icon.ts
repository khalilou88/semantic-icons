import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-radarr-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>radarr</title>
      <path
        d="M5.274 0C3.189.039 1.19 1.547 1.19 4.705l.184 14.518c0 1.47 1.103 2.205 2.573 2.021L3.764 3.786c0-1.654.919-1.838 2.022-1.103l14.7 8.27c1.103.734 1.655 1.47 1.838 2.756.92-1.654.552-4.043-1.286-5.33L7.991.846A4.559 4.559 0 0 0 5.274.001zm1.982 6.91-.184 10.107 9.004-5.146Zm13.598 6.064-15.068 8.82c-.92.552-2.022.736-3.124.368.918 1.47 3.307 2.389 5.145 1.47l12.68-7.35c1.102-.736 1.286-2.022.367-3.308z"
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
export class SvgRadarrIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
