import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-topology-star-ring-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-topology-star-ring"
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
      <path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M6 12h4" />
      <path d="M14 12h4" />
      <path d="M13.5 5.5l5 5" />
      <path d="M5.5 13.5l5 5" />
      <path d="M13.5 18.5l5 -5" />
      <path d="M10.5 5.5l-5 5" />
      <path d="M12 6v4" />
      <path d="M12 14v4" />
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
export class SvgTopologyStarRingIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
