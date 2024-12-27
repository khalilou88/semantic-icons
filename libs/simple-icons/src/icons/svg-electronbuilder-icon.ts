import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-electronbuilder-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>electron-builder</title>
      <path
        d="M12 7.01a3.506 3.506 0 003.506-3.505A3.506 3.506 0 0012 0a3.506 3.506 0 00-3.506 3.506A3.506 3.506 0 0012 7.01m0 4.137C9.243 8.588 5.574 7.01 1.484 7.01v12.852C5.574 19.863 9.243 21.44 12 24c2.757-2.56 6.426-4.137 10.516-4.137V7.01c-4.09 0-7.759 1.578-10.516 4.137z"
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
export class SvgElectronbuilderIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
