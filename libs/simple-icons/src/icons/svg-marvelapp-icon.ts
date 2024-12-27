import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-marvelapp-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>MarvelApp</title>
      <path
        d="M10.339 8.13c1.373 0-1.162 7.076-.845 10.138.317 3.063 3.696 2.218 3.485.423-.423-3.063 1.69-12.672 3.696-12.672 1.478 0-1.69 6.547-1.056 10.665.422 2.64 4.012 1.901 3.59.106-1.162-5.386 2.64-10.56 2.112-14.361C21.11.845 20.159 0 19.209 0c-3.379 0-6.125 6.97-6.125 6.97s.423-3.908-2.428-4.119C6.643 2.64 2.525 12.777 2.63 21.964c.106 2.957 3.696 2.429 3.485.106-.211-4.12 2.112-13.94 4.225-13.94z"
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
export class SvgMarvelappIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
