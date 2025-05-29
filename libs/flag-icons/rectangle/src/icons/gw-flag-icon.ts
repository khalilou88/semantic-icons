import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-gw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#ce1126" d="M0 0h220v480H0z" />
    <svg:path fill="#fcd116" d="M220 0h420v240H220z" />
    <svg:path fill="#009e49" d="M220 240h420v240H220z" />
    <svg:g id="gw-b" transform="matrix(80 0 0 80 110 240)">
      <svg:path
        id="gw-a"
        fill="#000001"
        d="M0-1v1h.5"
        transform="rotate(18 0 -1)"
      />
      <svg:use
        xlink:href="#gw-a"
        width="100%"
        height="100%"
        transform="scale(-1 1)"
      />
    </svg:g>
    <svg:use
      xlink:href="#gw-b"
      width="100%"
      height="100%"
      transform="rotate(72 110 240)"
    />
    <svg:use
      xlink:href="#gw-b"
      width="100%"
      height="100%"
      transform="rotate(144 110 240)"
    />
    <svg:use
      xlink:href="#gw-b"
      width="100%"
      height="100%"
      transform="rotate(-144 110 240)"
    />
    <svg:use
      xlink:href="#gw-b"
      width="100%"
      height="100%"
      transform="rotate(-72 110 240)"
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
export class SiGwFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}
