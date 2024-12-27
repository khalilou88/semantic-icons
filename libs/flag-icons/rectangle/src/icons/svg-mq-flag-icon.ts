import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mq-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-mq"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#231f1e" d="M0 0h640v480H0z" />
      <path fill="#00a650" d="M0 0h640v240H0z" />
      <path fill="#ef1923" d="m0 0 320 240L0 480z" />
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
export class SvgMqFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
