import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-face-mask-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-face-mask-off"
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
      <path
        d="M5 14.5h-.222c-1.535 0 -2.778 -1.12 -2.778 -2.5s1.243 -2.5 2.778 -2.5h.222"
      />
      <path
        d="M19 14.5h.222c1.534 0 2.778 -1.12 2.778 -2.5s-1.244 -2.5 -2.778 -2.5h-.222"
      />
      <path d="M9 10h1m4 0h1" />
      <path d="M9 14h5" />
      <path
        d="M19 15v-6.49a2 2 0 0 0 -1.45 -1.923l-5 -1.429a2 2 0 0 0 -1.1 0l-1.788 .511m-3.118 .891l-.094 .027a2 2 0 0 0 -1.45 1.922v6.982a2 2 0 0 0 1.45 1.923l5 1.429a2 2 0 0 0 1.1 0l4.899 -1.4"
      />
      <path d="M3 3l18 18" />
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
export class SvgFaceMaskOffIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
