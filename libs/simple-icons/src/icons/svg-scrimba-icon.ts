import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-scrimba-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Scrimba</title>
      <path
        d="M24 6.222a2.222 2.222 0 01-2.222 2.222h-8.89a2.222 2.222 0 010-4.444h8.89C23.005 4 24 4.995 24 6.222zm-7.333 9.334h-8.89a2.222 2.222 0 000 4.444h8.89a2.222 2.222 0 000-4.444zm0-5.778H13.11a2.222 2.222 0 000 4.444h3.556a2.222 2.222 0 000-4.444zM2.222 15.556a2.222 2.222 0 100 4.444 2.222 2.222 0 000-4.444z"
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgScrimbaIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
