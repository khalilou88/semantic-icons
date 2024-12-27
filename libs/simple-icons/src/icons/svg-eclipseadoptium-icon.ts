import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-eclipseadoptium-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Eclipse Adoptium</title>
      <path
        d="m11.98 14.013-2.632 5.729 6.813 3.058c-1.55-2.754-2.82-5.852-4.18-8.787Zm11.033 4.645L16.277 4.064a3.952 3.952 0 0 1-.387 1.471l-3.6 7.82 3.871 8.361a3.76 3.76 0 0 0 3.445 2.245 3.734 3.734 0 0 0 3.755-3.755c0-.542-.155-1.045-.348-1.548zM15.735 3.755A3.734 3.734 0 0 0 11.982 0C10.51 0 9.27.852 8.65 2.052 6.119 7.582 3.544 13.127.988 18.658c-.232.464-.348 1.006-.348 1.587A3.734 3.734 0 0 0 4.394 24a3.76 3.76 0 0 0 3.445-2.245l7.587-16.413c.193-.503.31-1.045.31-1.587z"
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
export class SvgEclipseadoptiumIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
