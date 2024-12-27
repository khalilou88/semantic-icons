import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-lc-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-lc"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#65cfff" d="M0 0h512v512H0z" />
        <path fill="#fff" d="m254.8 44.8 173.5 421.6-344 1L254.7 44.8z" />
        <path fill="#000001" d="m255 103 150 362.6-297.5.8z" />
        <path fill="#ffce00" d="m254.8 256.1 173.5 210.8-344 .5z" />
      </g>
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
export class SvgLcFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
