import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ga-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ga"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#ffe700" d="M640 480H0V0h640z" />
        <path fill="#36a100" d="M640 160H0V0h640z" />
        <path fill="#006dbc" d="M640 480H0V320h640z" />
      </g>
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGaFlagIcon {
  readonly class = input<string>('');
}
