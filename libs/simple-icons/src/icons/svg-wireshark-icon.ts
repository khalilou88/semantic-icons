import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-wireshark-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Wireshark</title>
      <path
        d="m2.95 0c-1.62 0-2.95 1.32-2.95 2.95v18.1c0 1.63 1.32 2.95 2.95 2.95h18.1c1.62 0 2.95-1.32 2.95-2.95v-18.1c-.00024-1.63-1.32-2.95-2.95-2.95zm0 1.09h18.1c1.04 0 1.85.818 1.85 1.86v14h-5.27c-.335-.796-2.57-6.47.283-10.9a.516.517 0 0 0-.443-.794c-5.24.0827-8.2 3.19-9.74 6.21-1.35 2.64-1.63 4.91-1.69 5.53h-4.95v-14c0-1.04.817-1.86 1.85-1.86zm13.6 5.24c-2.62 5.24.248 11.4.248 11.4a.516.517 0 0 0 .469.301h5.62v3.05c0 1.04-.817 1.86-1.85 1.86h-18.1c-1.04 0-1.85-.818-1.85-1.86v-3.05h5.39a.516.517 0 0 0 .514-.477s.226-2.8 1.66-5.62c1.34-2.62 3.67-5.17 7.91-5.57z"
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
export class SvgWiresharkIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
