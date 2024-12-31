import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hu-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-hu"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#fff" d="M512 512H0V0h512z" />
        <path fill="#388d00" d="M512 512H0V341.3h512z" />
        <path fill="#d43516" d="M512 170.8H0V.1h512z" />
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
export class SvgHuFlagIcon {
  readonly class = input<string>('');
}
