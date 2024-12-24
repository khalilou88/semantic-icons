import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-lifx-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LIFX</title>
      <path
        d="M3.128 8.2a3.11 3.11 0 0 0-2.212.92A3.148 3.148 0 0 0 0 11.347a3.144 3.144 0 0 0 .916 2.226l.27.266.014-.014a2.729 2.729 0 0 1 1.932-.795 2.739 2.739 0 0 1 1.931.795l.015.014.266-.27a3.157 3.157 0 0 0 .916-2.226c0-.806-.305-1.612-.916-2.226A3.139 3.139 0 0 0 3.128 8.2zm0 .725a2.39 2.39 0 0 1 1.701.707 2.431 2.431 0 0 1 .156 3.252 3.42 3.42 0 0 0-3.72 0 2.45 2.45 0 0 1-.544-1.537c0-.618.234-1.24.706-1.715a2.38 2.38 0 0 1 1.701-.707zm5.316.082v6.025h3.167v-1.487H9.928l.004-4.538zm4.247 0v6.022h1.487V9.007zm2.585 0v6.025h1.487V13.15h1.918v-1.41h-1.918v-1.228h3.047l.863 1.545-1.662 2.975h1.662l.813-1.53.696 1.53h1.779l-1.665-2.975L24 9.007h-1.779l-.735 1.686-.735-1.686zM3.128 13.75c-.518 0-1.04.202-1.438.6l.444.443a1.41 1.41 0 0 1 1.996 0l.443-.443c-.4-.398-.92-.6-1.445-.6zm0 1.324a.707.707 0 0 0-.507.213l.507.511.508-.511a.701.701 0 0 0-.508-.213Z"
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
export class SvgLifxIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
