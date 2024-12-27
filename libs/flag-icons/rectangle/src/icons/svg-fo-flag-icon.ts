import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fo-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-fo"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="fo-a">
          <path fill-opacity=".7" d="M-78 32h640v480H-78z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="0"
        clip-path="url(#fo-a)"
        transform="translate(78 -32)"
      >
        <path fill="#fff" d="M-78 32h663.9v480H-78z" />
        <path
          fill="#003897"
          d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186z"
        />
        <path
          fill="#d72828"
          d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76z"
        />
      </g>
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
export class SvgFoFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
