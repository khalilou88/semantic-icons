import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-es-pv-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-es-pv"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#d52b1e" d="M0 0h512v512H0z" />
      <path
        fill="#009b48"
        d="M0 0h42.5l106.7 106.7L256 213.4 469.5 0H512v42.5L405.3 149.2 298.6 256 512 469.5V512h-42.5L362.8 405.3 256 298.6 42.5 512H0v-42.5l106.7-106.7L213.4 256 0 42.5V21.3z"
      />
      <path
        fill="#fff"
        d="M221.9 0h68.2v221.9H512v68.2H290.1V512h-68.2V290.1H0v-68.2h221.9v-111z"
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
export class SvgEsPvFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
