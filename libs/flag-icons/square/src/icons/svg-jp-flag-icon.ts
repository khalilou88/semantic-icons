import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-jp-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-jp"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="jp-a">
          <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#jp-a)"
        transform="translate(-128)scale(.72249)"
      >
        <path fill="#fff" d="M0 0h1063v708.7H0z" />
        <circle
          cx="523.1"
          cy="344.1"
          r="194.9"
          fill="#bc002d"
          transform="translate(-59.7 -34.5)scale(1.1302)"
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
export class SvgJpFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
