import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-northern-cyprus-flag-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#eee"
          d="M0 0v48l32 24L0 96v320l32 24-32 24v48h512v-48l-32-24 32-24V96l-32-24 32-24V0Z"
        />
        <path
          fill="#d80027"
          d="M0 464h512v-48H0ZM0 48v48h512V48Zm270 255v-94l55 76-89-29 89-29z"
        />
        <path
          fill="#d80027"
          d="M185 167a89 89 0 1 0 62 153 72 72 0 0 1-34 8 72 72 0 1 1 34-136 89 89 0 0 0-62-25Z"
        />
      </g>
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
export class SvgNorthernCyprusFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
