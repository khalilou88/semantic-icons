import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-eraser-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Eraser</title>
      <path
        d="M4.186 7.328c-.248 0-.482.168-.608.443l-3.476 7.51c-.283.61.057 1.39.605 1.39h10.682V7.329zm8.425 0-.002 9.344h7.205c.248 0 .482-.168.608-.443l3.476-7.51c.283-.61-.057-1.39-.605-1.39Z"
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
export class SvgEraserIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
