import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nest-cam-wired-stand-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m15.83 1.01-4.11.42C8.47 1.75 6 4.48 6 7.75s2.47 6 5.72 6.33l1.9.19-.56.85c-.35-.08-.7-.12-1.06-.12-2.76 0-5 2.24-5 5v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-1.67-.83-3.15-2.09-4.06l.97-1.45c1.14.07 2.12-.83 2.12-1.99V3c0-1.17-1-2.09-2.17-1.99z"
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
export class SiNestCamWiredStandIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
