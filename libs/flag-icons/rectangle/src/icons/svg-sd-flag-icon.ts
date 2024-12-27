import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sd-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sd"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="sd-a">
          <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#sd-a)"
        transform="scale(.9375)"
      >
        <path fill="#000001" d="M0 341.3h1024V512H0z" />
        <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
        <path fill="red" d="M0 0h1024.8v170.7H0z" />
        <path fill="#009a00" d="M0 0v512l341.3-256z" />
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSdFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
