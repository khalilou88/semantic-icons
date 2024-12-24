import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-checkio-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CheckiO</title>
      <path
        d="M10.846 8.886L24 2.932v13.82L9.621 21.068 0 14.09l3.35-9.956 7.496 4.751v.001zm-4.582 2.067l3.923-1.768-6.065-3.85 2.142 5.618zm-5.393 2.44l4.842-2.187-2.179-5.717-2.662 7.904H.871zm22.526 2.54V4.256l-5.96 7.37 5.96 4.307zm-12.865 4.233l12.497-3.758-5.973-4.316-6.524 8.074zM.94 14.029l8.092 5.867-3.106-8.124L.94 14.029zm21.722-9.826c-5.085 2.296-10.163 4.6-15.25 6.895l9.445.284 5.805-7.178v-.001zM9.775 20.143l6.608-8.173-9.844-.29 3.236 8.462v.001z"
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
export class SvgCheckioIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
