import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cucumber-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cucumber</title>
      <path
        d="M12.16 0C7.523-.03 3.223 3.007 1.886 7.715.241 13.51 3.746 19.51 9.601 20.925V24l.626-.094c6.715-1.008 11.876-6.254 12.271-12.472.258-4.041-1.795-8.064-5.108-10.01a9.62 9.62 0 0 0-1.999-.895A10.606 10.606 0 0 0 12.16 0zm-.084 1.087h.013c1.011 0 2.015.161 2.976.477a8.511 8.511 0 0 1 1.769.792c2.97 1.744 4.809 5.363 4.576 9.008-.35 5.52-4.816 10.208-10.72 11.36V20.04l-.44-.085a9.518 9.518 0 0 1 1.826-18.868zm2.042 4.306a.958.958 0 0 0-.843.333 3.83 3.83 0 0 0-.366.632c-.321.743-.436 1.803.043 2.385l-.001.003a3.08 3.08 0 0 0 1.918-1.641 1.68 1.68 0 0 0 .165-.698.996.996 0 0 0-.916-1.014zm-4.061.092a1.014 1.014 0 0 0-.926.982c.01.241.07.478.18.694a3.282 3.282 0 0 0 2.062 1.6c.413-.593.216-1.65-.118-2.386a2.17 2.17 0 0 0-.377-.574.934.934 0 0 0-.821-.316zM7.628 8c-.858.035-1.2 1.126-.516 1.645.198.146.41.273.632.38a3 3 0 0 0 2.53-.07A3.17 3.17 0 0 0 8.54 8.167 1.993 1.993 0 0 0 7.628 8zm7.762 3.216a3.32 3.32 0 0 0-1.228.296 3.087 3.087 0 0 0 1.718 1.755c.236.105.49.161.747.166a.933.933 0 0 0 .681-1.663c-.659-.46-1.105-.575-1.918-.554zm-5.85.03c-.297-.012-.635.01-.983.026-.559 0-1.228.278-1.494.565-.695.61-.188 1.751.73 1.644a1.71 1.71 0 0 0 .747-.167c.744-.322 1.628-1.202 1.734-1.89-.182-.12-.438-.165-.735-.178zm2.086 1.214c-.863.32-1.56.975-1.93 1.817a1.601 1.601 0 0 0-.167.681c-.02.908 1.091 1.361 1.711.698.14-.199.262-.41.362-.632.322-.69.449-1.928.024-2.564zm1.497.173a2.792 2.792 0 0 0-.116 2.442c.089.211.21.408.362.58.577.627 1.81.186 1.763-.63a1.62 1.62 0 0 0-.167-.697 3.043 3.043 0 0 0-1.842-1.695z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCucumberIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
