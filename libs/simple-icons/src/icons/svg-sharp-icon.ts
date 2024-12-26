import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sharp-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>sharp</title>
      <path
        d="M14.2209.0875v5.9613l-3.7433.5012v3.5233l3.7433-.5012v3.5735l3.492-.4672V9.1047L24 8.2634l-.4631-3.4613-5.824.7794V.0875zM6.287 1.145v5.9618L0 7.9483l.4634 3.4613 5.8514-.7834 3.4644-.4637V1.145zm3.5198 9.7185l-3.492.4675v3.578l-6.183.8276.4633 3.4613 5.8239-.7796v5.4942h3.492v-5.962l3.6114-.4834V13.944l-3.7156.4973zm13.73 1.7405l-5.824.779-3.492.4673v9.0179h3.492v-5.9618L24 16.0652Z"
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
export class SvgSharpIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
