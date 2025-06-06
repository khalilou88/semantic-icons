import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:g id="gd-c">
        <svg:g id="gd-b">
          <svg:path
            id="gd-a"
            fill="#fcd116"
            d="M0-1v1h.5"
            transform="rotate(18 0 -1)"
          />
          <svg:use
            xlink:href="#gd-a"
            width="100%"
            height="100%"
            transform="scale(-1 1)"
          />
        </svg:g>
        <svg:use
          xlink:href="#gd-b"
          width="100%"
          height="100%"
          transform="rotate(72)"
        />
        <svg:use
          xlink:href="#gd-b"
          width="100%"
          height="100%"
          transform="rotate(144)"
        />
        <svg:use
          xlink:href="#gd-b"
          width="100%"
          height="100%"
          transform="rotate(-144)"
        />
        <svg:use
          xlink:href="#gd-b"
          width="100%"
          height="100%"
          transform="rotate(-72)"
        />
      </svg:g>
    </svg:defs>
    <svg:path fill="#ce1126" d="M0 0h512v512H0z" />
    <svg:path fill="#007a5e" d="M71.7 71.7h368.6v368.6H71.7z" />
    <svg:path fill="#fcd116" d="M71.7 71.7h368.6L71.7 440.4h368.6z" />
    <svg:circle cx="255.9" cy="256.1" r="61.4" fill="#ce1126" />
    <svg:use
      xlink:href="#gd-c"
      width="100%"
      height="100%"
      transform="translate(256 256)scale(56.32)"
    />
    <svg:use
      xlink:href="#gd-d"
      width="100%"
      height="100%"
      x="-100"
      transform="translate(-16.4 -.1)"
    />
    <svg:use
      id="gd-d"
      xlink:href="#gd-c"
      width="100%"
      height="100%"
      transform="translate(256 35.9)scale(33.28)"
    />
    <svg:use
      xlink:href="#gd-d"
      width="100%"
      height="100%"
      x="100"
      transform="translate(16.4)"
    />
    <svg:path
      fill="#ce1126"
      d="M99.8 256.8c7.7 14.3 22.6 29.8 35.7 35.3.2-14.5-5-33.2-12-48z"
    />
    <svg:path
      fill="#fcd116"
      d="M86.8 207.6c11.1 23.3-29 78.7 37.8 91.7a68 68 0 0 1-11.5-44.7 76 76 0 0 1 34.6 32.8c17.5-63.4-44.8-59.5-61-79.8z"
    />
    <svg:use
      xlink:href="#gd-d"
      width="100%"
      height="100%"
      x="-100"
      transform="translate(-16.4 442)"
    />
    <svg:use
      xlink:href="#gd-c"
      width="100%"
      height="100%"
      transform="translate(256 478)scale(33.28)"
    />
    <svg:use
      xlink:href="#gd-d"
      width="100%"
      height="100%"
      x="100"
      transform="translate(16.4 442.2)"
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
export class SiGdFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
