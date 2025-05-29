import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-6-ft-apart-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 2 9.43V10h8v-.57zM18 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85a6.95 6.95 0 0 0-5.56 0A2.01 2.01 0 0 0 14 9.43V10h8v-.57zM19 17v-2.01L5 15v2l-3-3 3-3v2.01L19 13v-2l3 3-3 3zm-9 2v-1H7.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5V20c0-.28-.22-.5-.5-.5H8V19h2zm-1 1.5v.5H8v-.5h1zm8.5-1.5h-1v3h-1v-3h-1v-1h3v1zm-5 0v.5h1v1h-1V22h-1v-4H14v1h-1.5z"
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
export class Si6FtApartIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
