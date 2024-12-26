import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-dask-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Dask</title>
      <path
        d="m11.246 9.754 5.848-3.374a.202.202 0 0 0 .1-.175l.002-2.553c0-.324-.133-.645-.392-.841a1 1 0 0 0-1.118-.074l-2.425 1.4-6.436 3.712a1.007 1.007 0 0 0-.504.872l-.003 8.721v2.825c0 .324.132.645.39.842.335.253.766.278 1.12.074l2.363-1.364a.202.202 0 0 0 .101-.175l.003-8.244a1.902 1.902 0 0 1 .951-1.646Zm10.316-4.336a1.005 1.005 0 0 0-.504-.137.997.997 0 0 0-.503.137l-8.86 5.112a1.01 1.01 0 0 0-.505.87l-.003 11.591c0 .364.188.69.503.872a.995.995 0 0 0 1.007 0l8.86-5.112a1.01 1.01 0 0 0 .504-.872l.004-11.59a.997.997 0 0 0-.503-.871ZM6.378 7.074l6.334-3.655a.202.202 0 0 0 .1-.175l.001-2.193c0-.324-.133-.646-.392-.84a1 1 0 0 0-1.118-.075L2.443 5.25a1.007 1.007 0 0 0-.504.872l-.003 11.546c0 .324.133.645.39.842a1 1 0 0 0 1.12.074l1.877-1.082a.202.202 0 0 0 .1-.175l.003-8.605c0-.68.363-1.307.952-1.647z"
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
export class SvgDaskIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
