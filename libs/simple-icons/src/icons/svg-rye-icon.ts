import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-rye-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Rye</title>
      <path
        d="M12 0C5.372 0 0 5.372 0 11.999c0 5.422 3.597 10.003 8.536 11.49.011-.186.028-.406.049-.669.026-.316-.142-.784-.382-.963-2.67-1.997-3.534-4.125-2.906-7.394a.197.197 0 0 1 .335-.101c.72.747 1.234 1.218 1.988 2.094 1.121 1.305 1.557 2.839 1.42 4.59.123-.531.3-1.057.358-1.596.242-2.222.775-4.326 2.426-5.958.425-.42.939-.823 1.488-1.033 1.448-.552 2.953-.965 3.931-2.339.08.049-.451 1.869-.541 2.263-.645 2.193-.42 2.3-1.186 4.45-.506 1.417-1.596 2.404-3.125 2.798-1.504.386-2.349 1.4-2.56 2.898-.077.558-.123.947-.149 1.246.75.147 1.525.225 2.318.225 6.628 0 12-5.372 12-11.999C24 5.374 18.629 0 12 0Zm-1.158 13.463a1.425 1.425 0 0 1-.306.689c-.578.658-1.105 1.844-1.418 3.425-.567-1.75-2.556-3.304-3.273-4.606-.247-.448-.051-1.963.281-3.223.607-1.782.637-2.096.981-3.594 1.689 1.365 2.041 2.267 2.954 3.879.456.804.957 1.904.782 3.43zm4.227-2.272c-1.586.647-2.565 1.018-3.576 1.82.252-1.354-.602-2.944-1.137-4.146-.079-.177.948-1.858 1.13-2.14 1.205-1.498 1.17-1.767 2.83-2.38 1.354-.5 2.719-.97 4.065-1.449-.24 3.291-.805 7.273-3.312 8.295z"
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
export class SvgRyeIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
