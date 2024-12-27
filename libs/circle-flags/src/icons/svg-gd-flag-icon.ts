import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gd-flag-icon',
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
        <path fill="#ffda44" d="M23.6 23.7h464.8v464.7H23.6z" />
        <path
          fill="#496e2d"
          d="M0 75.1 38 38l436.3 436.4 37.7-37.5V75l-39.6-35.5L40.2 471.8 0 436.8z"
        />
        <circle cx="256" cy="256.1" r="89" fill="#a2001d" />
        <path
          fill="#ffda44"
          d="m256 167 20 61.5h64.6l-52.3 38 20 61.3-52.3-38-52.3 38 20-61.3-52.3-38H236zM256 .2z"
        />
        <path fill="#a2001d" d="M0 0h512v75.1H0zm0 436.8h512v75.1H0z" />
        <path
          fill="#ffda44"
          d="m256 28 4.1 12.7h13.5l-10.9 8 4.2 12.6-10.9-7.9-10.8 8 4.1-12.8-10.9-8H252zm-62 0 4 12.7h13.5l-10.9 8 4.2 12.6-10.9-7.9-10.8 8 4.1-12.8-10.8-8h13.4zm124 0 4.2 12.7h13.4l-10.8 8 4.1 12.6-10.8-7.9-10.9 8 4.2-12.8-10.9-8H314zm-62 422.8 4.1 12.7h13.5l-10.9 8 4.2 12.7-10.9-8-10.8 8 4.1-12.8-10.9-7.9H252zm-62 0 4 12.7h13.5l-10.9 8 4.2 12.7-10.9-8-10.8 8 4.1-12.8-10.8-7.9h13.4zm124 0 4.2 12.7h13.4l-10.8 8 4.1 12.7-10.8-8-10.9 8 4.2-12.8-10.9-7.9H314zm-240-199a22.3 22.3 0 0 1-37.6 23.9c-12-18.8-5-49.5-5-49.5S66 233 78 251.9z"
        />
        <circle cx="65.1" cy="273.2" r="11.1" fill="#a2001d" />
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
export class SvgGdFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
