import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-co-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-co"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#ffe800" d="M0 0h512v512H0z" />
        <path fill="#00148e" d="M0 256h512v256H0z" />
        <path fill="#da0010" d="M0 384h512v128H0z" />
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
export class SvgCoFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
