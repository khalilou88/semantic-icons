import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-om-flag-icon',
  standalone: true,
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
        <path fill="#eee" d="M189.2 0H512v167l-347.5 24.6z" />
        <path fill="#6da544" d="m163 320 349 25v167H189.2z" />
        <path fill="#d80027" d="M0 0h189.2v167H512v178H189.2v167H0z" />
        <path
          fill="#eee"
          d="M156.6 112.7 133 89l-15.7 15.8L101.5 89 78 112.7l15.8 15.7L78 144l23.6 23.6 15.8-15.7 15.7 15.7 23.6-23.6-15.7-15.7z"
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
export class SvgOmFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
