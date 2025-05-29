import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-va-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#ffda44" d="M0 0h256l51.7 254.7L256 512H0z" />
      <svg:path fill="#eee" d="M256 0h256v512H256z" />
      <svg:path
        fill="#acabb1"
        d="m354 222.8 48.1 63.6A33.4 33.4 0 1 0 420 273l-75-99.2-17.7 13.4-26.7 20.2 26.9 35.5 26.6-20.1zm69.3 73.1a11.1 11.1 0 1 1 13.4 17.8 11.1 11.1 0 0 1-13.4-17.8z"
      />
      <svg:path
        fill="#ffda44"
        d="m436.6 242.9 26.8-35.5-26.6-20.2-17.8-13.4-75 99.2a33.4 33.4 0 1 0 17.8 13.4l48-63.6 26.8 20zm-93.8 68.6a11.1 11.1 0 1 1-17.8-13.4 11.1 11.1 0 0 1 17.8 13.4z"
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
export class SiVaFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
