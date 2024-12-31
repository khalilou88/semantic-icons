import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-am-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-am"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#d90012" d="M0 0h512v170.7H0z" />
      <path fill="#0033a0" d="M0 170.7h512v170.6H0z" />
      <path fill="#f2a800" d="M0 341.3h512V512H0z" />
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
export class SvgAmFlagIcon {
  readonly class = input<string>('');
}
