import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-nl-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-nl"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#ae1c28" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#21468b" d="M0 320h640v160H0z" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgNlFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
