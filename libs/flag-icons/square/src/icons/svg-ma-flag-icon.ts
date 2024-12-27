import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ma-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ma"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#c1272d" d="M512 0H0v512h512z" />
      <path
        fill="none"
        stroke="#006233"
        stroke-width="12.5"
        d="m256 191.4-38 116.8 99.4-72.2H194.6l99.3 72.2z"
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
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMaFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
