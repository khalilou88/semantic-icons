import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-harbor-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Harbor</title>
      <path
        d="m7.006 15.751 4.256 1.876.066.805-4.388-1.934.066-.747zm.304-3.435h-.605V11.21h.381V8.95h-.381v-.649l2.118-2.073v-.146c0-.11.09-.2.2-.2.11 0 .2.09.2.2v.146l2.12 2.073v.65h-.382v2.259h.381v1.106h-.514l.27 3.313L7.17 13.9l.14-1.583zm.39-1.106h.628v-.965c0-.383.313-.696.695-.696s.696.313.696.696v.965h.628V8.95H7.7v2.26zM6.89 17.05l-.066.747 4.618 2.035-.066-.805-4.486-1.977zm.23-2.6-.066.747 4.158 1.832-.065-.805-4.026-1.774zM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12zm-2.43-.715a9.682 9.682 0 0 0-.223-1.523l-9.751.332 8.801-2.828-.019-.037A9.802 9.802 0 0 0 19.23 5.59l-7.786 4.03 5.712-5.941a9.675 9.675 0 0 0-5.14-1.474c-5.371 0-9.74 4.369-9.74 9.74 0 3.38 1.73 6.362 4.35 8.11l.151-1.704 4.715 2.078.102 1.246c.14.006.28.01.422.01 4.646 0 8.54-3.27 9.507-7.63l-10.08-3.497 10.128.727"
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
export class SvgHarborIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
