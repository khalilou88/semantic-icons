import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloud-data-connection-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M15.262 4.087c.974 .768 1.566 1.848 1.678 2.997l.007 .107l.18 .025a3.42 3.42 0 0 1 2.867 3.184l.006 .188a3.42 3.42 0 0 1 -3.425 3.412h-3.575l.001 1.171a3 3 0 0 1 1.829 1.829h6.17a1 1 0 0 1 0 2h-6.17a3.001 3.001 0 0 1 -5.66 0h-6.17a1 1 0 0 1 0 -2h6.171a3 3 0 0 1 1.829 -1.83v-1.17h-2.74c-2.341 0 -4.26 -1.826 -4.26 -4.103c0 -2.001 1.481 -3.655 3.43 -4.026l.086 -.015l.049 -.112c.514 -1.124 1.508 -2.01 2.756 -2.447l.222 -.072c1.627 -.49 3.42 -.166 4.72 .862"
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
export class SiCloudDataConnectionIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
