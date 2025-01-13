import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-play-card-10-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm.01 16h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 0 0 0 -2m-8.01 -10a1 1 0 0 0 -1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0 -1 -1m4.5 0c-1.453 0 -2.5 1.395 -2.5 3v2c0 1.605 1.047 3 2.5 3s2.5 -1.395 2.5 -3v-2c0 -1.605 -1.047 -3 -2.5 -3m0 2c.203 0 .5 .395 .5 1v2c0 .605 -.297 1 -.5 1s-.5 -.395 -.5 -1v-2c0 -.605 .297 -1 .5 -1m-6.49 -6h-.01a1 1 0 0 0 -.117 1.993l.127 .007a1 1 0 1 0 0 -2"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPlayCard10Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
