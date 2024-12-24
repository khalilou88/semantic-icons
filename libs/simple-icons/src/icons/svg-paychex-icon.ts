import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-paychex-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Paychex</title>
      <path
        d="m21.118 11.891-.868-1.766h1.263l.365.977.75-.977H24l-1.57 1.766.919 1.994h-1.303l-.414-1.046-.879 1.046h-1.42Zm-3.907-1.766h3.108l-.197.967h-1.954l-.099.464h1.816l-.188.898h-1.815l-.1.464h1.994l-.197.967h-3.158Zm-3.691 0h1.164l-.276 1.303h1.056l.276-1.303h1.165l-.79 3.76h-1.154l.305-1.49h-1.055l-.316 1.49H12.74zm-.671 2.329c-.07.385-.365 1.52-1.935 1.52-1.095 0-1.618-.71-1.618-1.717 0-1.214.76-2.23 2.043-2.23.839 0 1.589.364 1.608 1.49h-1.095c.01-.356-.158-.553-.513-.553-.642 0-.878.74-.878 1.273 0 .316.078.79.611.79.365 0 .573-.247.642-.583zm-5.754.05-.809-2.379h1.165l.355 1.401.918-1.401h1.362L8.25 12.493l-.286 1.392H6.809Zm-1.894-1.086.138 1.125h-.72Zm-2.477 2.467h1.184l.286-.533h1.224l.059.533h1.135l-.573-3.76H4.895Zm-.987-2.793h.395c.246 0 .503.05.503.336 0 .246-.158.424-.622.424H1.58ZM0 13.885h1.145l.237-1.135h.78c.986 0 1.627-.651 1.627-1.411 0-.83-.444-1.214-1.134-1.214H.789Z"
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
export class SvgPaychexIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
