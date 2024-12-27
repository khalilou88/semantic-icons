import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ar-flag-icon',
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
        <path fill="#496e2d" d="M0 0h512v512H0z" />
        <path
          fill="#eee"
          d="M379 176v97h-16c-2.8 0-5.3-.2-7.8-.4 3-4.3 5.2-8.9 6.4-13.7a37.7 37.7 0 0 0-4-29.2A31.6 31.6 0 0 0 331 215a31.6 31.6 0 0 0-26.5 14.7c-5.3 8.6-6.7 19-4.1 29.2 1.2 4.8 3.4 9.4 6.4 13.7-2.5.2-5 .4-7.8.4h-16v-58h-24v82a15 15 0 0 1-15 15v24a39 39 0 0 0 39-39h16c12.4 0 23-2.3 32-6 9 3.7 19.6 6 32 6h40V176zm39 0v121h24V176zm-330 0v24h24v-24zm39 0v24h24v-24zm24 39a82 82 0 0 0-82 82h24a58 58 0 0 1 34-52.8V297h102v-82h-24v58h-15v-58h-24v58h-15zm180 24c3.4 0 4.7 1 6.1 3.4a14 14 0 0 1 1.2 10.7c-.9 3.6-3 7.7-7.3 11.2a21.7 21.7 0 0 1-7.3-11.2 14 14 0 0 1 1.2-10.7c1.4-2.4 2.7-3.4 6.1-3.4zm-204 73v24h24v-24zm39 0v24h24v-24zm39 0v24h24v-24z"
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
export class SvgArFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
