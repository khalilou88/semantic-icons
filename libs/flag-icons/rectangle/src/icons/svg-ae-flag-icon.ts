import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ae-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ae"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#00732f" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#000001" d="M0 320h640v160H0z" />
      <path fill="red" d="M0 0h220v480H0z" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAeFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
