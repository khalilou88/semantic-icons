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
      id="flag-icons-cd"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="cd-a">
          <path fill="#fff" d="M0-88h600v600H0z" />
        </clipPath>
      </defs>
      <g clip-path="url(#cd-a)" transform="translate(0 75.1)scale(.853)">
        <path fill="#007fff" d="M0-88h800v600H0z" />
        <path
          fill="#f7d618"
          d="M36 32h84l26-84 26 84h84l-68 52 26 84-68-52-68 52 26-84zM750-88 0 362v150h50L800 62V-88z"
        />
        <path fill="#ce1021" d="M800-88 0 392v120L800 32z" />
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
export class SvgCdFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
