import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-graylog-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Graylog</title>
      <path
        d="M6.93 11.369a.84.84 0 01.75.45h.705l1.112-2.675a.483.483 0 01.3-.278c.235-.042.47.086.513.321l1.177 5.177 1.198-6.974a.41.41 0 01.32-.342.44.44 0 01.535.321l1.284 5.24.663-1.946a.449.449 0 01.17-.235c.193-.129.471-.086.6.107l.556.791c.021.193.021.385.021.578a8.3 8.3 0 01-.043.748c-.085-.021-.15-.085-.213-.15l-.557-.77-.855 2.589a.448.448 0 01-.556.278.393.393 0 01-.278-.3l-1.156-4.663-1.219 7.08a.449.449 0 01-.492.364c-.192-.021-.32-.17-.363-.363l-1.305-5.99-.706 1.69a.439.439 0 01-.406.278H7.679a.863.863 0 01-.748.428.88.88 0 01-.877-.877c.02-.47.406-.877.877-.877zM12 .396c6.973 0 12 5.369 12 11.615 0 6.353-4.77 11.593-12 11.593S0 18.364 0 12.011C-.02 5.765 5.005.396 12 .396zM4.064 12.01c0 4.256 3.658 8 7.915 8 4.256 0 7.914-3.744 7.914-8 0-4.6-3.658-8.043-7.914-8.043-4.236 0-7.915 3.444-7.915 8.043z"
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
export class SvgGraylogIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
