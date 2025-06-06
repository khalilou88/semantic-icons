import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ai-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:path
        id="ai-b"
        fill="#f90"
        d="M271 87c1.5 3.6 6.5 7.6 7.8 9.6-1.7 2-2 1.8-1.8 5.4 3-3.1 3-3.5 5-3 4.2 4.2.8 13.3-2.8 15.3-3.4 2.1-2.8 0-8 2.6 2.3 2 5.1-.3 7.4.3 1.2 1.5-.6 4.1.4 6.7 2-.2 1.8-4.3 2.2-5.8 1.5-5.4 10.4-9.1 10.8-14.1 1.9-.9 3.7-.3 6 1-1.1-4.6-4.9-4.6-5.9-6-2.4-3.7-4.5-7.8-9.6-9-3.8-.7-3.5.3-6-1.4-1.6-1.2-6.3-3.4-5.5-1.6"
      />
    </svg:defs>
    <svg:clipPath id="ai-a">
      <svg:path d="M0 0v128h298.7v128H256zm256 0H128v298.7H0V256z" />
    </svg:clipPath>
    <svg:path fill="#012169" d="M0 0h512v512H0z" />
    <svg:path stroke="#fff" stroke-width="50" d="m0 0 256 256m0-256L0 256" />
    <svg:path
      stroke="#c8102e"
      stroke-width="30"
      d="m0 0 256 256m0-256L0 256"
      clip-path="url(#ai-a)"
    />
    <svg:path stroke="#fff" stroke-width="75" d="M128 0v298.7M0 128h298.7" />
    <svg:path stroke="#c8102e" stroke-width="50" d="M128 0v298.7M0 128h298.7" />
    <svg:path fill="#012169" d="M0 256h256V0h85.3v341.3H0z" />
    <svg:path
      fill="#fff"
      d="M323.6 224.1c0 90.4 9.8 121.5 29.4 142.5a179 179 0 0 0 35 30 180 180 0 0 0 35-30c19.5-21 29.3-52.1 29.3-142.5-14.2 6.5-22.3 9.7-34 9.5a78 78 0 0 1-30.3-9.5 78 78 0 0 1-30.3 9.5c-11.7.2-19.8-3-34-9.5z"
    />
    <svg:g transform="matrix(1.96 0 0 2.002 -141.1 95.2)">
      <svg:use xlink:href="#ai-b" />
      <svg:circle cx="281.3" cy="91.1" r=".8" fill="#fff" fill-rule="evenodd" />
    </svg:g>
    <svg:g transform="matrix(-.916 -1.77 1.733 -.935 463.1 861.4)">
      <svg:use xlink:href="#ai-b" />
      <svg:circle cx="281.3" cy="91.1" r=".8" fill="#fff" fill-rule="evenodd" />
    </svg:g>
    <svg:g transform="matrix(-1.01 1.716 -1.68 -1.031 825 -71)">
      <svg:use xlink:href="#ai-b" />
      <svg:circle cx="281.3" cy="91.1" r=".8" fill="#fff" fill-rule="evenodd" />
    </svg:g>
    <svg:path
      fill="#9cf"
      d="M339.8 347.4a78 78 0 0 0 13.2 19.2 179 179 0 0 0 35 30 180 180 0 0 0 35-30 78 78 0 0 0 13.2-19.2z"
    />
    <svg:path
      fill="#fdc301"
      d="M321 220.5c0 94.2 10.1 126.6 30.5 148.5a187 187 0 0 0 36.5 31 186 186 0 0 0 36.4-31.1C444.8 347 455 314.7 455 220.5c-14.8 6.8-23.3 10.1-35.5 10-11-.3-22.6-5.7-31.5-10-9 4.3-20.6 9.7-31.5 10-12.3.1-20.7-3.2-35.6-10zm4 5c13.9 6.5 21.9 9.6 33.4 9.4a76 76 0 0 0 29.6-9.4c8.4 4 19.3 9.2 29.6 9.4 11.5.2 19.4-3 33.4-9.4 0 89-9.6 119.6-28.8 140.2a176 176 0 0 1-34.2 29.4 176 176 0 0 1-34.3-29.4c-19.2-20.6-28.7-51.3-28.7-140.2"
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
export class SiAiFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
