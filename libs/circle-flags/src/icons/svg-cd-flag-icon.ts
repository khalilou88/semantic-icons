import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cd-flag-icon',
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
        <path fill="#338af3" d="M0 0h401.9L512 110.3V512H110.3L0 401.9z" />
        <path
          fill="#ffda44"
          d="M401.9 0 0 401.9V449l63 63h47.3L512 110.3V63L449 0z"
        />
        <path fill="#d80027" d="M449 0 0 449v63h63L512 63V0h-63z" />
        <path
          fill="#ffda44"
          d="m136.4 78 13.8 42.4H195l-36 26.3 13.7 42.5-36.2-26.3-36 26.3 13.7-42.5L78 120.4h44.7z"
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
export class SvgCdFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
