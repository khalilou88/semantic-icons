import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-shadows-icon',
  imports: [],
  template: `
    <svg
      class="bi bi-shadows"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8 7a.5.5 0 0 1 0-1h3.5q.048 0 .093.009A7 7 0 0 0 12.9 13H8a.5.5 0 0 1 0-1h5.745q.331-.474.581-1H8a.5.5 0 0 1 0-1h6.71a7 7 0 0 0 .22-1H8a.5.5 0 0 1 0-1h7q0-.51-.07-1H8a.5.5 0 0 1 0-1h6.71a7 7 0 0 0-.384-1H8a.5.5 0 0 1 0-1h5.745a7 7 0 0 0-.846-1H8a.5.5 0 0 1 0-1h3.608A7 7 0 1 0 8 15"
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
export class SvgShadowsIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
