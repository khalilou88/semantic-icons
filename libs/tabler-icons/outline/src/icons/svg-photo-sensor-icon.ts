import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-photo-sensor-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-photo-sensor"
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 5h2a2 2 0 0 1 2 2v2" />
      <path d="M21 15v2a2 2 0 0 1 -2 2h-2" />
      <path d="M7 19h-2a2 2 0 0 1 -2 -2v-2" />
      <path d="M3 9v-2a2 2 0 0 1 2 -2h2" />
      <path
        d="M7 9m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z"
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
export class SvgPhotoSensorIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
