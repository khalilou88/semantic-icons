import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-gif-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm.895 3.458C4.142 6.071 4.38 6 4.5 6s.358.07.605.458a.75.75 0 1 0 1.265-.805C5.933 4.966 5.274 4.5 4.5 4.5s-1.433.466-1.87 1.153C2.195 6.336 2 7.187 2 8s.195 1.664.63 2.347c.437.687 1.096 1.153 1.87 1.153s1.433-.466 1.87-1.153a.75.75 0 0 0 .117-.402V8a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0-.013 1.5v.955C4.785 9.95 4.602 10 4.5 10c-.121 0-.358-.07-.605-.458C3.647 9.15 3.5 8.595 3.5 8c0-.595.147-1.15.395-1.542ZM9 5.25a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0v-5.5Zm1 0a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5H11.5v1.25h.75a.75.75 0 0 1 0 1.5h-.75v2a.75.75 0 0 1-1.5 0v-5.5Z"
        clip-rule="evenodd"
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
export class SvgGifIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
