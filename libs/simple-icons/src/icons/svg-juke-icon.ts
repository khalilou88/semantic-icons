import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-juke-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>JUKE</title>
      <path
        d="M7.965 15.778c-1.947 0-2.751-.929-2.751-2.58V8.409c0-.102.084-.184.188-.184h1.499c.104 0 .188.082.188.184v4.82a.87.87 0 0 0 .876.816c.466 0 .85-.358.876-.816v-4.82a.188.188 0 0 1 .188-.185h1.498c.104 0 .188.083.188.185v4.789c0 1.652-.805 2.58-2.751 2.58h.001Zm-4.495-2.66c0 1.652-.726 2.583-2.667 2.583H.188A.186.186 0 0 1 0 15.516v-1.367c0-.102.084-.185.188-.185h.677c.636 0 .73-.336.73-.735V9.582a.397.397 0 0 0-.157-.314L.259 8.456a.128.128 0 0 1-.042-.145.133.133 0 0 1 .125-.087h2.939c.104 0 .188.083.188.185v4.709h.001Zm10.927.106v2.195a.187.187 0 0 1-.188.185h-1.5a.187.187 0 0 1-.183-.18V8.409c0-.1.081-.182.183-.185h1.5c.104 0 .188.083.188.185v2.2c0 .108.045.122.101.028l1.323-2.251c.08-.136.159-.161.336-.161h1.772c.103 0 .137.084.075.185l-2.063 3.387a.248.248 0 0 0 0 .239l2.063 3.387c.057.101.028.185-.075.185h-1.772c-.179 0-.257-.03-.337-.161l-1.323-2.25c-.056-.094-.101-.082-.101.026l.001.001Zm9.602-1.308a.157.157 0 0 1-.093.13l-2.406 1.45a.102.102 0 0 0-.058.091c0 .039.023.074.057.091l2.446 1.694a.13.13 0 0 1 .042.145.134.134 0 0 1-.126.087h-4.299a.187.187 0 0 1-.188-.18V8.407c0-.102.084-.185.188-.185h4.305c.056 0 .107.035.125.087a.129.129 0 0 1-.042.145l-2.445 1.693a.1.1 0 0 0 0 .182l2.395 1.456c.065.037.098.08.098.13l.001.001Z"
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
export class SvgJukeIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
