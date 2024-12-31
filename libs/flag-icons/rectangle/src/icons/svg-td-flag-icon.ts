import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-td-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-td"
      [class]="class()"
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
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTdFlagIcon {
  readonly class = input<string>('');
}
