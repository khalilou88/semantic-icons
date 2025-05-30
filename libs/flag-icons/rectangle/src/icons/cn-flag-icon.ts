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
      <svg:path id="cn-a" fill="#ff0" d="M-.6.8 0-1 .6.8-1-.3h2z" />
    </svg:defs>
    <svg:path fill="#ee1c25" d="M0 0h640v480H0z" />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="matrix(71.9991 0 0 72 120 120)"
    />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
    />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
    />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"
    />
    <svg:use
      xlink:href="#cn-a"
      width="30"
      height="20"
      transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
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

  readonly viewBox = input<string>('0 0 640 480');
}
