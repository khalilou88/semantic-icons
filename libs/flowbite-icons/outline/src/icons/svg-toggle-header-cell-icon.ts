import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-toggle-header-cell-icon',
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
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 15v3c0 .5523.44772 1 1 1h10M3 15v-4m0 4h9m-9-4V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v3M3 11h11m-2-.2079V19m3-4h1.9909M21 15c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z"
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
export class SvgToggleHeaderCellIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
