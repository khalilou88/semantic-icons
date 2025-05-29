import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-connected-tv-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H4V5h16v12zM7 15.97A2.007 2.007 0 0 0 5.03 14H5v2h2v-.03zm-1.38-3.42c1.44.26 2.58 1.4 2.83 2.84.06.36.37.61.73.61.46 0 .82-.41.75-.86a4.998 4.998 0 0 0-4.06-4.06.746.746 0 0 0-.87.74c0 .37.26.67.62.73zm.02-3.02c3.07.3 5.52 2.75 5.83 5.82.04.37.37.65.74.65.45 0 .79-.4.75-.85a8.001 8.001 0 0 0-7.11-7.1.756.756 0 0 0-.85.74c0 .37.27.71.64.74z"
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
export class SiConnectedTvIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
