import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bastyon-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bastyon</title>
      <path
        d="M22.333 19.849a5.439 5.439 0 0 0-6.5-.829 7.914 7.914 0 0 1-3.837.987A8 8 0 0 1 5 15.91a5.473 5.473 0 0 1-.037 5.359 11.6 11.6 0 0 0 12.671.9 1.825 1.825 0 0 1 2.188.3L21.356 24l2.562-2.568Zm-2.096.404a11.664 11.664 0 0 0 1.931-13.89 1.836 1.836 0 0 1 .3-2.193L24 2.635 21.438.067l-1.58 1.589a5.471 5.471 0 0 0-.827 6.516A8 8 0 0 1 15.916 19l2.086 3c.917-.51 1.471-.981 2.235-1.747zm-.005-16.481A11.6 11.6 0 0 0 6.373 1.836a1.816 1.816 0 0 1-.9.235 1.82 1.82 0 0 1-1.291-.536L2.654 0 .091 2.568l1.586 1.583A5.422 5.422 0 0 0 5.476 5.7a5.412 5.412 0 0 0 2.7-.718A7.961 7.961 0 0 1 18.985 8.1l3.083-1.94a10.462 10.462 0 0 0-1.836-2.388ZM5 15.909l-.034-.062A8 8 0 0 1 8.084 5.015l-2.023-3.03C5.144 2.5 4.527 3 3.763 3.766a11.664 11.664 0 0 0-1.931 13.89 1.836 1.836 0 0 1-.3 2.193L0 21.384l2.562 2.568 1.579-1.589a5.477 5.477 0 0 0 .824-1.094A5.473 5.473 0 0 0 5 15.909Z"
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
export class SvgBastyonIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
