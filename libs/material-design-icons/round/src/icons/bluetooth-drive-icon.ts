import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bluetooth-drive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m19.85 6 1.8-1.8c.2-.2.2-.51 0-.71L19.5 1.36c-.32-.31-.85-.09-.85.35v3.08L16.7 2.85a.501.501 0 0 0-.7 0c-.19.19-.19.51 0 .7L18.44 6 16 8.44c-.19.19-.19.5 0 .7.19.2.51.2.7 0l1.95-1.95v3.09c0 .45.54.67.85.35l2.14-2.15c.2-.2.19-.51 0-.71L19.85 6zm-.2-3.09.94.94-.94.94V2.91zm0 6.17V7.2l.94.94-.94.94z"
    />
    <svg:path
      d="M15 10H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v7.5c0 .83.67 1.5 1.5 1.5S5 20.33 5 19.5V19h12v.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V12h-3c-1.1 0-2-.9-2-2zm-8.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
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
export class SiBluetoothDriveIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
