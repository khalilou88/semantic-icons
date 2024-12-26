import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-device-watch-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-device-watch"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M15 2a1 1 0 0 1 1 1v2.126c1.726 .445 3 2.01 3 3.874v6a4 4 0 0 1 -3 3.874v2.126a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2.126a4 4 0 0 1 -3 -3.874v-6a4 4 0 0 1 3 -3.874v-2.126a1 1 0 0 1 1 -1zm-1 17h-4v1h4zm0 -15h-4v1h4z"
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
export class SvgDeviceWatchIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
