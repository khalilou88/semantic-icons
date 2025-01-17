import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-nz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:g id="nz-b">
        <svg:g id="nz-a">
          <svg:path d="M0-.3v.5l1-.5z" />
          <svg:path d="M.2.3 0-.1l1-.2z" />
        </svg:g>
        <svg:use xlink:href="#nz-a" transform="scale(-1 1)" />
        <svg:use xlink:href="#nz-a" transform="rotate(72 0 0)" />
        <svg:use xlink:href="#nz-a" transform="rotate(-72 0 0)" />
        <svg:use xlink:href="#nz-a" transform="scale(-1 1)rotate(72)" />
      </svg:g>
    </svg:defs>
    <svg:path fill="#00247d" fill-rule="evenodd" d="M0 0h640v480H0z" />
    <svg:g transform="translate(-111 36.1)scale(.66825)">
      <svg:use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#fff"
        transform="translate(900 120)scale(45.4)"
      />
      <svg:use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="matrix(30 0 0 30 900 120)"
      />
    </svg:g>
    <svg:g transform="rotate(82 525.2 114.6)scale(.66825)">
      <svg:use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#fff"
        transform="rotate(-82 519 -457.7)scale(40.4)"
      />
      <svg:use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="rotate(-82 519 -457.7)scale(25)"
      />
    </svg:g>
    <svg:g transform="rotate(82 525.2 114.6)scale(.66825)">
      <svg:use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#fff"
        transform="rotate(-82 668.6 -327.7)scale(45.4)"
      />
      <svg:use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="rotate(-82 668.6 -327.7)scale(30)"
      />
    </svg:g>
    <svg:g transform="translate(-111 36.1)scale(.66825)">
      <svg:use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#fff"
        transform="translate(900 480)scale(50.4)"
      />
      <svg:use
        xlink:href="#nz-b"
        width="100%"
        height="100%"
        fill="#cc142b"
        transform="matrix(35 0 0 35 900 480)"
      />
    </svg:g>
    <svg:path fill="#012169" d="M0 0h320v240H0z" />
    <svg:path
      fill="#fff"
      d="m37.5 0 122 90.5L281 0h39v31l-120 89.5 120 89V240h-40l-120-89.5L40.5 240H0v-30l119.5-89L0 32V0z"
    />
    <svg:path
      fill="#c8102e"
      d="M212 140.5 320 220v20l-135.5-99.5zm-92 10 3 17.5-96 72H0zM320 0v1.5l-124.5 94 1-22L295 0zM0 0l119.5 88h-30L0 21z"
    />
    <svg:path fill="#fff" d="M120.5 0v240h80V0zM0 80v80h320V80z" />
    <svg:path fill="#c8102e" d="M0 96.5v48h320v-48zM136.5 0v240h48V0z" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNzFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
