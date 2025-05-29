import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-hn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#18c3df" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M0 170.7h512v170.6H0z" />
    <svg:g
      id="hn-c"
      fill="#18c3df"
      transform="translate(256 256)scale(28.44446)"
    >
      <svg:g id="hn-b">
        <svg:path id="hn-a" d="m0-1-.3 1 .5.1z" />
        <svg:use
          xlink:href="#hn-a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </svg:g>
      <svg:use
        xlink:href="#hn-b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <svg:use
        xlink:href="#hn-b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
      <svg:use
        xlink:href="#hn-b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <svg:use
        xlink:href="#hn-b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
    </svg:g>
    <svg:use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(142.2 -45.5)"
    />
    <svg:use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(142.2 39.8)"
    />
    <svg:use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(-142.2 -45.5)"
    />
    <svg:use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(-142.2 39.8)"
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
export class SiHnFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
