import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ye-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ye"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M0 0h640v472.8H0z" />
        <path fill="#f10600" d="M0 0h640v157.4H0z" />
        <path fill="#000001" d="M0 322.6h640V480H0z" />
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
export class SvgYeFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
