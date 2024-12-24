import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-magento-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9996 2L3.35449 7V17L5.8061 18.4516V8.45161L11.9996 4.87097L18.1932 8.45161V18.4516L20.6448 17V7L11.9996 2Z"
        fill="#323544"
      />
      <path
        d="M13.2576 18.4516L11.9995 19.129L10.7737 18.4516V8.45161L8.25756 9.87097V19.871L11.9995 22L15.7414 19.871V9.87097L13.2576 8.45161V18.4516Z"
        fill="#323544"
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
export class SvgMagentoIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
