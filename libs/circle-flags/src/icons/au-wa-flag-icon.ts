import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-au-wa-flag-icon]',
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
      <svg:circle cx="382" cy="256" r="74" fill="#ffda44" />
      <svg:path
        fill="#333"
        d="M397 299.8c-51.4 7.8-53.2-24-53.2-24-2-22.9 21.4-29.6 28.4-42.3 7-12.6-9.3-14.5-8.3-6.4 1 8.2-3.8 9.6-4 10.2-.3.7-7.3 7.6-8.3 6.3-1-1.3 2.9-6.3 2.9-6.3s-3-1.7-4.2-5.6c-3.2-8.8 13-30.7 29.9-15.9 16.8 14.8-5.6 32-11.4 40.4-5.8 8.3-5.6 14.6-2 15.7 3.7 1.2 6.5-2.5 8-8.1 1.5-5.3 10.8-22.7 30.5-16.9 14.7 4.4 12.9 10.5 24.7 7.3 4.1 39.6-33 45.6-33 45.6z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAuWaFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
