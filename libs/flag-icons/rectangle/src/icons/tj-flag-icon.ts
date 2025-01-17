import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-tj-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#060" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M0 0h640v342.9H0z" />
    <svg:path fill="#c00" d="M0 0h640v137.1H0z" />
    <svg:path
      fill="#f8c300"
      d="M300.8 233.6a8.6 8.6 0 0 1 16 4V272h6.4v-34.3a8.6 8.6 0 0 1 16-4 20.2 20.2 0 1 0-38.4 0"
    />
    <svg:path
      fill="#fff"
      d="M305.4 224.7a14 14 0 0 1 14.6 6.5 14 14 0 0 1 14.6-6.5 14.7 14.7 0 0 0-29.2 0"
    />
    <svg:path
      id="tj-a"
      fill="#f8c300"
      d="M316.8 258.3a26 26 0 0 1-43.8 16.6 27 27 0 0 1-41 12c2.5 25 40 19.9 42.8-4.4 11.7 20.7 37.6 14.7 45.2-10.6z"
    />
    <svg:use
      xlink:href="#tj-a"
      width="100%"
      height="100%"
      fill="#f8c300"
      transform="matrix(-1 0 0 1 640 0)"
    />
    <svg:path
      id="tj-b"
      fill="#f8c300"
      d="M291.8 302.6c-5.3 11.3-15.7 13.2-24.8 4.1 0 0 3.6-2.6 7.6-3.3-.8-3.1.7-7.5 2.9-9.8a15 15 0 0 1 6.1 8.1c5.5-.7 8.2 1 8.2 1z"
    />
    <svg:use
      xlink:href="#tj-b"
      width="100%"
      height="100%"
      fill="#f8c300"
      transform="rotate(9.4 320 551.3)"
    />
    <svg:use
      xlink:href="#tj-b"
      width="100%"
      height="100%"
      fill="#f8c300"
      transform="rotate(18.7 320 551.3)"
    />
    <svg:path
      fill="none"
      stroke="#f8c300"
      stroke-width="11"
      d="M253.5 327.8a233 233 0 0 1 133 0"
    />
    <svg:g fill="#f8c300" transform="translate(320 164.6)scale(.68571)">
      <svg:path
        id="tj-c"
        d="m301930 415571-790463-574305h977066l-790463 574305L0-513674z"
        transform="scale(.00005)"
      />
    </svg:g>
    <svg:g
      id="tj-d"
      fill="#f8c300"
      transform="translate(320 260.6)scale(.68571)"
    >
      <svg:use
        xlink:href="#tj-c"
        width="100%"
        height="100%"
        transform="translate(-70 -121.2)"
      />
      <svg:use
        xlink:href="#tj-c"
        width="100%"
        height="100%"
        transform="translate(-121.2 -70)"
      />
      <svg:use
        xlink:href="#tj-c"
        width="100%"
        height="100%"
        transform="translate(-140)"
      />
    </svg:g>
    <svg:use
      xlink:href="#tj-d"
      width="100%"
      height="100%"
      fill="#f8c300"
      transform="matrix(-1 0 0 1 640 0)"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTjFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
