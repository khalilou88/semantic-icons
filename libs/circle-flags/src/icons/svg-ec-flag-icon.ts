import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ec-flag-icon',
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
        <path fill="#d80027" d="m0 384 254.7-32.7L512 383.9V512H0z" />
        <path fill="#0052b4" d="m0 256 255-27 257 27v128H0z" />
        <path fill="#ffda44" d="M0 0h512v256H0z" />
        <circle cx="256" cy="256" r="89" fill="#ffda44" />
        <path
          fill="#338af3"
          d="M256 311.6c-30.7 0-55.7-25-55.7-55.6v-33.4a55.7 55.7 0 0 1 111.4 0V256c0 30.6-25 55.6-55.7 55.6z"
        />
        <path
          fill="#333"
          d="M345 122.4h-66.7a22.3 22.3 0 0 0-44.6 0H167a23 23 0 0 0 23 22.3h-.8c0 12.3 10 22.3 22.3 22.3 0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2 12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0 0 23-22.3z"
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgEcFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
