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
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#d90012" d="M0 0h640v160H0z" />
      <path fill="#0033a0" d="M0 160h640v160H0z" />
      <path fill="#f2a800" d="M0 320h640v160H0z" />
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
      fill: currentColor;
      color: currentColor;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAmFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
