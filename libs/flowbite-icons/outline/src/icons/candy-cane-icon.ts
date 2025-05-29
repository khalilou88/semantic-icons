import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-candy-cane-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M10 8.00003c0-.82843.5-2 2-2m-2 2V10.5c0 .8285-.67157 1.5-1.5 1.5S7 11.3285 7 10.5V7.50003m3 .5-3-.5m5-1.5c1.5 0 2 1.17157 2 2m-2-2v-3m-5 4.5c0-2.48528 2.51472-4.5 5-4.5m0 0c2.4853 0 5 2.01472 5 4.5V19.5c0 .8285-.6716 1.5-1.5 1.5s-1.5-.6715-1.5-1.5V8.00003m0 0h3M14 12h3m-3 4h3"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCandyCaneIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
