import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-scrollreveal-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ScrollReveal</title>
      <path
        d="M1.714 2.857A1.71 1.71 0 0 0 0 4.571v6.858c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714V4.57a1.71 1.71 0 0 0-1.715-1.714zm6.857 0a1.71 1.71 0 0 0-1.714 1.714v1.143c0 .95.765 1.715 1.714 1.715a1.71 1.71 0 0 0 1.715-1.715V4.571A1.71 1.71 0 0 0 8.57 2.857zm6.858 0a1.71 1.71 0 0 0-1.715 1.714V19.43c0 .95.765 1.714 1.715 1.714a1.71 1.71 0 0 0 1.714-1.714V4.57a1.71 1.71 0 0 0-1.714-1.714zm6.857 0a1.71 1.71 0 0 0-1.715 1.714v6.858c0 .95.765 1.714 1.715 1.714A1.71 1.71 0 0 0 24 11.429V4.57a1.71 1.71 0 0 0-1.714-1.714zm-13.715 8a1.71 1.71 0 0 0-1.714 1.714v6.858c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714V12.57a1.71 1.71 0 0 0-1.715-1.714zm-6.857 5.714A1.71 1.71 0 0 0 0 18.286v1.143c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714v-1.143a1.71 1.71 0 0 0-1.715-1.715zm20.572 0a1.71 1.71 0 0 0-1.715 1.715v1.143c0 .95.765 1.714 1.715 1.714A1.71 1.71 0 0 0 24 19.429v-1.143a1.71 1.71 0 0 0-1.714-1.715Z"
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
export class SvgScrollrevealIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
