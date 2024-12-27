import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-comicfury-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ComicFury</title>
      <path
        d="m0 6.959 1.899-3.256 2.725 2.736 2.973-.204L9.3 3.297l2.213 2.693 8.655-.252.406-1.085L24 5.128v5.268l-11.248 3.526-1.085 6.781H0V6.959zm2.195-.748L1.041 8.137l1.75 1.748 1.133-1.948-1.729-1.726zm7.409-.448L8.48 7.546l1.224 1.598 1.137-1.766-1.237-1.615zm3.901 3.751-1.992.349.997 2.025.995-2.374zm3.319-.565-1.992.348.996 2.025.996-2.373zm3.228-.611-1.991.349.996 2.025.995-2.374zm3.183-.566-1.992.349.996 2.025.996-2.374z"
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
export class SvgComicfuryIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
