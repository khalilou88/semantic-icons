import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-td-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-td"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#002664" d="M0 0h214v480H0z" />
        <path fill="#c60c30" d="M426 0h214v480H426z" />
        <path fill="#fecb00" d="M214 0h212v480H214z" />
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
export class SvgTdFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
