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
      d="M10 8h11V5c0-1.1-.9-2-2-2h-9v5zM3 8h5V3H5c-1.1 0-2 .9-2 2v3zm2 13h3V10H3v9c0 1.1.9 2 2 2zm8 1-4-4 4-4zm1-9 4-4 4 4zm.58 6H13v-2h1.58c1.33 0 2.42-1.08 2.42-2.42V13h2v1.58c0 2.44-1.98 4.42-4.42 4.42z"
    />
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
export class SiPivotTableChartIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
