import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-brand-dribbble-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-brand-dribbble"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M14.384 14.38a22.877 22.877 0 0 1 1.056 4.863l.064 .644l.126 1.431a10 10 0 0 1 -9.15 -.98l2.08 -2.087l.246 -.24c1.793 -1.728 3.41 -2.875 5.387 -3.566l.191 -.065zm6.09 -.783l.414 .003l.981 .014a9.997 9.997 0 0 1 -4.319 6.704l-.054 -.605c-.18 -2.057 -.55 -3.958 -1.163 -5.814c1.044 -.182 2.203 -.278 3.529 -.298l.611 -.004zm-7.869 -3.181a24.91 24.91 0 0 1 1.052 2.098c-2.276 .77 -4.142 2.053 -6.144 3.967l-.355 .344l-2.236 2.24a10 10 0 0 1 -2.917 -6.741l-.005 -.324l.004 -.25h1.096l.467 -.002c3.547 -.026 6.356 -.367 8.938 -1.295l.1 -.037zm9.388 1.202l-1.515 -.02c-1.86 -.003 -3.45 .124 -4.865 .402a26.112 26.112 0 0 0 -1.163 -2.38c1.393 -.695 2.757 -1.597 4.179 -2.75l.428 -.354l.816 -.682a10 10 0 0 1 2.098 5.409l.022 .375zm-14.663 -8.46l1.266 1.522c1.145 1.398 2.121 2.713 2.949 3.985c-2.26 .766 -4.739 1.052 -7.883 1.081l-.562 .004h-.844a10 10 0 0 1 5.074 -6.593zm9.67 .182c.53 .306 1.026 .657 1.483 1.046l-1.025 .857c-1.379 1.128 -2.688 1.993 -4.034 2.649c-.89 -1.398 -1.943 -2.836 -3.182 -4.358l-.474 -.574l-.485 -.584a10 10 0 0 1 7.717 .964z"
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
export class SvgBrandDribbbleIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
