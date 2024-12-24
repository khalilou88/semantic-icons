import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-link-break-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M13.2131 9.78732c-.6359-.63557-1.4983-.99259-2.3974-.99259-.89911 0-1.76143.35702-2.39741.99259l-3.4253 3.42528C4.35719 13.8485 4 14.7108 4 15.61c0 .8992.35719 1.7616.99299 2.3974.63598.6356 1.4983.9926 2.39742.9926.89912 0 1.76144-.357 2.39742-.9926l.32157-.3043m-.32157-4.4905c.63587.6358 1.49827.993 2.39747.993.8991 0 1.7615-.3572 2.3974-.993l3.4243-3.42528c.6358-.63585.993-1.49822.993-2.39741 0-.89919-.3572-1.76156-.993-2.39741C17.3712 4.357 16.509 4 15.6101 4c-.899 0-1.7612.357-2.397.9925l-1.0278.96062m7.3873 14.04678-1.7862-1.7862m0 0L16 16.4274m1.7864 1.7863 1.7862-1.7863m-1.7862 1.7863L16 20"
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
export class SvgLinkBreakIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
