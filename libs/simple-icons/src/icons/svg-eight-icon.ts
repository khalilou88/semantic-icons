import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-eight-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Eight</title>
      <path
        d="M5.908 6.092a5.908 5.908 0 1 0 0 11.816 5.908 5.908 0 0 0 0-11.816zm9.23 0v2.955h5.909V6.092h-5.908zm5.909 2.955v5.906H24V9.047h-2.953zm0 5.906h-5.908v2.955h5.908v-2.955zm-5.908 0V9.047h-2.953v5.906h2.953zm-9.23-5.906A2.956 2.956 0 0 1 8.86 12a2.956 2.956 0 0 1-2.953 2.953A2.958 2.958 0 0 1 2.953 12a2.958 2.958 0 0 1 2.955-2.953z"
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
export class SvgEightIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
