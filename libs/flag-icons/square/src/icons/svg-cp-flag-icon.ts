import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cp-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-cp"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M0 0h512v512H0z" />
        <path fill="#000091" d="M0 0h170.7v512H0z" />
        <path fill="#e1000f" d="M341.3 0H512v512H341.3z" />
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
export class SvgCpFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
