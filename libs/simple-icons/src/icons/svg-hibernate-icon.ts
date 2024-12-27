import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-hibernate-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Hibernate</title>
      <path
        d="M5.365 0L9.98 7.994h8.95L14.31 0H5.366zm-.431.248L.46 7.994l4.613 8.008L9.55 8.24 4.934.248zm13.992 7.75l-4.475 7.76 4.617 7.992 4.471-7.744-4.613-8.008zm-4.905 8.006l-8.95.002L9.688 24h8.946l-4.615-7.994.001-.002Z"
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
export class SvgHibernateIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
