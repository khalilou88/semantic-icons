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
      d="M12 17c-1.65 0-3 1.35-3 3v1h6v-1c0-1.65-1.35-3-3-3zm4-14-4.08.41C9.69 3.64 8 5.5 8 7.75s1.69 4.11 3.92 4.34l4.11.42L16 3z"
      opacity=".3"
    />
    <svg:path
      d="M16 1c-.15 0 .11-.02-4.28.42C8.47 1.75 6 4.48 6 7.75s2.47 6 5.72 6.33l1.9.19-.56.85c-.35-.08-.7-.12-1.06-.12-2.76 0-5 2.24-5 5v2c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2c0-1.67-.83-3.15-2.09-4.06l.97-1.45c.04 0 .09.01.13.01 1.09 0 2-.89 2-2V3C18 1.89 17.09 1 16 1zm-1 19v1H9v-1c0-1.65 1.35-3 3-3s3 1.35 3 3zm-3.08-7.91C9.69 11.86 8 10 8 7.75s1.69-4.11 3.92-4.34L16 3l.03 9.5-4.11-.41z"
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
