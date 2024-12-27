import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sh-ac-flag-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#0052b4" d="M256 0h256v512H0V256Z" />
        <path
          fill="#eee"
          d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
        />
        <path
          fill="#d80027"
          d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
        />
        <path fill="#6da544" d="m320 144 48-80 48 80z" />
        <circle cx="368" cy="144" r="48" fill="#acabb1" />
        <path
          fill="#338af3"
          d="M320 144v77c0 36 48 48 48 48s48-12 48-48v-77z"
        />
        <rect
          width="32"
          height="128"
          x="288"
          y="128"
          fill="#ff9811"
          rx="16"
          ry="16"
        />
        <rect
          width="32"
          height="128"
          x="416"
          y="128"
          fill="#ff9811"
          rx="16"
          ry="16"
        />
        <path
          fill="#6da544"
          d="m368 160-48 67c2 11 9 19 16 26l32-45 32 45c8-7 14-15 16-26z"
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
export class SvgShAcFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
