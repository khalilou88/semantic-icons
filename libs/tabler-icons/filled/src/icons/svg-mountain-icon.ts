import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-mountain-icon',
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-mountain"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6.18 10.95l2.54 3.175l.084 .093a1 1 0 0 0 1.403 -.01l1.637 -1.638l1.324 1.985a1 1 0 0 0 1.457 .226l3.632 -2.906l3.647 7.697a1 1 0 0 1 -.904 1.428h-18a1 1 0 0 1 -.904 -1.428zm5.82 -7.878a3.3 3.3 0 0 1 2.983 1.888l2.394 5.057l-3.15 2.52l-1.395 -2.092l-.075 -.099a1 1 0 0 0 -1.464 -.053l-1.711 1.709l-1.301 -1.627l-1.151 -1.435l1.888 -3.98a3.3 3.3 0 0 1 2.982 -1.888"
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
export class SvgMountainIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
