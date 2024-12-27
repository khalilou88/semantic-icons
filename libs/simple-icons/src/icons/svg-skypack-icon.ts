import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-skypack-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Skypack</title>
      <path
        d="m19.82 11.27-5.997-2.994 5.999-2.993c.28-.14.453-.42.453-.734a.815.815 0 0 0-.454-.735L12.366.087a.814.814 0 0 0-.733 0L4.178 3.814a.815.815 0 0 0-.453.735v7.454c0 .28.15.548.384.699l.07.034 5.998 2.994-5.999 2.993a.815.815 0 0 0-.453.734c0 .314.174.594.453.735l7.455 3.727a.814.814 0 0 0 .361.081.814.814 0 0 0 .361-.081l7.454-3.727c.28-.14.455-.42.455-.735v-7.454a.785.785 0 0 0-.443-.733zm-7.814-9.54 5.625 2.819-5.625 2.818L6.38 4.55zm-6.64 4.135 4.811 2.41-4.81 2.412zm1.014 6.138 5.626-2.819 5.625 2.82-5.625 2.818zm4.81 5.044v4.81l-4.81-2.41zm7.455 1.91-5.824 2.911v-5.625l5.824-2.912v5.625z"
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
export class SvgSkypackIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
