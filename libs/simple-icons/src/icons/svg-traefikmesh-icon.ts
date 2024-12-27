import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-traefikmesh-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Traefik Mesh</title>
      <path
        d="m8.646 4.738.034.02 2.945 1.66a.66.66 0 0 0 .65 0l2.92-1.644a.992.992 0 0 1 1.008 1.71l-.033.02-1.688.952a.33.33 0 0 0 0 .574l4.555 2.57a.66.66 0 0 0 .65 0l2.815-1.59a.993.993 0 0 1 1.01 1.71l-.035.02-1.585.89a.33.33 0 0 0 0 .578l1.594.897a.992.993 0 0 1-.94 1.748l-.035-.02-2.826-1.591a.66.66 0 0 0-.65 0l-4.605 2.595a.33.33 0 0 0 0 .575l1.905 1.072a.993.993 0 0 1-.94 1.748l-.035-.018-3.133-1.767a.66.66 0 0 0-.65 0L8.416 19.23a.992.992 0 0 1-1.006-1.71l.033-.02 1.93-1.088a.33.33 0 0 0 0-.575l-4.564-2.572a.66.66 0 0 0-.65 0l-2.689 1.51a.993.993 0 0 1-1.005-1.711l.034-.018 1.452-.817a.33.33 0 0 0 0-.577l-1.45-.817a.992.992 0 0 1 .941-1.746l.033.018 2.685 1.515a.66.66 0 0 0 .65 0l4.607-2.596a.33.33 0 0 0 0-.576l-1.711-.963a.992.993 0 0 1 .94-1.748Zm2.977 4.324-4.609 2.59a.33.33 0 0 0 0 .58l4.563 2.57a.66.66 0 0 0 .65 0l4.606-2.595a.33.33 0 0 0 0-.577l-4.558-2.57a.66.66 0 0 0-.65 0z"
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
export class SvgTraefikmeshIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
