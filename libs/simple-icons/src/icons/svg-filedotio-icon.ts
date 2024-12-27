import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-filedotio-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>File.io</title>
      <path
        d="M20.034 11.837a2.976 2.976 0 0 1-1.868 2.718l-4.385 1.401-.06-5.23c-.011-1.256-.514-2.48-1.135-2.727-2.024-.816-4.054-1.619-6.07-2.456a1.028 1.028 0 0 1-.509-.934c.001-.272.11-.532.303-.724.115-.061.236-.111.36-.149L18.049.084c1.051-.331 1.91.341 1.91 1.504l.075 10.249Zm-7.02 10.296c.011 1.256-.485 2.073-1.102 1.821-2.287-.916-4.565-1.869-6.854-2.773-.775-.509-.999-1.023-.999-2.653L3.975 7.471a4.295 4.295 0 0 1 .256-1.732 2.755 2.755 0 0 1 1.116-1.368c.063-.044.129-.085.196-.121-.195.19-.304.451-.303.723-.019.381.175.741.504.934l1.13.467 4.945 2.013c.616.252 1.135 1.47 1.135 2.726.027 3.673.043 7.347.06 11.02Z"
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
export class SvgFiledotioIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
