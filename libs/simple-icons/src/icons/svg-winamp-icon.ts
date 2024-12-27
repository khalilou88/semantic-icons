import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-winamp-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Winamp</title>
      <path
        d="M11.902 0a.987.987 0 0 0-.91.604l-6.139 14.57c-.176.42.131.883.586.883H8.66a.987.987 0 0 0 .91-.604L15.707.883A.636.636 0 0 0 15.12 0h-3.219Zm3.438 7.943a.987.987 0 0 0-.91.604l-6.137 14.57c-.177.42.13.883.586.883h3.219a.987.987 0 0 0 .91-.604l6.138-14.57a.636.636 0 0 0-.586-.883h-3.22Z"
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
export class SvgWinampIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
