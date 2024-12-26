import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-jasmine-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Jasmine</title>
      <path
        d="M11.591 19.649h.771v-3.786h-.77zm-6.874-5.03l-.238-.733 3.6-1.17.238.735-3.6 1.17m4.645-5.762L7.138 5.796l.624-.453 2.224 3.062-.624.454m5.315.028l-.624-.454 2.225-3.062.624.453-2.225 3.063m4.592 5.78l-3.6-1.17.238-.734 3.6 1.17-.238.733M12 .001C5.383.001 0 5.384 0 11.998 0 18.617 5.383 24 12 24s12-5.382 12-12c0-6.617-5.383-12-12-12zm0 2.43c5.284 0 9.569 4.283 9.569 9.567 0 5.287-4.285 9.573-9.569 9.573-5.286 0-9.57-4.286-9.57-9.573 0-5.284 4.285-9.567 9.57-9.567m1.552 7.96l.575 1.768.747.242 4.736-1.538-.86-2.645-4.736 1.539-.462.635m.337 2.5l-1.504 1.093v.785l2.927 4.03 2.25-1.636-2.927-4.029-.746-.243m-2.275 1.093l-1.504-1.093-.747.243-2.927 4.029 2.25 1.635 2.928-4.029v-.785M9.873 12.16l.574-1.767-.462-.635-4.736-1.54-.86 2.646 4.737 1.54.747-.244m1.198-2.22h1.859l.462-.636v-4.98H10.61v4.98l.461.636"
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
export class SvgJasmineIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
