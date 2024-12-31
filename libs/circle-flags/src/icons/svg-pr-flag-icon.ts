import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pr-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#eee"
          d="m27 63.3 485 39.1v102.4L477.3 259l34.7 48.2v102.4L27.4 446.9z"
        />
        <path
          fill="#d80027"
          d="m0 0 51.2 102.4H512V0zm0 512h512V409.6H51.2zm180-204.8h332V204.8H180z"
        />
        <path fill="#0052b4" d="M0 0v512l256-256z" />
        <path
          fill="#eee"
          d="m103.6 189.2 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51-43.4-31.6H87z"
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
export class SvgPrFlagIcon {
  readonly class = input<string>('');
}
