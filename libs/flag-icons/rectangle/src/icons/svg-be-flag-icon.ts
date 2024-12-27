import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-be-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-be"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#000001" d="M0 0h213.3v480H0z" />
        <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
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
export class SvgBeFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
