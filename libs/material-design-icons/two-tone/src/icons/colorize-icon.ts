import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-colorize-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m15.896 9.023-.92-.92L17.67 5.41l.92.92z" opacity=".3" />
    <svg:path
      d="m20.71 5.63-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19 5 17.08l8.06-8.06 1.92 1.92L6.92 19zm8.98-9.97-.93-.93 2.69-2.69.92.92-2.68 2.7z"
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
export class SiColorizeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
