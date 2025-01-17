import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-kp-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="kp-a">
        <svg:path fill-opacity=".7" d="M92.2 7.8h593.6v485.5H92.2z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#kp-a)"
      transform="matrix(.86254 0 0 1.0546 -79.5 -8.3)"
    >
      <svg:path
        fill="#fff"
        stroke="#000"
        stroke-width="1.1"
        d="M991.8 492.9H4.2V8.4h987.6z"
      />
      <svg:path fill="#3e5698" d="M991.8 405.2H4.2V493h987.6z" />
      <svg:path fill="#c60000" d="M991.8 384.9H4.2V116.4h987.6z" />
      <svg:path fill="#3e5698" d="M991.8 8.4H4.2V96h987.6z" />
      <svg:path
        fill="#fff"
        d="M473 250.7c0 60.1-61.5 108.9-137.4 108.9S198 310.8 198 250.6c0-60.1 61.6-108.9 137.6-108.9S473 190.5 473 250.7"
      />
      <svg:path
        fill="#c40000"
        d="m402.9 326.8-66.1-38.6-67.1 39 26.3-62.8-66.1-38.5 82.4-.3 26.2-63 24.5 62.8 82.4-.4-67.2 39z"
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
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
