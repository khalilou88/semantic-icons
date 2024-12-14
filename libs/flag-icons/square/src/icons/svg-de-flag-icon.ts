import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-de-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-de"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fc0" d="M0 341.3h512V512H0z" />
      <path fill="#000001" d="M0 0h512v170.7H0z" />
      <path fill="red" d="M0 170.7h512v170.6H0z" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDeFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
