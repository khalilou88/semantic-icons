import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-vc-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-vc"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#f4f100" d="M0 0h510.4v512H0z" />
        <path fill="#199a00" d="M385.6 0H512v512H385.6z" />
        <path fill="#0058aa" d="M0 0h126.4v512H0z" />
      </g>
      <path
        fill="#199a00"
        fill-rule="evenodd"
        d="m191.2 138.6-49.5 76.2 47.8 79.3 46.7-78.6zm129.4 0L271 214.8l47.7 79.3 46.8-78.6-45-76.9zm-65.4 103.9-49.4 76.1 47.7 79.4 46.7-78.7z"
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
export class SvgVcFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
