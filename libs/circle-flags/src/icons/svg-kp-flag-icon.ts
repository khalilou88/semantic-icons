import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-kp-flag-icon',
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
        <path
          fill="#0052b4"
          d="M0 0h512v89l-61.2 165.6L512 423v89H0v-89l62.5-174.6L0 89z"
        />
        <path
          fill="#eee"
          d="M0 89h512v33.4l-28.1 130L512 389.7V423H0v-33.4L30 255 0 122.4z"
        />
        <path fill="#d80027" d="M0 122.4h512v267.2H0z" />
        <circle cx="157.5" cy="256" r="98.5" fill="#eee" />
        <path
          fill="#d80027"
          d="m157.5 157.5 22.1 68h71.6l-58 42 22.3 68.3-58-42.3-58 42.2 22.2-68.1-57.9-42h71.6z"
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
export class SvgKpFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
