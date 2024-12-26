import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-matomo-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Matomo</title>
      <path
        d="M6.664 15.37a3.336 3.336 0 0 1-3.332 3.332C1.495 18.702 0 17.208 0 15.37s1.495-3.333 3.332-3.333a3.338 3.338 0 0 1 3.332 3.333zm11.565-3.644a3.658 3.658 0 0 1-1.987.591 3.642 3.642 0 0 1-1.872-.529l.008.012a3.728 3.728 0 0 1-1.235-1.19l-2.612-3.693a.17.17 0 0 1-.027-.033A3.312 3.312 0 0 0 7.67 5.298a3.318 3.318 0 0 0-2.848 1.586.146.146 0 0 1-.021.028l-3.428 5.343a3.663 3.663 0 0 1 5.094 1.18.13.13 0 0 1 .015.018l2.756 3.869a3.305 3.305 0 0 0 2.699 1.38 3.31 3.31 0 0 0 2.711-1.379l.009-.013c.073-.103.137-.202.195-.305l1.442-2.255 1.935-3.024zm5.275 1.902l-.014-.028-.044-.066a1.109 1.109 0 0 0-.029-.044l-3.525-5.37c.024.168.052.335.052.51 0 .741-.219 1.457-.634 2.068l-2.803 4.38 1.416 2.179-.002.002a.131.131 0 0 1 .024.028 3.338 3.338 0 0 0 2.723 1.415A3.335 3.335 0 0 0 24 15.37c0-.613-.171-1.216-.496-1.742zm-7.262-1.666a3.336 3.336 0 0 0 3.332-3.333 3.336 3.336 0 0 0-3.332-3.332 3.336 3.336 0 0 0-3.332 3.332 3.338 3.338 0 0 0 3.332 3.333z"
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
export class SvgMatomoIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
