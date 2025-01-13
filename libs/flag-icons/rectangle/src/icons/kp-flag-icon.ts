import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kp-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="kp-a">
        <svg:path fill-opacity=".7" d="M5 .1h682.6V512H5.1z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#kp-a)"
      transform="translate(-4.8 -.1)scale(.93768)"
    >
      <svg:path fill="#fff" stroke="#000" d="M776 511.5H-76V.5h852z" />
      <svg:path fill="#3e5698" d="M776 419H-76v92.5h852z" />
      <svg:path fill="#c60000" d="M776 397.6H-76V114.4h852z" />
      <svg:path fill="#3e5698" d="M776 .6H-76V93h852z" />
      <svg:path
        fill="#fff"
        d="M328.5 256c0 63.5-53 115-118.6 115S91.3 319.5 91.3 256s53-114.8 118.6-114.8c65.5 0 118.6 51.4 118.6 114.9z"
      />
      <svg:path
        fill="#c40000"
        d="m175.8 270.6-57-40.7 71-.2 22.7-66.4 21.1 66.1 71-.4-57.9 41.2 21.3 66.1-57-40.7-58 41.3z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKpFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}
