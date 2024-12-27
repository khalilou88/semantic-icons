import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bricks-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bricks</title>
      <path
        d="m7.578 0 .405.253v7.038a8.416 8.416 0 0 1 4.742-1.418c2.498 0 4.569.872 6.211 2.616 1.621 1.745 2.431 3.894 2.431 6.448 0 2.565-.816 4.714-2.448 6.447C17.277 23.128 15.212 24 12.725 24c-2.171 0-4.028-.776-5.569-2.329v1.907H2.633V.557L7.578 0Zm4.287 10.447c-1.193 0-2.189.405-2.988 1.215-.799.833-1.198 1.925-1.198 3.275 0 1.35.399 2.436 1.198 3.257.788.822 1.784 1.232 2.988 1.232 1.271 0 2.301-.427 3.088-1.282.777-.844 1.165-1.913 1.165-3.207 0-1.294-.394-2.369-1.182-3.224-.787-.844-1.811-1.266-3.071-1.266Z"
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
export class SvgBricksIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
