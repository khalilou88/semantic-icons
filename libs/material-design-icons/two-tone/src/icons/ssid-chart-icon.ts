import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ssid-chart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3v2.47zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4v-2z"
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
export class SiSsidChartIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
