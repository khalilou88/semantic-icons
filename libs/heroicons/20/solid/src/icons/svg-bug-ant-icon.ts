import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bug-ant-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
    >
      <path
        fill-rule="evenodd"
        d="M6.56 1.14a.75.75 0 0 1 .177 1.045 3.989 3.989 0 0 0-.464.86c.185.17.382.329.59.473A3.993 3.993 0 0 1 10 2c1.272 0 2.405.594 3.137 1.518.208-.144.405-.302.59-.473a3.989 3.989 0 0 0-.464-.86.75.75 0 0 1 1.222-.869c.369.519.65 1.105.822 1.736a.75.75 0 0 1-.174.707 7.03 7.03 0 0 1-1.299 1.098A4 4 0 0 1 14 6c0 .52-.301.963-.723 1.187a6.961 6.961 0 0 1-1.158.486c.13.208.231.436.296.679 1.413-.174 2.779-.5 4.081-.96a19.655 19.655 0 0 0-.09-2.319.75.75 0 1 1 1.493-.146 21.239 21.239 0 0 1 .08 3.028.75.75 0 0 1-.482.667 20.873 20.873 0 0 1-5.153 1.249 2.521 2.521 0 0 1-.107.247 20.945 20.945 0 0 1 5.252 1.257.75.75 0 0 1 .482.74 20.945 20.945 0 0 1-.908 5.107.75.75 0 0 1-1.433-.444c.415-1.34.69-2.743.806-4.191-.495-.173-1-.327-1.512-.46.05.284.076.575.076.873 0 1.814-.517 3.312-1.426 4.37A4.639 4.639 0 0 1 10 19a4.639 4.639 0 0 1-3.574-1.63C5.516 16.311 5 14.813 5 13c0-.298.026-.59.076-.873-.513.133-1.017.287-1.512.46.116 1.448.39 2.85.806 4.191a.75.75 0 1 1-1.433.444 20.94 20.94 0 0 1-.908-5.107.75.75 0 0 1 .482-.74 20.838 20.838 0 0 1 5.252-1.257 2.493 2.493 0 0 1-.107-.247 20.874 20.874 0 0 1-5.153-1.249.75.75 0 0 1-.482-.667 21.342 21.342 0 0 1 .08-3.028.75.75 0 1 1 1.493.146 19.745 19.745 0 0 0-.09 2.319c1.302.46 2.668.786 4.08.96.066-.243.166-.471.297-.679a6.962 6.962 0 0 1-1.158-.486A1.348 1.348 0 0 1 6 6a4 4 0 0 1 .166-1.143 7.032 7.032 0 0 1-1.3-1.098.75.75 0 0 1-.173-.707 5.48 5.48 0 0 1 .822-1.736.75.75 0 0 1 1.046-.177Z"
        clip-rule="evenodd"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBugAntIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
