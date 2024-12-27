import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cg-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-cg"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <defs>
        <clipPath id="cg-a">
          <path fill-opacity=".7" d="M-79.5 32h640v480h-640z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#cg-a)"
        transform="translate(79.5 -32)"
      >
        <path fill="#ff0" d="M-119.5 32h720v480h-720z" />
        <path fill="#00ca00" d="M-119.5 32v480l480-480z" />
        <path fill="red" d="M120.5 512h480V32z" />
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
export class SvgCgFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
