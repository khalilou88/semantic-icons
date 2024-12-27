import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-sidequest-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>SideQuest</title>
      <path
        d="M24 10.409 18.689 1.21H8.065l2.518 4.359.769 1.331-.918 1.592H8.598l-.769-1.333-2.517-4.36L0 11.999l5.311 9.199 2.518-4.36.769-1.333h1.836l.919 1.593-.77 1.332-2.517 4.359H18.69L24 13.59h-6.571l-.919-1.591.919-1.59H24ZM5.288 5.328 6.27 7.03 4.763 9.64h6.334l3.169-5.486h-3.015l-.983-1.702h7.046l-5.183 8.977H1.763l3.525-6.101Zm4.98 16.219.983-1.703h3.015l-3.169-5.488H4.763l1.507 2.611-.982 1.704-3.525-6.104h10.368l1.364 2.363 3.819 6.617h-7.046Zm8.084-4.062 1.505-2.61h1.969l-3.525 6.102-3.109-5.382-2.077-3.596 2.459-4.257 2.727-4.72 3.525 6.102h-1.969l-1.505-2.611-3.17 5.486 3.17 5.486Z"
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
export class SvgSidequestIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
