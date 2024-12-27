import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-eh-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-eh"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#000001" d="M0 0h512v256H0z" />
      <path fill="#007a3d" d="M0 256h512v256H0z" />
      <path fill="#fff" d="M0 149.3h512v213.3H0z" />
      <path fill="#c4111b" d="m0 0 256 256L0 512Z" />
      <g stroke-width="1.7" transform="translate(-135 -6.5)scale(1.02539)">
        <circle cx="512" cy="256" r="68.3" fill="#c4111b" />
        <circle cx="537.6" cy="256" r="68.3" fill="#fff" />
        <path
          fill="#c4111b"
          d="m493.7 297.3 29-20.8 29 21.2-10.8-34.2 29-21-35.8-.2-11-34-11.3 33.9-35.7-.1 28.7 21.2z"
        />
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
export class SvgEhFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
