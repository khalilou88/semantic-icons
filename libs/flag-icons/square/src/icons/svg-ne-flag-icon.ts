import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ne-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ne"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#0db02b" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 0h512v341.3H0z" />
      <path fill="#e05206" d="M0 0h512v170.7H0z" />
      <circle cx="256" cy="256" r="72.5" fill="#e05206" />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgNeFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
