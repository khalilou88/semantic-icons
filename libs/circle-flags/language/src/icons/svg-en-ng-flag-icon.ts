import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-en-ng-flag-icon',
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
        <path
          fill="#6da544"
          d="M0 0v512l96-64 64-96 192-192 96-64 64-96H352l-96 64-96-64Z"
        />
        <path
          fill="#eee"
          d="M160 0v352L45 512h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0L352 160V0Z"
        />
        <path
          fill="#d80027"
          d="m304 208-96 96v208h96V304h208v-96ZM176 336 0 512h45l131-131Zm160 0 176 176v-45L381 336Z"
        />
        <path
          fill="#0052b4"
          d="M512 68 404 176h108ZM404 336l108 108V336Zm-228 68L68 512h108zm160 0v108h108z"
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
export class SvgEnNgFlagIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
