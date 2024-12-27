import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gurobi-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Gurobi</title>
      <path
        d="m11.036 0 7.032 1.359L24 18.37 18.37 24 0 17.635 1.805 5.952 11.036 0Zm12.389 18.239L17.887 2.36l-3.557 7.83 3.88 13.264 5.215-5.214Zm-5.822-16.46L11.138.528l-8.71 5.617 11.554 3.6 3.62-7.968Z"
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
export class SvgGurobiIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
