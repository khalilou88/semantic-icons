import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-gr-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-gr"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 0h512v57H0z" />
      <path fill="#fff" fill-rule="evenodd" d="M0 57h512v57H0z" />
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 114h512v57H0z" />
      <path fill="#fff" fill-rule="evenodd" d="M0 171h512v57H0z" />
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 228h512v56.9H0z" />
      <path fill="#fff" fill-rule="evenodd" d="M0 284.9h512v57H0z" />
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 341.9h512v57H0z" />
      <path fill="#fff" fill-rule="evenodd" d="M0 398.9h512v57H0z" />
      <path fill="#0d5eaf" d="M0 0h284.9v284.9H0z" />
      <g fill="#fff" fill-rule="evenodd" stroke-width="1.3">
        <path d="M114 0h57v284.9h-57z" />
        <path d="M0 114h284.9v57H0z" />
      </g>
      <path fill="#0d5eaf" fill-rule="evenodd" d="M0 455h512v57H0z" />
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
export class SvgGrFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
