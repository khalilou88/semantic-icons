import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-taipy-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Taipy</title>
      <path
        d="M1.273 4.153a.971.971 0 0 1 .917-.65h21.325a.486.486 0 0 1 .458.646l-1.245 3.56a.971.971 0 0 1-.917.65H.486a.486.486 0 0 1-.459-.646Zm4.855 6.07a.971.971 0 0 1 .917-.65h8.337a.486.486 0 0 1 .458.645l-1.245 3.56a.971.971 0 0 1-.917.65H5.341a.486.486 0 0 1-.458-.646Zm2.698 6.068a.971.971 0 0 1 .917-.65h3.482a.486.486 0 0 1 .458.646l-1.246 3.56a.971.971 0 0 1-.916.65H8.039a.486.486 0 0 1-.458-.646Z"
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
export class SvgTaipyIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
