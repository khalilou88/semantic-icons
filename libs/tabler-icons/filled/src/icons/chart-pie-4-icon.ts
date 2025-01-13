import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chart-pie-4-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M11.844 13.57l4.843 7.264a10 10 0 0 1 -11.015 -1.09zm6.507 6.154l-4.481 -6.724h8.081a10 10 0 0 1 -3.348 6.511zm-7.35 -17.674v9.534l-6.744 6.744a10 10 0 0 1 -2.257 -6.328l.005 -.324a10 10 0 0 1 8.995 -9.626m6 1.29a10 10 0 0 1 4.95 7.66h-8.95v-8.95a10 10 0 0 1 4 1.29"
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
export class SiChartPie4Icon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
