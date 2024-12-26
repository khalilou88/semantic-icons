import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-robloxstudio-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Roblox Studio</title>
      <path
        d="M 13.936 15.356 L 1.826 12.112 L 0 18.93 L 18.928 24 L 21.608 14.01 L 14.79 12.18 L 13.936 15.356 Z M 5.072 0 L 2.394 9.992 L 9.21 11.822 L 10.064 8.644 L 22.174 11.89 L 24 5.072 L 5.072 0 Z"
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
export class SvgRobloxstudioIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
