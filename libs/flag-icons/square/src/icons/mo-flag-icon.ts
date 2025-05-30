import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mo-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#00785e" d="M0 0h512v512H0z" />
    <svg:path
      fill="#fbd116"
      d="M272.5 147.4 256 96.5l-16.5 51 43.3-31.5h-53.6z"
    />
    <svg:g id="mo-a">
      <svg:path
        fill="#fff"
        d="M256 353.7H146.7l-4-4.2H256a2 2 0 0 1 1.5 2q0 1.6-1.5 2.2m0-33.4c.6-1.3 1.9-4.3 1.3-8a13 13 0 0 0-1.3-4.1 87 87 0 0 1-34.7 20.2 86 86 0 0 1-25 3.7h-67.4l6.3 8.6h65a86 86 0 0 0 55.8-20.4M139.1 294a34 34 0 0 1-10.3 2.2 86 86 0 0 0 64.8 29.3 86 86 0 0 0 62.4-26.6 470 470 0 0 0 4.8-62.9 470 470 0 0 0-4.8-72.2c-7 6.3-20.2 20-26.4 40.9a87 87 0 0 0-3.6 24.6 86 86 0 0 0 14.6 48.1 86 86 0 0 1-18-52.9 86 86 0 0 1 8.2-37 35 35 0 0 1-8-13.8 86 86 0 0 0-11.2 42.6 86 86 0 0 0 17 51.4 101 101 0 0 0-78.3-31.5 35 35 0 0 1 7.2 9.5 101 101 0 0 1 73.3 31.4 101 101 0 0 0-65.2-23.6q-20.9 0-39 7.8a87 87 0 0 0 88 55.6 87 87 0 0 1-15.4 1.4 86 86 0 0 1-60.1-24.3M256 388.7h-56.6a153 153 0 0 0 56.6 10.8 12 12 0 0 0 1.3-5.3 12 12 0 0 0-1.3-5.5m0-26.2h-99.9l8.4 6.7H256a5 5 0 0 0 1.4-3.3c0-2-1.2-3.1-1.4-3.4m0 13.4h-81.8a153 153 0 0 0 15.4 8.5H256a8 8 0 0 0 1.2-4.5 8 8 0 0 0-1.2-4"
      />
      <svg:path
        fill="#fbd116"
        d="m155.6 211.7-7-36.4-15.7 33.6 32.4-18-36.8-4.5zm49.3-58.8-29.6-22.3 10.8 35.4 12.1-35-30.3 21.3z"
      />
    </svg:g>
    <svg:use
      xlink:href="#mo-a"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 512 0)"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
