import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-projector-icon',
  imports: [],
  template: `
    <svg
      class="bi bi-projector"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M2.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
      />
      <path
        d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1H5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
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
export class SvgProjectorIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
