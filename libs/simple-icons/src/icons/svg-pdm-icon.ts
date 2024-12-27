import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pdm-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PDM</title>
      <path
        d="M10.44.418a3.12 3.12 0 0 1 3.12 0l7.69 4.44a3.12 3.12 0 0 1 1.56 2.702v8.88a3.12 3.12 0 0 1-1.56 2.702l-7.69 4.44a3.12 3.12 0 0 1-3.12 0l-7.69-4.44a3.12 3.12 0 0 1-1.56-2.702V7.56a3.12 3.12 0 0 1 1.56-2.702Zm3.87 3.315L12.311 2.58a.624.624 0 0 0-.624 0l-7.69 4.44a.624.624 0 0 0-.312.54v3.774l10.623-6.133Zm2.496 13.643 1.255.725 1.941-1.12a.624.624 0 0 0 .312-.541V7.56a.624.624 0 0 0-.312-.54l-3.196-1.845Zm-2.497-1.441V8.083l-6.8 3.926ZM3.686 14.217v2.223c0 .223.119.429.312.54l7.69 4.44a.624.624 0 0 0 .624 0l3.252-1.878-10.55-6.091Z"
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
export class SvgPdmIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
