import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-vivint-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vivint</title>
      <path
        d="M9.102 2.04a.81.81 0 0 0-.553.218L.514 9.756A1.62 1.62 0 0 0 0 10.939V21.15c0 .447.362.81.809.81h16.584a.81.81 0 0 0 .808-.81V10.94a1.62 1.62 0 0 0-.514-1.184l-8.035-7.5a.804.804 0 0 0-.55-.217zm0 4.964 5.252 4.904v6.203H3.848v-6.203l5.254-4.904zM21.648 17.35a2.305 2.305 0 0 0-2.26 2.304 2.305 2.305 0 0 0 2.307 2.307A2.305 2.305 0 0 0 24 19.654a2.305 2.305 0 0 0-2.305-2.304 2.305 2.305 0 0 0-.047 0z"
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
export class SvgVivintIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
