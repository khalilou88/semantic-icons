import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bl-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bl"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#000091" d="M0 0h213.3v480H0z" />
      <path fill="#e1000f" d="M426.7 0H640v480H426.7z" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBlFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
