import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#338af3" d="M0 0h512v512H0z" />
      <svg:path
        fill="#ffda44"
        d="M400.7 258.8H111.3c0 20 17.4 36.2 37.4 36.2h-1.2c0 20 16.2 36.1 36.2 36.1 0 20 16.1 36.2 36.1 36.2h72.4c20 0 36.1-16.2 36.1-36.2 20 0 36.2-16.2 36.2-36.1h-1.2c20 0 37.4-16.2 37.4-36.2z"
      />
      <svg:path fill="#338af3" d="M356.2 211.5a100.2 100.2 0 0 1-200.4 0" />
      <svg:path
        fill="#ffda44"
        d="m332.5 211.5-31.3 14.7 16.7 30.3-34-6.5-4.3 34.3L256 259l-23.6 25.3L228 250l-34 6.5 16.6-30.3-31.2-14.7 31.2-14.7-16.6-30.3 34 6.5 4.3-34.3 23.6 25.2 23.6-25.2L284 173l34-6.5-16.6 30.3z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKzFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
