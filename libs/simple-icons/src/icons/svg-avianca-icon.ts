import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-avianca-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>avianca</title>
      <path
        d="M3.813 0s-2.326 2.052-2.51 6.367c-.205 4.716 2.324 9.47 10.654 10.076.026.005.055.005.08.008C7.806 11.534 4.955 5.241 3.812 0zm8.224 16.451a30.654 30.654 0 0 0 2.2 2.303H5.282c.12.278.53.472 1.463.527 5.59.332 6.38 4.719 14.381 4.719.702 0 1.14-.042 1.582-.125-3.16-.972-6-2.8-8.47-5.121h2.21c.917 0 1.325.076 1.58.191-.392-1.218-1.631-2.168-5.992-2.494z"
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
export class SvgAviancaIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
