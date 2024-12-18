import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-freenet-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>freenet</title>
      <path
        d="M9.327 6.184c-.771-.17-1.577-.48-4.266-1.884C1.48 2.467.692 2.33.23 3.084c-.617.993-.051 3.512 2.415 8.103 1.594 3.015 4.112 6.904 4.574 7.418.103.102.223.137.326.068.103-.068.154-.154.069-.308-.377-.703-1.68-3.41-2.279-4.814-1.405-3.392-1.73-4.54-1.25-4.797.136-.068.308-.017.702.206 1.353.72 4.334 3.015 4.865 4.625.223.703.343 1.508.394 4.386.069 3.786.343 4.488 1.268 4.488 1.233 0 3.289-1.713 6.356-5.996 2.021-2.81 4.385-6.767 4.625-7.4.069-.138 0-.24-.086-.309-.102-.068-.222-.051-.308.086-.463.65-2.33 3.066-3.358 4.248-2.45 2.81-3.34 3.632-3.837 3.375-.137-.068-.171-.24-.171-.65 0-1.474.633-5.02 1.867-6.22.531-.53 1.25-1.027 3.906-2.5 3.512-1.954 4.009-2.519 3.546-3.29-.617-.993-3.22-1.799-8.771-2.124-3.615-.223-8.497-.137-9.2-.017-.154.017-.222.103-.24.222 0 .103.069.206.24.206.84.051 4.026.343 5.636.565 3.855.549 5.088.874 5.088 1.405 0 .137-.137.257-.53.463-1.388.788-5.02 2.038-6.75 1.661"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFreenetIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
