import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sharex-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>ShareX</title>
      <path
        d="M5.217 15.774v.054c.083 3.469 2.543 6.416 5.99 7.607h-.002c1.095.377 2.246.568 3.404.565 5.159 0 9.347-3.697 9.389-8.275a7.49 7.49 0 0 0-.563-2.668c-1.19 3.446-4.138 5.906-7.607 5.987h-.176c-2.01 0-3.854-.8-5.294-2.13-1.656-1.53-2.78-3.765-3.01-6.295-1.3 1.407-2.093 3.2-2.13 5.155Zm3.01-10.557H8.17c-3.36.08-6.23 2.39-7.49 5.669l-.117.32A10.408 10.408 0 0 0 0 14.608c0 5.159 3.697 9.347 8.275 9.389a7.49 7.49 0 0 0 2.668-.563c-3.446-1.19-5.906-4.138-5.987-7.607v-.176c0-2.01.8-3.854 2.13-5.296 1.53-1.656 3.765-2.78 6.296-3.01-1.407-1.3-3.2-2.093-5.155-2.129Zm7.601 13.566.324-.015c3.327-.223 6.129-2.636 7.283-5.974A10.36 10.36 0 0 0 24 9.392c0-5.16-3.697-9.347-8.275-9.39a7.49 7.49 0 0 0-2.668.563c3.446 1.19 5.906 4.14 5.987 7.607v.176c0 2.01-.8 3.854-2.13 5.294-1.53 1.656-3.765 2.78-6.295 3.01 1.407 1.3 3.2 2.094 5.155 2.13zM.002 8.275a7.49 7.49 0 0 0 .563 2.668c1.19-3.446 4.14-5.906 7.607-5.987h.176c2.01 0 3.854.8 5.294 2.13.334.31.643.643.925.999 1.146 1.436 1.9 3.27 2.085 5.297 1.3-1.407 2.094-3.2 2.13-5.155V8.17C18.7 4.703 16.24 1.756 12.795.564A10.408 10.408 0 0 0 9.393 0C4.23 0 .045 3.697.002 8.275Z"
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
export class SvgSharexIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
