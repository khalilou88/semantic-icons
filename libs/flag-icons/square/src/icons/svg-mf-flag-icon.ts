import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mf-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mf"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#000091" d="M0 0h170.7v512H0z" />
      <path fill="#e1000f" d="M341.3 0H512v512H341.3z" />
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
export class SvgMfFlagIcon {
  readonly class = input<string>('');
}
