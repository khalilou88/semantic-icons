import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ge-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ge"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="red" d="M205 0h102v512H205z" />
      <path fill="red" d="M0 205h512v102H0z" />
      <path
        fill="red"
        fill-rule="evenodd"
        d="M114.1 397.9c1.1-18 4.3-33.4 4.3-33.4s-10.6 1-15.9 1c-5.3 0-15.9-1-15.9-1s3.2 15.3 4.3 33.4c-18-1.1-33.4-4.3-33.4-4.3s1 8 1 15.9-1 15.9-1 15.9 15.3-3.2 33.4-4.3c-1.1 18-4.3 33.4-4.3 33.4s8-1 15.9-1c8 0 15.9 1 15.9 1s-3.2-15.3-4.3-33.4c18 1.1 33.4 4.3 33.4 4.3s-1-10.6-1-15.9c0-5.3 1-15.9 1-15.9s-15.3 3.2-33.4 4.3m307-307c1.1-18 4.3-33.4 4.3-33.4s-10.6 1-15.9 1c-5.3 0-15.9-1-15.9-1s3.2 15.4 4.3 33.4c-18-1.1-33.4-4.3-33.4-4.3s1 8 1 15.9c0 8-1 15.9-1 15.9s15.3-3.2 33.4-4.3c-1.1 18-4.3 33.4-4.3 33.4s8-1 15.9-1 15.9 1 15.9 1-3.2-15.3-4.3-33.4c18 1.1 33.4 4.3 33.4 4.3s-1-10.6-1-15.9c0-5.2 1-15.9 1-15.9s-15.4 3.2-33.4 4.3m-307 0c1.1-18 4.3-33.4 4.3-33.4s-10.6 1-15.9 1c-5.3 0-15.9-1-15.9-1s3.2 15.4 4.3 33.4c-18-1.1-33.4-4.3-33.4-4.3s1 8 1 15.9c0 8-1 15.9-1 15.9s15.3-3.2 33.4-4.3c-1.1 18-4.3 33.4-4.3 33.4s8-1 15.9-1c8 0 15.9 1 15.9 1s-3.2-15.3-4.3-33.4c18 1.1 33.4 4.3 33.4 4.3s-1-10.6-1-15.9c0-5.2 1-15.9 1-15.9s-15.3 3.2-33.4 4.3m307 307c1.1-18 4.3-33.4 4.3-33.4s-10.6 1-15.9 1c-5.3 0-15.9-1-15.9-1s3.2 15.3 4.3 33.4c-18-1.1-33.4-4.3-33.4-4.3s1 8 1 15.9-1 15.9-1 15.9 15.3-3.2 33.4-4.3c-1.1 18-4.3 33.4-4.3 33.4s8-1 15.9-1 15.9 1 15.9 1-3.2-15.3-4.3-33.4c18 1.1 33.4 4.3 33.4 4.3s-1-10.6-1-15.9c0-5.3 1-15.9 1-15.9s-15.4 3.2-33.4 4.3"
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
export class SvgGeFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
