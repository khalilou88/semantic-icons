import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-brand-adobe-after-effect-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-adobe-after-effect"
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
        d="M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682"
      />
      <path
        d="M12 15.79l-.82 -2.653m-4.864 2.652l.82 -2.652m0 0l.686 -2.218c.559 -1.806 .838 -2.708 1.336 -2.708s.777 .902 1.335 2.708l.686 2.218m-4.043 0h4.043"
      />
      <path
        d="M13.895 12.824v1.07a1.895 1.895 0 0 0 3.54 .942m-3.54 -2.012v-.824a1.895 1.895 0 1 1 3.79 0v.824z"
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
export class SvgBrandAdobeAfterEffectIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
