import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-materialdesignicons-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Material Design Icons</title>
      <path
        d="M0 0h7.2v2.4h9.6V0H24v7.2h-2.4v9.6H24V24h-7.2v-2.4H7.2V24H0v-7.2h2.4V7.2H0V0m16.8 7.2V4.8H7.2v2.4H4.8v9.6h2.4v2.4h9.6v-2.4h2.4V7.2M2.4 2.4v2.4h2.4V2.4m14.4 0v2.4h2.4V2.4M2.4 19.2v2.4h2.4v-2.4m14.4 0v2.4h2.4v-2.4z"
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
export class SvgMaterialdesigniconsIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
