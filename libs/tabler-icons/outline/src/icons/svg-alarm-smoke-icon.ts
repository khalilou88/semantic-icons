import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-alarm-smoke-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-alarm-smoke"
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
        d="M18 8l-.8 3a1.25 1.25 0 0 1 -1.2 1h-8a1.25 1.25 0 0 1 -1.2 -1l-.8 -3"
      />
      <path
        d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z"
      />
      <path
        d="M12 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"
      />
      <path
        d="M7 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"
      />
      <path
        d="M17 16c.643 .288 1.017 .756 1 1.25c.017 .494 -.357 .962 -1 1.25s-1.017 .756 -1 1.25c-.017 .494 .357 .962 1 1.25"
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
export class SvgAlarmSmokeIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
