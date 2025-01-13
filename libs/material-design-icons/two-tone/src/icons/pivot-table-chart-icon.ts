import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pivot-table-chart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 5c0-1.1-.9-2-2-2h-9v5h11V5zM3 19c0 1.1.9 2 2 2h3V10H3v9zM3 5v3h5V3H5c-1.1 0-2 .9-2 2zm15 4-4 4h3v2c0 1.1-.9 2-2 2h-2v-3l-4 4 4 4v-3h2c2.21 0 4-1.79 4-4v-2h3l-4-4z"
    />
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
export class SiPivotTableChartIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
