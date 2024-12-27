import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-frontify-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Frontify</title>
      <path
        d="m23.13 15.777-2.588-1.495a.752.752 0 0 1-.376-.649v-2.989a1.743 1.743 0 0 0-.872-1.508l-2.588-1.494a.755.755 0 0 1-.375-.651V4.002a1.748 1.748 0 0 0-.871-1.511L12 .496 8.54 2.491a1.748 1.748 0 0 0-.868 1.511v2.989a.755.755 0 0 1-.375.65L4.706 9.137a1.746 1.746 0 0 0-.87 1.508v2.99a.75.75 0 0 1-.375.648l-2.59 1.495A1.75 1.75 0 0 0 0 17.287v3.989l3.46 1.994a1.74 1.74 0 0 0 1.741 0l2.589-1.494a.753.753 0 0 1 .75 0l2.589 1.494a1.745 1.745 0 0 0 1.743 0l2.588-1.494a.753.753 0 0 1 .75 0L18.8 23.27a1.74 1.74 0 0 0 1.741 0L24 21.276v-3.99a1.75 1.75 0 0 0-.87-1.51ZM15.343 4.002v2.989a1.748 1.748 0 0 0 .872 1.508l2.588 1.495a.753.753 0 0 1 .376.65v2.99a1.746 1.746 0 0 0 .87 1.507l2.589 1.495a.752.752 0 0 1 .375.65v2.85l-10.517-6.07V1.928l2.468 1.425a.75.75 0 0 1 .38.65zM1.367 16.636l2.589-1.495a1.748 1.748 0 0 0 .871-1.508v-2.989a.752.752 0 0 1 .374-.65L7.79 8.499a1.748 1.748 0 0 0 .871-1.508V4.002a.753.753 0 0 1 .375-.649l2.471-1.425v12.138L.993 20.136v-2.85a.752.752 0 0 1 .374-.65Zm18.677 5.784a.753.753 0 0 1-.75 0l-2.588-1.494a1.74 1.74 0 0 0-1.742 0l-2.588 1.494a.753.753 0 0 1-.75 0l-2.589-1.494a1.743 1.743 0 0 0-1.743 0L4.706 22.42a.753.753 0 0 1-.75 0l-2.468-1.425L12 14.919l10.512 6.07Z"
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
export class SvgFrontifyIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
