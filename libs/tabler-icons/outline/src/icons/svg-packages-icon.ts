import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-packages-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-packages"
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
      <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
      <path d="M2 13.5v5.5l5 3" />
      <path d="M7 16.545l5 -3.03" />
      <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
      <path d="M12 19l5 3" />
      <path d="M17 16.5l5 -3" />
      <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
      <path d="M7 5.03v5.455" />
      <path d="M12 8l5 -3" />
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
export class SvgPackagesIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
