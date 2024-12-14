import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bd-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bd"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#006a4e" d="M0 0h512v512H0z" />
      <circle cx="230" cy="256" r="170.7" fill="#f42a41" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBdFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
