import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-rxdb-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>RxDB</title>
      <path
        d="M11.096 3.452h1.15v-1.15h1.151v1.15h6.411v4.932H4.192V1.15h1.15V2.3h1.151V0h1.15v1.15h1.152v2.302h1.15V1.151h1.151v2.301zM4.192 14.466h15.616V9.534H4.192v4.932zm15.616 1.15H4.192v4.932h6.41v1.15h1.151v-1.15h1.151v2.301h1.15v-2.301h1.152v2.301h1.15V24h1.151v-2.301h1.15v1.15h1.151v-7.233z"
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
export class SvgRxdbIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
