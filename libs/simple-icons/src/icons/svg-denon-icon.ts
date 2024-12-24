import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-denon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Denon</title>
      <path
        d="m9.365 11.237 3.394 3.361v-5.07h-.778v3.16L8.58 9.406v5.077h.779V11.27l.006-.033m-4.497 3.245V9.528h2.79v.773H5.646v1.164h1.558v.772H5.646v1.472h1.999v.773H4.868M20.58 11.23 24 14.58V9.528h-.779v3.2l-.005-.015-3.422-3.311v5.08h.79v-3.234l-.003-.019M.78 13.747v-3.503h.688s1.755-.032 1.755 1.77c0 1.647-1.593 1.733-1.593 1.733H.78zM0 9.527v4.955h1.655s2.336-.193 2.336-2.496c0-2.374-2.343-2.458-2.343-2.458H0zm14.416 2.452c0 .552.187 1.006.56 1.361.713.724 1.931.702 2.618-.01.724-.689.724-1.991.007-2.676-.675-.726-1.966-.724-2.645 0-.36.357-.54.8-.54 1.325zm-.764-.01c0-.702.26-1.306.777-1.81.981-1.004 2.724-1.016 3.702.006 1.026.965 1.032 2.706-.003 3.66-.961.964-2.596 1.015-3.624.084-.568-.493-.852-1.14-.852-1.94z"
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
export class SvgDenonIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
