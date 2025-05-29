import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#18c3df" d="M0 0h640v480H0z" />
    <svg:path fill="#fff" d="M0 160h640v160H0z" />
    <svg:g
      id="hn-c"
      fill="#18c3df"
      transform="translate(320 240)scale(26.66665)"
    >
      <svg:g id="hn-b">
        <svg:path id="hn-a" d="m-.3 0 .5.1L0-1z" />
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
      transform="translate(133.3 -42.7)"
    />
    <svg:use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(133.3 37.3)"
    />
    <svg:use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(-133.3 -42.7)"
    />
    <svg:use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(-133.3 37.3)"
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

  readonly viewBox = input<string>('0 0 640 480');
}
