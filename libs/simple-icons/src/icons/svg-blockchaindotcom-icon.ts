import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-blockchaindotcom-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Blockchain.com</title>
      <path
        d="M19.8285 6.6117l-5.52-5.535a3.1352 3.1352 0 00-4.5 0l-5.535 5.535 7.755 3.87zm2.118 2.235l1.095 1.095a3.12 3.12 0 010 4.5L14.22 23.3502a2.6846 2.6846 0 01-.72.525V13.0767zm-19.893 0l-1.095 1.095a3.1198 3.1198 0 000 4.5L9.78 23.3502c.2091.214.4525.3914.72.525V13.0767z"
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
export class SvgBlockchaindotcomIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
