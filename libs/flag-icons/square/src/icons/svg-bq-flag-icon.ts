import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bq-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bq"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#21468b" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 0h512v341.3H0z" />
      <path fill="#ae1c28" d="M0 0h512v170.7H0z" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBqFlagIcon {
  readonly class = input<string>('');
}
