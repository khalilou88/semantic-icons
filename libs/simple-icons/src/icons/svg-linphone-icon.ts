import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-linphone-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Linphone</title>
      <path
        d="M.976.001C.87-.005.787.01.737.047c-.533.41 1.518 4.677 1.518 4.677s-2.38 3.282-2.01 4.76C.232 9.425 1.804 7.76 1.804 7.76c.082.451 3.897 1.56 3.897 1.56.507.322.682.554.78 1.066v1.97c1.318.82 2.529 1.091 5.456 1.271 3.111-.133 4.396-.408 5.539-1.272 0 0-.123-1.518 0-2.051.123-.534.396-.838.82-.985 1.583-.362 2.365-.758 3.857-1.518l1.64 1.682c-.249-1.849-.677-2.873-1.968-4.676-1.026-1.172-1.683-1.786-3.036-2.79-1.472-.87-2.288-1.201-3.734-1.6-2.509-.514-3.892-.512-6.318 0-1.486.448-2.227.786-3.323 1.6 0 0-3.403-1.954-4.438-2.016zm22.738 14.44c-1.648 1.293-2.719 2.048-4.759 2.995-2.524.996-3.993 1.315-6.728 1.395-3.186-.055-4.74-.37-7.139-1.395-1.905-.834-2.938-1.464-4.717-2.871.427 1.77.826 2.703 1.805 4.266 1.042 1.411 1.683 2.04 2.912 2.913 1.33.913 2.128 1.312 3.652 1.805 1.369.33 2.132.434 3.487.451 1.381-.069 2.098-.22 3.282-.492 1.306-.52 1.97-.848 3.077-1.477 1.834 1.036 4.102 2.216 4.43 1.723.329-.492-1.476-4.472-1.476-4.472 1.204-1.724 1.696-2.885 2.174-4.84z"
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
export class SvgLinphoneIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
