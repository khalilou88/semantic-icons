import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-important-devices-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M23 11.01 18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h7v2H8c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v3c0 .55.45 1 1 1s1-.45 1-1V4c0-1.1-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"
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
export class SiImportantDevicesIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
