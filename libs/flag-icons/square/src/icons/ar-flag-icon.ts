import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ar-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#74acdf" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M0 170.7h512v170.7H0z" />
    <svg:g id="ar-c" transform="translate(-153.6)scale(1.024)">
      <svg:path
        id="ar-a"
        fill="#f6b40e"
        stroke="#85340a"
        stroke-width="1.1"
        d="m396.8 251.3 28.5 62s.5 1.2 1.3.9c.8-.4.3-1.6.3-1.6l-23.7-64m-.7 24.2c-.4 9.4 5.4 14.6 4.7 23s3.8 13.2 5 16.5c1 3.3-1.2 5.2-.3 5.7 1 .5 3-2.1 2.4-6.8s-4.2-6-3.4-16.3-4.2-12.7-3-22"
      />
      <svg:use
        xlink:href="#ar-a"
        width="100%"
        height="100%"
        transform="rotate(22.5 400 250)"
      />
      <svg:use
        xlink:href="#ar-a"
        width="100%"
        height="100%"
        transform="rotate(45 400 250)"
      />
      <svg:use
        xlink:href="#ar-a"
        width="100%"
        height="100%"
        transform="rotate(67.5 400 250)"
      />
      <svg:path
        id="ar-b"
        fill="#85340a"
        d="M404.3 274.4c.5 9 5.6 13 4.6 21.3 2.2-6.5-3.1-11.6-2.8-21.2m-7.7-23.8 19.5 42.6-16.3-43.9"
      />
      <svg:use
        xlink:href="#ar-b"
        width="100%"
        height="100%"
        transform="rotate(22.5 400 250)"
      />
      <svg:use
        xlink:href="#ar-b"
        width="100%"
        height="100%"
        transform="rotate(45 400 250)"
      />
      <svg:use
        xlink:href="#ar-b"
        width="100%"
        height="100%"
        transform="rotate(67.5 400 250)"
      />
    </svg:g>
    <svg:use
      xlink:href="#ar-c"
      width="100%"
      height="100%"
      transform="rotate(90 256 256)"
    />
    <svg:use
      xlink:href="#ar-c"
      width="100%"
      height="100%"
      transform="rotate(180 256 256)"
    />
    <svg:use
      xlink:href="#ar-c"
      width="100%"
      height="100%"
      transform="rotate(-90 256 256)"
    />
    <svg:circle
      cx="256"
      cy="256"
      r="28.4"
      fill="#f6b40e"
      stroke="#85340a"
      stroke-width="1.5"
    />
    <svg:path
      id="ar-h"
      fill="#843511"
      stroke-width="1"
      d="M265.7 250q-3.1 0-4.9 2.5c2.2 2 7 2.2 10.3-.2a8 8 0 0 0-5.4-2.4zm0 .4c1.9 0 3.6.8 3.9 1.7-2.2 2.4-5.7 2.2-7.9.4q1.6-2.2 4-2.1"
    />
    <svg:use
      xlink:href="#ar-d"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 512.3 0)"
    />
    <svg:use
      xlink:href="#ar-e"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 512.3 0)"
    />
    <svg:use
      xlink:href="#ar-f"
      width="100%"
      height="100%"
      transform="translate(19.3)"
    />
    <svg:use
      xlink:href="#ar-g"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 512.3 0)"
    />
    <svg:path
      fill="#85340a"
      d="M251.6 260a2 2 0 1 0 2 3q1.4.8 2.4.6h.3c.5 0 1.6 0 2.3-.6q.6.8 1.6.8a2 2 0 0 0 .4-3.9q.8.3.9 1.3a1.3 1.3 0 0 1-2.7 0 3 3 0 0 1-2.7 1.8 3 3 0 0 1-2.7-1.8q-.1 1.2-1.3 1.3a1.3 1.3 0 0 1-.4-2.6zm2.2 5.8c-2.2 0-3 2-5 3.3q1.4-.8 3.5-2.2c1.5-.9 2.8.2 3.7.2s2.2-1.1 3.7-.2q2 1.4 3.5 2.2c-2-1.4-2.8-3.3-5-3.3a6 6 0 0 0-2.2.6q-1.6-.6-2.2-.6"
    />
    <svg:path
      fill="#85340a"
      d="M253 268.3q-1.2 0-3.6.8c4-1 4.8.4 6.6.4s2.6-1.3 6.6-.4c-4.4-1.4-5.3-.5-6.6-.5-.9 0-1.5-.3-3-.3"
    />
    <svg:path
      fill="#85340a"
      d="M249.6 269h-.8c4.6.5 2.4 3.1 7.2 3.1s2.6-2.6 7.2-3c-4.8-.5-3.3 2.4-7.2 2.4-3.7 0-2.6-2.5-6.4-2.5"
    />
    <svg:path fill="#85340a" d="M260 276.1a4 4 0 0 0-8 0 4 4 0 0 1 8 0" />
    <svg:path
      id="ar-e"
      fill="#85340a"
      stroke-width="1"
      d="M238.3 249.9c5-4.4 11.4-5 14.9-1.8a9 9 0 0 1 1.6 3.7q.7 3.8-2.3 8 .5 0 1 .4 2.6-5.1 1.7-10l-.7-2.5c-4.8-4-11.4-4.4-16.2 2.2"
    />
    <svg:path
      id="ar-d"
      fill="#85340a"
      stroke-width="1"
      d="M246.2 248.6c2.8 0 3.5.6 4.8 1.7s2 .9 2.2 1.1 0 .9-.4.7q-.7-.3-2.7-1.8c-1.3-1-2.6-1-4-1-3.8 0-6 3.2-6.5 3s2.2-3.7 6.6-3.7"
    />
    <svg:use
      xlink:href="#ar-h"
      width="100%"
      height="100%"
      transform="translate(-19.6)"
    />
    <svg:circle
      id="ar-f"
      cx="246.3"
      cy="252.1"
      r="2"
      fill="#85340a"
      stroke-width="1"
    />
    <svg:path
      id="ar-g"
      fill="#85340a"
      stroke-width="1"
      d="M241 253.4c3.7 2.8 7.4 2.6 9.6 1.3s2.2-1.8 1.7-1.8c-.4 0-.9.5-2.6 1.4s-4.4.8-8.8-1z"
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
export class SiArFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
