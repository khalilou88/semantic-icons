import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ga-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ga"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#ffe700" d="M512 512H0V0h512z" />
        <path fill="#36a100" d="M512 170.7H0V0h512z" />
        <path fill="#006dbc" d="M512 512H0V341.3h512z" />
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
export class SvgGaFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
