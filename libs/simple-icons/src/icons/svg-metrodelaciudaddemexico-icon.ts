import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-metrodelaciudaddemexico-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Metro de la Ciudad de M&#233;xico</title>
      <path
        d="M3.965 8.704V24H.008V6.864h2.097c1.066 0 1.86.774 1.86 1.84m2.366-1.84c.268.521.521 1.315.521 1.84V24h3.685V8.704a1.784 1.784 0 0 0-1.84-1.84M17.4 24V8.704a1.795 1.795 0 0 0-1.844-1.84h-2.382c.269.521.269 1.315.269 1.84V24M.008 3.953V0h15.549c4.75 0 8.435 3.953 8.435 8.704V24h-3.685V8.704a4.735 4.735 0 0 0-4.75-4.75z"
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
export class SvgMetrodelaciudaddemexicoIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
