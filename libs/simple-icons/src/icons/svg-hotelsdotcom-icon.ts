import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-hotelsdotcom-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Hotels.com</title>
      <path
        d="M19.064 0H4.936a4.937 4.937 0 0 0-4.93 4.93V19.06A4.94 4.94 0 0 0 4.935 24h14.128a4.926 4.926 0 0 0 4.93-4.941V4.93A4.93 4.93 0 0 0 19.065 0zM8.55 10.63v2.329a.32.32 0 0 1-.337.337H5.884a.32.32 0 0 1-.337-.337V10.63c0-.2.137-.337.337-.337h2.34c.2 0 .336.137.336.337h-.01zm5.162 7.491a.32.32 0 0 1-.337.337h-2.328a.32.32 0 0 1-.337-.337v-2.328c0-.2.136-.337.337-.337h2.328c.19 0 .337.136.337.337v2.328zm0-5.162a.32.32 0 0 1-.337.337h-2.328a.32.32 0 0 1-.337-.337V10.63c0-.2.136-.337.337-.337h2.328c.2 0 .337.137.337.337v2.329zm5.974 4.372a.654.654 0 0 1-.22.516l-2.308 2.297c-.18.168-.432.052-.432-.2V7.28H4.062c-.253 0-.369-.264-.2-.432L6.169 4.55c.137-.147.274-.232.506-.232h11.473c.854 0 1.538.685 1.538 1.539V17.33z"
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
export class SvgHotelsdotcomIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
