import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-tk-flag-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#0052b4" d="M0 0h512v512H0z" />
        <path
          fill="#eee"
          d="m188 133.6 5.6 17h17.9L197 161l5.5 17-14.4-10.5-14.5 10.5 5.5-17-14.4-10.5h17.8zM115.5 256l7 21.3h22.3l-18 13 6.8 21.4-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zm0-178 7 21.2h22.3l-18 13.1 6.8 21.3-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zM59.8 178l6.9 21.3H89l-18 13.2 6.9 21.2-18.1-13.1-18.1 13.1 7-21.2-18.2-13.2H53z"
        />
        <path
          fill="#eee"
          d="m188 133.6 5.6 17h17.9L197 161l5.5 17-14.4-10.5-14.5 10.5 5.5-17-14.4-10.5h17.8zM115.5 256l7 21.3h22.3l-18 13 6.8 21.4-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zm0-178 7 21.2h22.3l-18 13.1 6.8 21.3-18-13.2-18.1 13.2 6.9-21.3-18.1-13.1h22.3zM59.8 178l6.9 21.3H89l-18 13.2 6.9 21.2-18.1-13.1-18.1 13.1 7-21.2-18.2-13.2H53z"
        />
        <path
          fill="#ffda44"
          d="M411.8 122.4 144.7 345h361.7v-35.8a167.4 167.4 0 0 1-97.9-152.3c0-11.7 1-23.5 3.3-34.5zm94.6 244.9H144.7v33.4h361.7z"
        />
      </g>
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
export class SvgTkFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
