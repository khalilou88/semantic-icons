import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-pluscodes-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Plus Codes</title>
      <path
        d="M12 0a2.4 2.4 0 00-2.4 2.4A2.4 2.4 0 0012 4.8a2.4 2.4 0 002.4-2.4A2.4 2.4 0 0012 0zM9.543 9.543v4.914h4.914V9.543zM2.4 9.6A2.4 2.4 0 000 12a2.4 2.4 0 002.4 2.4A2.4 2.4 0 004.8 12a2.4 2.4 0 00-2.4-2.4zm19.2 0a2.4 2.4 0 00-2.4 2.4 2.4 2.4 0 002.4 2.4A2.4 2.4 0 0024 12a2.4 2.4 0 00-2.4-2.4zM12 19.2a2.4 2.4 0 00-2.4 2.4A2.4 2.4 0 0012 24a2.4 2.4 0 002.4-2.4 2.4 2.4 0 00-2.4-2.4z"
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
export class SvgPluscodesIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
