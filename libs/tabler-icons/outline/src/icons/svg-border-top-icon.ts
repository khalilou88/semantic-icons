import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-border-top-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-border-top"
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
      <path d="M4 4l16 0" />
      <path d="M4 8l0 .01" />
      <path d="M12 8l0 .01" />
      <path d="M20 8l0 .01" />
      <path d="M4 12l0 .01" />
      <path d="M8 12l0 .01" />
      <path d="M12 12l0 .01" />
      <path d="M16 12l0 .01" />
      <path d="M20 12l0 .01" />
      <path d="M4 16l0 .01" />
      <path d="M12 16l0 .01" />
      <path d="M20 16l0 .01" />
      <path d="M4 20l0 .01" />
      <path d="M8 20l0 .01" />
      <path d="M12 20l0 .01" />
      <path d="M16 20l0 .01" />
      <path d="M20 20l0 .01" />
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
export class SvgBorderTopIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
