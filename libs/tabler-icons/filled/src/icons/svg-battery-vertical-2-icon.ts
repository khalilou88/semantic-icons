import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-battery-vertical-2-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-battery-vertical-2"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M13.5 3a1.5 1.5 0 0 1 1.395 .948l.018 .052h.087a3 3 0 0 1 2.995 2.824l.005 .176v11a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-11a3 3 0 0 1 3 -3h.086l.019 -.052a1.5 1.5 0 0 1 1.25 -.941l.145 -.007zm.5 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m0 -3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2"
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
export class SvgBatteryVertical2Icon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
