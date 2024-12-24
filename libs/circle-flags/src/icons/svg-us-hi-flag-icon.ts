import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-us-hi-flag-icon',
  standalone: true,
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
          d="M0 256V96l32-32L0 32V0h32l32 32L96 0h416v64l-32 64 32 64v64l-32 64 32 64v64l-256 32L0 448v-64l32-64z"
        />
        <path
          fill="#0052b4"
          d="m173 128 83 83v-19h256v-64L384 96l-128 32Zm-45 45v83h83zM0 320v64h512v-64l-256-32Z"
        />
        <path
          fill="#d80027"
          d="M32 0v32H0v64h32v160H0v64h512v-64H96V96h160v32h256V64H256V32H96V0H32zm224 256v-31l-97-97h-31l128 128zM0 448v64h512v-64H0z"
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
export class SvgUsHiFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
