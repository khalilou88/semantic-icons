import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-datefns-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>date-fns</title>
      <path
        d="M1.065 6.534C.355 8.246 0 10.068 0 11.999c0 1.932.355 3.754 1.065 5.466a13.768 13.768 0 0 0 3.068 4.549h2.685c-2.784-2.756-4.176-6.094-4.176-10.015 0-3.92 1.392-7.258 4.176-10.014H4.133a13.768 13.768 0 0 0-3.068 4.549Zm21.869 10.931c.71-1.712 1.066-3.534 1.066-5.466 0-1.931-.356-3.753-1.066-5.465a13.768 13.768 0 0 0-3.068-4.549h-2.685c2.784 2.756 4.176 6.094 4.176 10.014 0 3.921-1.392 7.259-4.176 10.015h2.685a13.768 13.768 0 0 0 3.068-4.549ZM11.63 3.299H9.854v10.21h1.776v-.033l7.218-7.218-1.151-1.151-6.067 6.067V3.299Z"
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
export class SvgDatefnsIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
