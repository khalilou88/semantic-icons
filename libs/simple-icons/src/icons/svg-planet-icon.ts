import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-planet-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Planet</title>
      <path
        d="M12.891 6.582c-1.159 0-2.4.457-3.217 1.633h-.033a1.59 1.59 0 0 0-1.59-1.59h-.048v10.86a1.792 1.792 0 0 0 1.784 1.784v-4.703h.034c.343.571 1.29 1.536 3.185 1.536 2.857 0 4.572-2.352 4.572-4.638.002-2.416-1.616-4.882-4.687-4.882zm-.066 7.975c-1.714 0-3.07-1.388-3.07-3.217 0-1.666 1.242-3.2 3.023-3.2 1.845 0 3.103 1.616 3.103 3.233-.001 1.905-1.455 3.184-3.056 3.184zM12.001 24A12 12 0 1 1 24 12.001 12.013 12.013 0 0 1 12.001 24zm0-22.856a10.861 10.861 0 1 0 10.861 10.862 10.87 10.87 0 0 0-10.86-10.862z"
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
export class SvgPlanetIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
