import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bf-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bf"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#de0000" d="M640 479.6H.4V0H640z" />
        <path fill="#35a100" d="M639.6 480H0V240.2h639.6z" />
        <path
          fill="#fff300"
          d="m254.6 276.2-106-72.4h131L320 86.6 360.4 204l131-.1-106 72.4 40.5 117.3-106-72.6L214 393.4"
        />
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
export class SvgBfFlagIcon {
  readonly class = input<string>('');
}
