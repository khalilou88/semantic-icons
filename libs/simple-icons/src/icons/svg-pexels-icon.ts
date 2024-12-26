import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pexels-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Pexels</title>
      <path
        d="M1.5 0A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h21a1.5 1.5 0 001.5-1.5v-21A1.5 1.5 0 0022.5 0h-21zm6.75 6.75h5.2715a3.843 3.843 0 01.627 7.6348V17.25H8.25V6.75zm1.5 1.5v7.5h2.8984v-2.8145h.873a2.343 2.343 0 100-4.6855H9.75Z"
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
export class SvgPexelsIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
