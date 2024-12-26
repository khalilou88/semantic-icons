import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-codestream-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>CodeStream</title>
      <path
        d="M10.5408 18.2457a6.4596 6.4596 0 0 1 0-12.5804V1.2199A.4315.4315 0 0 0 9.795.9261l-9.36 9.9713a1.61 1.61 0 0 0 0 2.2011l9.36 9.9754a.4315.4315 0 0 0 .7463-.2954zm2.9184 0a6.4596 6.4596 0 0 0 0-12.5804V1.2199a.4315.4315 0 0 1 .7463-.2938l9.3596 9.9713a1.61 1.61 0 0 1 0 2.2011l-9.3596 9.9754a.4315.4315 0 0 1-.7463-.2954zm2.2636-6.2902a3.7276 3.7307 0 0 1-3.7277 3.7307 3.7276 3.7307 0 0 1-3.7276-3.7307 3.7276 3.7307 0 0 1 3.7276-3.7307 3.7276 3.7307 0 0 1 3.7277 3.7307z"
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
export class SvgCodestreamIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
