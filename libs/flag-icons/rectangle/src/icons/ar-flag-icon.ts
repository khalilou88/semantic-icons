import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ar-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#74acdf" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M0 160h640v160H0z" />
    <svg:g id="ar-c" transform="translate(-64)scale(.96)">
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
      transform="rotate(90 320 240)"
    />
    <svg:use
      xlink:href="#ar-c"
      width="100%"
      height="100%"
      transform="rotate(180 320 240)"
    />
    <svg:use
      xlink:href="#ar-c"
      width="100%"
      height="100%"
      transform="rotate(-90 320 240)"
    />
    <svg:circle
      cx="320"
      cy="240"
      r="26.7"
      fill="#f6b40e"
      stroke="#85340a"
      stroke-width="1.4"
    />
    <svg:path
      id="ar-h"
      fill="#843511"
      stroke-width="1"
      d="M329 234.3c-1.7 0-3.5.8-4.5 2.4 2 1.9 6.6 2 9.7-.2a7 7 0 0 0-5.1-2.2zm0 .4c1.8 0 3.5.8 3.7 1.6-2 2.3-5.3 2-7.4.4q1.6-2 3.8-2z"
    />
    <svg:use
      xlink:href="#ar-d"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640.2 0)"
    />
    <svg:use
      xlink:href="#ar-e"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640.2 0)"
    />
    <svg:use
      xlink:href="#ar-f"
      width="100%"
      height="100%"
      transform="translate(18.1)"
    />
    <svg:use
      xlink:href="#ar-g"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640.2 0)"
    />
    <svg:path
      fill="#85340a"
      d="M316 243.7a1.8 1.8 0 1 0 1.8 2.9 4 4 0 0 0 2.2.6h.2q1 0 2.3-.6.5.7 1.5.7a1.8 1.8 0 0 0 .3-3.6q.8.3.8 1.2a1.2 1.2 0 0 1-2.4 0 3 3 0 0 1-2.6 1.7 3 3 0 0 1-2.5-1.7q-.1 1.1-1.3 1.2-1-.1-1.2-1.2c-.2-1.1.3-1 .8-1.2zm2 5.4c-2.1 0-3 2-4.8 3.1 1-.4 1.8-1.2 3.3-2s2.6.2 3.5.2 2-1 3.5-.2q2 1.3 3.3 2c-1.9-1.2-2.7-3-4.8-3q-.7 0-2 .6z"
    />
    <svg:path
      fill="#85340a"
      d="M317.2 251.6q-1.1 0-3.4.6c3.7-.8 4.5.5 6.2.5 1.6 0 2.5-1.3 6.1-.5-4-1.2-4.9-.4-6.1-.4-.8 0-1.4-.3-2.8-.2"
    />
    <svg:path
      fill="#85340a"
      d="M314 252.2h-.8c4.3.5 2.3 3 6.8 3s2.5-2.5 6.8-3c-4.5-.4-3.1 2.3-6.8 2.3-3.5 0-2.4-2.3-6-2.3"
    />
    <svg:path
      fill="#85340a"
      d="M323.7 258.9a3.7 3.7 0 0 0-7.4 0 3.8 3.8 0 0 1 7.4 0"
    />
    <svg:path
      id="ar-e"
      fill="#85340a"
      stroke-width="1"
      d="M303.4 234.3c4.7-4.1 10.7-4.8 14-1.7a8 8 0 0 1 1.5 3.4q.6 3.6-2.1 7.5l.8.4q2.4-4.7 1.6-9.4l-.6-2.3c-4.5-3.7-10.7-4-15.2 2z"
    />
    <svg:path
      id="ar-d"
      fill="#85340a"
      stroke-width="1"
      d="M310.8 233c2.7 0 3.3.6 4.5 1.7 1.2 1 1.9.8 2 1 .3.2 0 .8-.3.6q-.7-.2-2.5-1.6c-1.8-1.4-2.5-1-3.7-1-3.7 0-5.7 3-6.1 2.8-.5-.2 2-3.5 6.1-3.5"
    />
    <svg:use
      xlink:href="#ar-h"
      width="100%"
      height="100%"
      transform="translate(-18.4)"
    />
    <svg:circle
      id="ar-f"
      cx="310.9"
      cy="236.3"
      r="1.8"
      fill="#85340a"
      stroke-width="1"
    />
    <svg:path
      id="ar-g"
      fill="#85340a"
      stroke-width="1"
      d="M305.9 237.5c3.5 2.7 7 2.5 9 1.3 2-1.3 2-1.7 1.6-1.7s-.8.4-2.4 1.3c-1.7.8-4.1.8-8.2-.9"
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
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
