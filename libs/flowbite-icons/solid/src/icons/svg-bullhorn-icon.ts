import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-bullhorn-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M18.458 3.11A1 1 0 0 1 19 4v16a1 1 0 0 1-1.581.814L12 16.944V7.056l5.419-3.87a1 1 0 0 1 1.039-.076ZM22 12c0 1.48-.804 2.773-2 3.465v-6.93c1.196.692 2 1.984 2 3.465ZM10 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6V8Zm0 9H5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3Z"
        clip-rule="evenodd"
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
export class SvgBullhornIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
