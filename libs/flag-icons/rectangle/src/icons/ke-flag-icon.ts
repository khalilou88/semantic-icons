import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ke-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:path
        id="ke-a"
        stroke-miterlimit="10"
        d="m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
      />
    </svg:defs>
    <svg:path fill="#fff" d="M0 0h640v480H0z" />
    <svg:path fill="#000001" d="M0 0h640v144H0z" />
    <svg:path fill="#060" d="M0 336h640v144H0z" />
    <svg:g id="ke-b" transform="matrix(3 0 0 3 320 240)">
      <svg:use xlink:href="#ke-a" width="100%" height="100%" stroke="#000" />
      <svg:use xlink:href="#ke-a" width="100%" height="100%" fill="#fff" />
    </svg:g>
    <svg:use
      xlink:href="#ke-b"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640 0)"
    />
    <svg:path
      fill="#b00"
      d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5z"
    />
    <svg:path
      id="ke-c"
      d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"
    />
    <svg:use
      xlink:href="#ke-c"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640 0)"
    />
    <svg:g fill="#fff" transform="matrix(3 0 0 3 320 240)">
      <svg:ellipse rx="4" ry="6" />
      <svg:path id="ke-d" d="M1 5.8s4 8 4 21-4 21-4 21z" />
      <svg:use
        xlink:href="#ke-d"
        width="100%"
        height="100%"
        transform="scale(-1)"
      />
      <svg:use
        xlink:href="#ke-d"
        width="100%"
        height="100%"
        transform="scale(-1 1)"
      />
      <svg:use
        xlink:href="#ke-d"
        width="100%"
        height="100%"
        transform="scale(1 -1)"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
