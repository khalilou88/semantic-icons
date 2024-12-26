import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-hashicorp-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>HashiCorp</title>
      <path
        d="M10.114 4.094 4.215 7.5v13.09L.666 18.542V5.45L10.114 0v4.094zm3.772 13.37 3.549-2.049V2.05L13.885 0v10.426h-3.77v-3.89L6.562 8.585v13.357l3.551 2.054V13.599h3.772v3.865zM19.783 3.41V16.5l-5.897 3.405V24l9.448-5.45V5.458l-3.551-2.05z"
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
export class SvgHashicorpIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
