import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-payhip-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Payhip</title>
      <path
        d="M3.695 0A3.696 3.696 0 0 0 0 3.695v12.92A7.384 7.384 0 0 0 7.385 24h12.92A3.696 3.696 0 0 0 24 20.305V0H3.695zm11.653 5.604a3.88 3.88 0 0 1 .166 0 3.88 3.88 0 0 1 2.677 1.132 3.88 3.88 0 0 1 0 5.48l-.36.356c-1.826-1.825-3.648-3.656-5.476-5.482l.358-.354a3.88 3.88 0 0 1 2.635-1.132zm-6.627.125a3.88 3.88 0 0 1 2.566 1c2.068 2.062 4.127 4.133 6.192 6.199l-5.481 5.482-6.19-6.203C3.549 9.7 5.346 5.702 8.722 5.729zm-1.744 1.71a.464.464 0 0 0-.465.465v1.817c0 .256.208.463.465.463h1.816a.464.464 0 0 0 .463-.463l.008-1.817A.464.464 0 0 0 8.8 7.44H6.977z"
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
export class SvgPayhipIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
