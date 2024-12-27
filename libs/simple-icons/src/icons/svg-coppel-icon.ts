import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-coppel-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Coppel</title>
      <path
        d="M.738 2.879a.716.716 0 0 0-.738.74v16.762c0 .428.35.74.738.74h22.52a.739.739 0 0 0 .739-.74V3.619c.039-.428-.31-.74-.738-.74Zm6.614 6.34c1.167 0 2.1.935 2.1 2.101 0 .234-.04.427-.079.621h12.058v1.868h-.973v2.527h-.97v-1.283h-.935v1.283h-.972v-2.527H9.373c.04.194.079.428.079.623a2.09 2.09 0 0 1-2.1 2.1c-1.011 0-1.83-.7-2.063-1.634a3.388 3.388 0 0 1-.62.077 2.092 2.092 0 0 1-2.102-2.1c0-1.167.934-2.1 2.101-2.1.234 0 .427 0 .621.079.234-.934 1.052-1.635 2.063-1.635Zm0 1.168c-.545 0-.973.428-.934.933 0 .506.428.932.934.932a.945.945 0 0 0 .933-.932.947.947 0 0 0-.933-.933zM4.668 11.94a.947.947 0 0 0-.933.934c0 .506.428.934.933.934a.947.947 0 0 0 .934-.934.947.947 0 0 0-.934-.934zm2.684 1.518a.947.947 0 0 0-.934.934c0 .505.428.933.934.933a.947.947 0 0 0 .933-.933.947.947 0 0 0-.933-.934z"
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
export class SvgCoppelIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
