import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-autocannon-icon',
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>AutoCannon</title>
      <path
        d="M19.293 18.131c-.245.277-.47.542-.708.795-.085.092-.192.037-.272-.027-.9-.715-7.786-7.358-12.016-11.122l.86-.937a1210.086 1210.086 0 0 1 12.136 11.291Zm-.8 4.954c-.488.243-.97.48-1.45.72-.074.039-.126.028-.187-.03-2.093-1.923-7.729-7.196-11.564-10.692a.523.523 0 0 1-.17-.327c-.157-1.086-.102-2.154.27-3.196.066-.18.124-.364.194-.572.267.237.525.456.773.688A1801.346 1801.346 0 0 0 19.8 22.154l.05.057-1.355.874zM8.595 6.284c-.04-.036-.083-.071-.12-.112-.068-.08-.035-.231.065-.263.707-.228 1.415-.453 2.123-.68.427 0 .856-.018 1.284.005.253.015.46.177.642.349 3.73 3.54 7.51 7.022 11.287 10.51.137.127.16.245.072.433a252.377 252.377 0 0 1-1.31 2.798A1406.269 1406.337 0 0 0 8.594 6.284ZM12.477.039c4.683.068 8.987 2.71 11.136 7.294-1.02.54-2.038 1.082-3.066 1.628-.995-2.252-2.615-3.868-4.87-4.843-1.72-.743-3.492-.845-5.31-.436-4.194.943-6.66 4.38-6.958 7.95-.357 4.291 2.282 7.922 6.115 9.246-.848 1.901-.22.49-1.268 2.834-.12.272-.193.3-.466.193a12.36 12.36 0 0 1-3.8-2.38c-1.11-1.009-2.025-2.158-2.696-3.497C.66 16.766.207 15.443.054 14.031c-.083-.763-.048-1.53-.04-2.296.034-2.627.98-4.922 2.562-6.97C4.182 2.689 6.26 1.279 8.786.535c1.004-.3 3.035-.527 3.69-.496Z"
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
export class SvgAutocannonIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
