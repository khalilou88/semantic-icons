import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-my-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-my"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#C00" d="M0 0h512v36.6H0z" />
      <path fill="#fff" d="M0 36.6h512V73H0z" />
      <path fill="#C00" d="M0 73.1h512v36.6H0z" />
      <path fill="#fff" d="M0 109.7h512v36.6H0z" />
      <path fill="#C00" d="M0 146.3h512v36.6H0z" />
      <path fill="#fff" d="M0 182.9h512v36.5H0z" />
      <path fill="#C00" d="M0 219.4h512V256H0z" />
      <path fill="#fff" d="M0 256h512v36.6H0z" />
      <path fill="#C00" d="M0 292.6h512V329H0z" />
      <path fill="#fff" d="M0 329.1h512v36.6H0z" />
      <path fill="#C00" d="M0 365.7h512v36.6H0z" />
      <path fill="#fff" d="M0 402.3h512v36.6H0z" />
      <path fill="#C00" d="M0 438.9h512v36.5H0z" />
      <path fill="#fff" d="M0 475.4h512V512H0z" />
      <path fill="#006" d="M0 0h256v292.6H0z" />
      <path
        fill="#FC0"
        d="m166 93 4.8 32.5 18.4-27.2-10 31.3 28.5-16.6-22.5 24 32.8-2.6-30.7 11.9L218 158l-32.8-2.5 22.5 24-28.4-16.7 9.8 31.5-18.4-27.3-4.8 32.5-4.7-32.5-18.4 27.2 9.9-31.4-28.4 16.7 22.4-24-32.8 2.5 30.7-11.8-30.6-11.9 32.8 2.6-22.5-24 28.4 16.6-10-31.4 18.5 27.3 4.8-32.6Zm-26.7 1.3a56.9 56.9 0 0 0-73 24.9 56.9 56.9 0 0 0 45.5 83.8 56.9 56.9 0 0 0 27.5-4.7 64 64 0 1 1 0-104"
      />
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
export class SvgMyFlagIcon {
  readonly class = input<string>('');
}
