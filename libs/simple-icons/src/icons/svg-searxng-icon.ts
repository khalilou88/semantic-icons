import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-searxng-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SearXNG</title>
      <path
        d="m13.716 17.261 6.873 6.582L24 20.282l-6.824-6.536a9.11 9.11 0 0 0 1.143-4.43c0-5.055-4.105-9.159-9.16-9.159S0 4.261 0 9.316c0 5.055 4.104 9.159 9.159 9.159a9.11 9.11 0 0 0 4.557-1.214ZM9.159 2.773a6.546 6.546 0 0 1 6.543 6.543 6.545 6.545 0 0 1-6.543 6.542 6.545 6.545 0 0 1-6.542-6.542 6.545 6.545 0 0 1 6.542-6.543ZM7.26 5.713a4.065 4.065 0 0 1 4.744.747 4.064 4.064 0 0 1 .707 4.749l1.157.611a5.376 5.376 0 0 0-.935-6.282 5.377 5.377 0 0 0-6.274-.987l.601 1.162Z"
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
export class SvgSearxngIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
