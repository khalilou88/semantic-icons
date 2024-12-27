import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-xmpp-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>XMPP</title>
      <path
        d="m3.401 4.594 1.025.366 3.08.912c-.01.18-.016.361-.016.543 0 3.353 1.693 7.444 4.51 10.387 2.817-2.943 4.51-7.034 4.51-10.387 0-.182-.006-.363-.016-.543l3.08-.912 1.025-.366L24 3.276C23.854 8.978 19.146 14.9 13.502 18.17c1.302 1.028 2.778 1.81 4.388 2.215v.114l.004.001v.224a14.55 14.55 0 0 1-4.829-1.281A20.909 20.909 0 0 1 12 18.966c-.353.17-.708.329-1.065.477a14.55 14.55 0 0 1-4.829 1.281V20.5l.004-.001v-.113c1.61-.406 3.086-1.188 4.389-2.216C4.854 14.9.146 8.978 0 3.276l3.401 1.318Z"
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
export class SvgXmppIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
