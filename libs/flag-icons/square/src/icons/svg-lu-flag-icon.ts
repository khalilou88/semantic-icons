import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lu-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-lu"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#ed2939" d="M0 0h512v170.7H0z" />
      <path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <path fill="#00a1de" d="M0 341.3h512V512H0z" />
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
export class SvgLuFlagIcon {
  readonly class = input<string>('');
}
