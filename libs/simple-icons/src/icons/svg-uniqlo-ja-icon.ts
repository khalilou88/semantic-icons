import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-uniqlo-ja-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Uniqlo</title>
      <path
        d="M0 .01v23.98h24V.01ZM4.291 3.29h4.553l.006 5.803h1.511v1.511h-6.82V9.094h3.783v-4.29H4.291zm10.11 0h5.302v1.514H14.4zm-.762 5.807h6.816v1.511H13.64zM4.29 13.385l6.072.002-1.513 7.322H2.777l.305-1.516h4.553l.892-4.29H5.49l-.457 2.148H3.521Zm9.348 0h6.816v7.324H13.64zm1.517 1.517v4.291h3.787v-4.29z"
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
export class SvgUniqloJaIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
