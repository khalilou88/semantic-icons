import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-file-cog-icon',
  standalone: true,
  imports: [],
  template: `
    <!-- @license lucide-static v0.469.0 - ISC -->
    <svg
      class="lucide lucide-file-cog"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m3.2 12.9-.9-.4" />
      <path d="m3.2 15.1-.9.4" />
      <path
        d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"
      />
      <path d="m4.9 11.2-.4-.9" />
      <path d="m4.9 16.8-.4.9" />
      <path d="m7.5 10.3-.4.9" />
      <path d="m7.5 17.7-.4-.9" />
      <path d="m9.7 12.5-.9.4" />
      <path d="m9.7 15.5-.9-.4" />
      <circle cx="6" cy="14" r="3" />
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
export class SvgFileCogIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
