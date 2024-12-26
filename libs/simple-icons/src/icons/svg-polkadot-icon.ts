import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-polkadot-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Polkadot</title>
      <path
        d="M12,0c2.39,0,4.328,1.127,4.328,2.517S14.39,5.034,12,5.034,7.672,3.907,7.672,2.517,9.61,0,12,0Zm0,18.966c2.39,0,4.328,1.127,4.328,2.517S14.39,24,12,24s-4.328-1.127-4.328-2.517S9.61,18.966,12,18.966ZM1.606,6C2.8,3.93,4.747,2.816,5.952,3.511s1.212,2.937.017,5.007S2.828,11.7,1.624,11.007.411,8.07,1.606,6Zm16.427,9.483c1.2-2.07,3.139-3.184,4.343-2.489s1.211,2.936.016,5.006-3.14,3.185-4.344,2.49S16.837,17.553,18.033,15.483ZM1.624,12.993c1.205-.7,3.15.419,4.346,2.489s1.187,4.311-.018,5.007S2.8,20.07,1.607,18,.42,13.689,1.624,12.993ZM18.049,3.512c1.2-.695,3.149.419,4.344,2.489s1.188,4.311-.016,5.007-3.148-.42-4.343-2.49S16.846,4.207,18.049,3.512Z"
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
export class SvgPolkadotIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
