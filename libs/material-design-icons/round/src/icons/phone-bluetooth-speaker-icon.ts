import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-phone-bluetooth-speaker-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m19.23 15.26-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98zm-2.44-9.25-2.45 2.45c-.2.2-.2.52 0 .71.2.2.52.2.71 0L17 7.23v3.15a.512.512 0 0 0 .5.51c.13 0 .26-.05.36-.15l2.18-2.18c.2-.2.2-.52 0-.71l-1.83-1.83 1.83-1.83c.09-.09.15-.22.15-.36s-.05-.26-.15-.36l-2.18-2.18a.507.507 0 0 0-.55-.11c-.19.08-.31.26-.31.46v3.15l-1.95-1.95c-.2-.2-.52-.2-.71 0-.2.2-.2.52 0 .71l2.45 2.46zm1.22-3.15.96.96-.96.96V2.86zm0 4.37.96.96-.96.96V7.23z"
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
export class SiPhoneBluetoothSpeakerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
