import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-brand-youtube-kids-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube-kids"
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
        d="M18.608 17.75l-3.9 .268h-.027a13.83 13.83 0 0 0 -3.722 .828l-2.511 .908a4.111 4.111 0 0 1 -3.287 -.216a3.82 3.82 0 0 1 -1.98 -2.527l-1.376 -6.05a3.669 3.669 0 0 1 .536 -2.86a3.964 3.964 0 0 1 2.489 -1.661l11.25 -2.354c2.137 -.448 4.247 .85 4.713 2.9l1.403 6.162a3.677 3.677 0 0 1 -.697 3.086a4.007 4.007 0 0 1 -2.89 1.512v.002z"
      />
      <path d="M9 10l1.208 5l4.292 -4z" />
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
export class SvgBrandYoutubeKidsIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
