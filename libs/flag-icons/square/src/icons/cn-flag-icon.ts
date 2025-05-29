import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:path id="cn-a" fill="#ff0" d="M1-.3-.7.8 0-1 .6.8-1-.3z" />
    </svg:defs>
    <svg:path fill="#ee1c25" d="M0 0h512v512H0z" />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="translate(128 128)scale(76.8)"
    />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="rotate(-121 142.6 -47)scale(25.5827)"
    />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="rotate(-98.1 198 -82)scale(25.6)"
    />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="rotate(-74 272.4 -114)scale(25.6137)"
    />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="matrix(16 -19.968 19.968 16 256 230.4)"
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
export class SiCnFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
