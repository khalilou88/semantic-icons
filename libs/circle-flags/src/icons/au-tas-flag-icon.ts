import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-au-tas-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#0052b4" d="M256 0h256v512H0V256Z" />
      <svg:path
        fill="#eee"
        d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
      />
      <svg:path
        fill="#d80027"
        d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
      />
      <svg:circle cx="382" cy="256" r="74" fill="#eee" />
      <svg:path
        fill="#d80027"
        d="M363 221a14 14 0 0 0-14 14v10h-5v-6c0-6-5-11-11-11a3 3 0 0 0-3 3v25c0 1 1 3 3 3h16a13 13 0 0 0 13 12v6h-5c-7 0-12 5-12 11l3 3h25c2 0 3-2 3-3v-17h34v5h-5c-6 0-11 5-11 11 0 2 1 3 3 3h24c2 0 3-1 3-3v-33c5 0 10-4 10-9 0-6-5-10-10-10h-32a3 3 0 0 1-3-3c0-2 1-3 3-3h32v-7h-32a10 10 0 0 0 0 19h32c2 0 3 2 3 4 0 1-1 3-3 3h-35c-7 0-13-6-13-13a14 14 0 0 0-13-14z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAuTasFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
