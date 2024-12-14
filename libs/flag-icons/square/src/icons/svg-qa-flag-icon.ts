import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-qa-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-qa"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#8d1b3d" d="M0 0h512v512H0z" />
      <path
        fill="#fff"
        d="M0 0v512h113l104.2-28.4L113 455l104.2-28.4L113 398.2l104.2-28.4L113 341.3 217.2 313 113 284.4 217.2 256 113 227.6 217.2 199 113 170.7l104.2-28.5L113 113.8l104.2-28.5L113 57l104.2-28.4L113 0z"
      />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgQaFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}
