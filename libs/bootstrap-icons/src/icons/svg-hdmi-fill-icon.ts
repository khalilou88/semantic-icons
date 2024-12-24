import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-hdmi-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-hdmi-fill"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M1 5a1 1 0 0 0-1 1v3.293c0 .39.317.707.707.707.188 0 .368.075.5.207l.5.5a1 1 0 0 0 .707.293h11.172a1 1 0 0 0 .707-.293l.5-.5a.7.7 0 0 1 .5-.207c.39 0 .707-.317.707-.707V6a1 1 0 0 0-1-1zm1.5 2h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1"
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
export class SvgHdmiFillIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
