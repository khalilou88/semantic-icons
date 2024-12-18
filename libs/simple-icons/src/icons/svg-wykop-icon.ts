import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-wykop-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Wykop</title>
      <path
        d="m7.707 17.486 1.406-.68-1.406.68.69 1.384 1.407-.68-.69-1.384Zm-.69-1.384 1.407-.68-1.407.68.691 1.384 1.406-.68-.69-1.384Zm-.691-1.384 1.406-.677-1.406.677.69 1.385 1.407-.681-.691-1.381Zm-.69-1.384 1.406-.678-1.406.678.69 1.384 1.407-.677-.69-1.385Zm-.69-1.381 1.406-.68-1.406.68.69 1.383 1.406-.679-.69-1.383Zm-.692-1.384 1.406-.68-1.406.68.69 1.384 1.407-.68-.69-1.384Zm6.981 3.494 1.407-.68-1.407.68.69 1.384 1.407-.68-.69-1.384zm-.69-1.382 1.406-.68-1.406.68.69 1.384 1.407-.68-.691-1.383zm-.691-1.383 1.406-.68-1.406.68.69 1.383 1.407-.68-.69-1.384Zm-.69-1.382 1.406-.68-1.407.68.691 1.383 1.406-.68-.69-1.383Zm-.691-1.384 1.406-.68-1.406.68.69 1.384 1.407-.68-.69-1.383Zm6.98 3.495 1.406-.681-1.406.68.69 1.384 1.407-.68-.69-1.384zm-.69-1.385 1.406-.68-1.407.68.691 1.385 1.406-.681-.69-1.385zm-.691-1.382 1.406-.68-1.406.68.69 1.383 1.407-.68-.69-1.383Zm-.69-1.385 1.406-.68-1.407.68.69 1.385 1.407-.68-.69-1.384Zm-.691-1.382 1.406-.68-1.406.68.69 1.384 1.407-.68-.691-1.385ZM5.66 9.89l1.405-.68-1.406.68.69 1.385 1.407-.68-.69-1.384Zm.69 1.385 1.406-.68-1.406.68.69 1.383 1.407-.678-.69-1.385zm.69 1.382 1.407-.678-1.407.678.691 1.385 1.406-.681-.69-1.383zm.691 1.385 1.406-.681-1.406.68.69 1.383 1.407-.679-.69-1.384Zm.69 1.38 1.407-.678-1.406.679.69 1.384 1.406-.68-.69-1.384Zm.691 1.385 1.406-.68-1.406.68.69 1.384 1.407-.681-.69-1.383zm1.406-.68 1.407-.679-1.407.68.691 1.383 1.406-.678-.69-1.385zm1.407-.679 1.406-.68-1.406.68.69 1.385 1.407-.681-.69-1.385zM9.879 7.853l1.406-.681-1.406.68.69 1.384 1.407-.68-.69-1.384Zm.69 1.382 1.407-.68-1.406.68.69 1.383 1.407-.68-.691-1.383Zm.69 1.383 1.407-.68-1.407.68.69 1.384 1.407-.68-.69-1.383zm.692 1.384 1.406-.681-1.406.68.69 1.384 1.407-.679-.69-1.384zm.69 1.382 1.406-.679-1.407.679.691 1.383 1.406-.678-.69-1.384zm.69 1.383 1.406-.678-1.406.678.69 1.385 1.407-.679-.69-1.384zm1.406-.678 1.407-.679-1.407.679.69 1.384 1.407-.68-.69-1.384zm1.407-.679 1.406-.68-1.406.68.69 1.384 1.407-.68-.691-1.384zm1.405-.68 1.406-.68-1.406.68.69 1.384 1.407-.681-.69-1.383zm-.69-1.384 1.407-.68-1.407.68.69 1.384 1.407-.68-.69-1.384zm-.69-1.385 1.406-.677-1.406.677.69 1.385 1.407-.68-.691-1.383Zm-.69-1.38 1.405-.68-1.406.68.69 1.383 1.407-.679-.69-1.383Zm-.691-1.385 1.406-.678-1.406.678.69 1.384 1.406-.678-.69-1.384Zm-.691-1.384 1.406-.677-1.406.677.69 1.385 1.407-.678-.69-1.384Zm7.25 5.263c0-1.166-.044-2.17-.132-3.017-.089-.847-.255-1.51-.498-1.988-.31-.937-1.005-1.532-2.088-1.785-.862-.23-2.529-.342-5.003-.342h-3.182c-2.474 0-4.152.114-5.036.342-1.06.252-1.778.847-2.154 1.785-.42 1.006-.629 2.673-.629 5.005v1.887c0 2.333.21 4 .63 5.006.397.916 1.126 1.498 2.186 1.75.862.23 2.529.342 5.003.342h3.182c2.452 0 4.108-.114 4.97-.342 1.083-.25 1.79-.834 2.121-1.75.243-.48.41-1.143.498-1.987a29.54 29.54 0 0 0 .133-3.02zm2.456 5.628c-.134 1.074-.354 1.967-.663 2.676a5.589 5.589 0 0 1-1.326 1.765 5.16 5.16 0 0 1-1.955 1.081v.034c-.642.205-1.471.367-2.487.48-1.017.115-2.254.172-3.713.172h-3.215c-3.36 0-5.692-.321-6.995-.96-1.459-.664-2.443-1.888-2.952-3.672-.176-.664-.303-1.59-.381-2.78C.038 14.31 0 12.835 0 11.074 0 9.634.061 8.375.182 7.3.303 6.225.52 5.344.828 4.658a5.715 5.715 0 0 1 1.31-1.766c.542-.492 1.21-.876 2.005-1.15h.033c1.238-.434 3.327-.653 6.266-.653h3.215c3.227 0 5.547.333 6.962.996.707.319 1.31.79 1.807 1.407.497.616.867 1.383 1.11 2.297.133.64.244 1.556.332 2.744.088 1.19.132 2.665.132 4.427.001 1.421-.065 2.666-.197 3.743"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgWykopIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
