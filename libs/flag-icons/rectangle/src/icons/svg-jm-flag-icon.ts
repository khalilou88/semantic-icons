import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-jm-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-jm"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#000001" d="m0 0 320 240L0 480zm640 0L320 240l320 240z" />
        <path fill="#090" d="m0 0 320 240L640 0zm0 480 320-240 320 240z" />
        <path fill="#fc0" d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z" />
        <path fill="#fc0" d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z" />
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
export class SvgJmFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
