import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cz-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-cz"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v240H0z" />
      <path fill="#d7141a" d="M0 240h640v240H0z" />
      <path fill="#11457e" d="M360 240 0 0v480z" />
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
export class SvgCzFlagIcon {
  readonly class = input<string>('');
}
