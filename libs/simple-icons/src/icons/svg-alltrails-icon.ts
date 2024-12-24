import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-alltrails-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>AllTrails</title>
      <path
        d="M19.441 8.451c-.653-1.247-1.158-1.841-1.813-1.841-.731 0-1.053.387-1.494 1.079-.357.464-.7 1.1-1.273 1.036-.604-.063-.954-1.491-1.41-2.686-.625-1.63-.985-3.322-2.024-3.322-.593 0-1.111.54-1.915 1.747l-8.301 12.73c-.954 1.593-1.753 2.704-.742 3.748 1.187 1.142 3.975-.857 5.883-2.063 1.908-1.205 3.859-2.38 6.615-2.316 3.71.085 5.512 3.808 7.76 4.516 1.526.487 2.926-.074 3.223-1.65.174-.866-.129-1.707-.547-2.604zm-.254 7.467c-.753.56-1.803-.339-2.481-.72-.72-.401-1.94-1.364-4.124-1.332-1.78.021-2.745.687-3.805 1.407-2.3 1.565-4.379 3.384-4.972 2.443-.382-.603.646-1.809 3.063-5.574 1.718-2.676 2.927-4.813 3.785-4.813.948 0 1 .93 1.145 1.883.272 1.518 1.014 2.308 1.978 2.433 1.08.146 2.014-.76 2.756-.751.693.014 1.15 1.018 1.722 2.065.725 1.301 1.482 2.546.933 2.959z"
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
export class SvgAlltrailsIcon {
  class = input<string>('');

  _class = computed(() => cn('block', this.class()));

  svgClass = input<string>('');

  _svgClass = computed(() => cn('size-full', this.svgClass()));
}
