import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-scribd-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Scribd</title>
      <path
        d="M11.635 0C6.633 0 3.139 3.067 3.139 7.459v.06c.008.085.004.169.004.254 0 1.725.438 3.09 1.253 4.057.815.967 1.885 1.451 3.21 1.451 1.108 0 1.98-.336 2.617-1.008a3.384 3.384 0 0 0 .955-2.412c0-.96-.308-1.715-.926-2.263-.618-.549-1.278-.823-1.979-.823a4.47 4.47 0 0 0-.859.112c-.344.086-.573.129-.687.129-.51 0-.764-.308-.764-.924 0-1.035.516-1.925 1.547-2.67.302-.218.612-.406.927-.568.907-.411 1.988-.637 3.198-.637 2.33 0 4.423.61 6.238 1.816l-1.004 1.602 1.893 1.248 2.205-3.303-.799-.644C17.75.987 14.878 0 11.635 0Zm5.683 10.682c-1.108 0-1.98.336-2.617 1.007a3.384 3.384 0 0 0-.955 2.413c0 .96.31 1.715.928 2.263.617.548 1.276.823 1.976.823.217 0 .503-.038.86-.112.344-.086.572-.129.687-.129.51 0 .764.308.764.924 0 .222-.025.436-.072.645-.849 2.079-3.022 3.267-6.166 3.267-2.671 0-5.233-.848-7.319-2.408l1.233-1.52-1.785-1.39L2.25 19.63l.783.703C5.673 22.698 9.114 24 12.723 24c.402 0 .791-.018 1.172-.05 2.077-.094 4.15-.87 5.61-2.188 1.497-1.35 2.245-3.215 2.245-5.592 0-1.725-.407-3.07-1.223-4.037-.814-.968-1.884-1.451-3.209-1.451z"
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
export class SvgScribdIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
