import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-google-wallet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.0069 6.22581C10.6843 8.96774 11.8779 11.2581 12.7811 13.4839C12.4263 15 11.9101 16.4516 11.3617 17.8387C10.7811 15.4839 10.1682 13.2903 8.84561 11.1935C9.13593 9.64516 8.94238 7.96774 9.0069 6.22581ZM6.84561 9.51613H2.71657C2.45851 9.51613 2.26496 9.87097 2.45851 10.0645C4.32948 12.5161 5.65206 15.2903 6.55528 18.4194H11.2004C10.4585 15.2903 9.45851 12.4516 7.52303 9.77419C7.32948 9.64516 7.10367 9.51613 6.84561 9.51613ZM9.0069 5.54839C12.0392 10.4194 14.8133 16.0645 15.2004 22H20.2327C19.6843 15.871 17.1682 10.129 13.8456 5.54839H9.0069ZM20.2327 2.51613C20.1359 2.19355 19.8779 2 19.5553 2H15.6198C15.394 2 15.2004 2.22581 15.265 2.45161C15.8456 4.48387 16.265 6.70968 16.4585 9C18.5875 12.8065 20.0069 16.9677 20.4908 21.0323C21.2327 18.3548 21.6198 15.0645 21.6198 12C21.6198 8.74194 21.1037 5.54839 20.2327 2.51613Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGoogleWalletIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
