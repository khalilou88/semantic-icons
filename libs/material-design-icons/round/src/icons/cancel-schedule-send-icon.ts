import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cancel-schedule-send-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.5 9c-.42 0-.83.04-1.24.11L2.4 3.6a.993.993 0 0 0-1.39.91L1 9.2c0 .47.33.88.78.98L10 12l-8.22 1.83c-.45.1-.78.5-.78.97l.01 4.68c0 .72.73 1.2 1.39.92l6.68-2.86C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9zm0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5 5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"
    />
    <svg:path
      d="M18.62 14.38c-.2-.2-.51-.2-.71 0l-1.41 1.41-1.41-1.41c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.41 1.41-1.41 1.41c-.2.2-.2.51 0 .71.2.2.51.2.71 0l1.41-1.41 1.41 1.41c.2.2.51.2.71 0 .2-.2.2-.51 0-.71l-1.41-1.41 1.41-1.41c.2-.2.2-.52 0-.71z"
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
export class SiCancelScheduleSendIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
