import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-testrail-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TestRail</title>
      <path
        d="M7.27 23.896 4.5 21.124a.352.352 0 0 1 0-.5l2.772-2.77a.352.352 0 0 1 .5 0l2.772 2.772a.352.352 0 0 1 0 .5l-2.772 2.77a.352.352 0 0 1-.5 0H7.27zm4.48-4.48-2.772-2.772a.352.352 0 0 1 0-.498l2.772-2.772a.352.352 0 0 1 .5 0l2.77 2.772a.352.352 0 0 1 0 .5l-2.77 2.77a.352.352 0 0 1-.499 0zm4.48-4.48-2.77-2.772a.352.352 0 0 1 0-.498l2.771-2.772a.352.352 0 0 1 .5 0l2.77 2.772a.352.352 0 0 1 0 .498l-2.772 2.772a.352.352 0 0 1-.5 0h.002zm-8.876.084-2.772-2.77a.352.352 0 0 1 0-.499l2.772-2.773a.352.352 0 0 1 .5 0l2.772 2.772a.352.352 0 0 1 0 .498l-2.772 2.774a.352.352 0 0 1-.5 0v-.002zm4.48-4.48L9.062 7.77a.352.352 0 0 1 0-.5l2.772-2.772a.352.352 0 0 1 .5 0l2.77 2.772a.352.352 0 0 1 0 .498l-2.77 2.772a.352.352 0 0 1-.499 0v-.002.001zM7.44 6.15 4.666 3.37a.352.352 0 0 1 0-.5L7.44.104a.352.352 0 0 1 .5 0l2.772 2.772a.352.352 0 0 1 0 .5L7.938 6.142a.352.352 0 0 1-.5 0l.002.006v.001z"
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
export class SvgTestrailIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
