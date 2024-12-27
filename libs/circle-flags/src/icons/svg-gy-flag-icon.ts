import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gy-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#6da544" d="M77.7 0H512v512H77.8z" />
        <path fill="#eee" d="M425.4 254.7 31.4 512h46.4L512 256 77.7 0H31.4z" />
        <path fill="#ffda44" d="M256 256 31.4 512l436.8-256L31.4 0z" />
        <path
          fill="#333"
          d="M0 0v1.8l219.6 253.8L0 510v2h31.4l256-256L31.4 0z"
        />
        <path fill="#d80027" d="M0 0v512l256-256L0 0z" />
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
export class SvgGyFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
