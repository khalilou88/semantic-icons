import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bw-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bw"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#00cbff" d="M0 0h512v512H0z" />
        <path fill="#fff" d="M0 192h512v128H0z" />
        <path fill="#000001" d="M0 212.7h512V299H0z" />
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
export class SvgBwFlagIcon {
  readonly class = input<string>('');
}
