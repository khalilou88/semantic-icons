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
      d="M3 9.03a1 1 0 0 1 .41-.81L7.14 5.5c.4-.29.95-.25 1.3.1l3.78 3.78 7.2-5.23c.65-.48 1.58-.01 1.58.81a1 1 0 0 1-.41.81l-7.9 5.73c-.4.29-.95.25-1.29-.1L7.62 7.62 4.59 9.84c-.66.48-1.59.01-1.59-.81zM21 16c0-.55-.45-1-1-1h-3.35c-.23 0-.45.08-.62.22l-3.9 3.12-5.53-5.35a.987.987 0 0 0-1.27-.1l-1.9 1.35c-.27.19-.43.5-.43.82 0 .81.92 1.29 1.58.81L5.8 15l5.57 5.39c.36.35.93.38 1.32.06L17 17h3c.55 0 1-.45 1-1z"
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
export class SiSsidChartIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
