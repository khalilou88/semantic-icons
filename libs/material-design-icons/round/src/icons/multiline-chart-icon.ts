import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-multiline-chart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m21.36 6.28-.06-.06a.955.955 0 0 0-1.39.04l-2.18 2.45C15.68 6.4 12.83 5 9.61 5c-2.5 0-4.83.87-6.75 2.3a.965.965 0 0 0-.11 1.45l.06.06c.33.33.86.39 1.23.11C5.63 7.72 7.54 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-3.29-3.29a.996.996 0 0 0-1.41 0l-6.12 6.13a.96.96 0 0 0 0 1.35l.15.15c.37.37.98.37 1.35 0l5.32-5.33 3.25 3.25c.41.41 1.07.39 1.45-.04l3.35-3.76c.62 1.12 1.08 2.39 1.32 3.73.08.47.47.82.95.82h.09c.6 0 1.05-.55.94-1.14a13.93 13.93 0 0 0-1.89-5L21.4 7.6c.34-.38.32-.96-.04-1.32z"
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
export class SiMultilineChartIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
