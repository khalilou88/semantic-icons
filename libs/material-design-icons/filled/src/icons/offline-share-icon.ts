import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-offline-share-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.6 10.26v1.31L17 9.33 14.6 7.1v1.28c-2.33.32-3.26 1.92-3.6 3.52.83-1.13 1.93-1.64 3.6-1.64zM16 23H6c-1.1 0-2-.9-2-2V5h2v16h10v2zm2-22h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 15h-8V4h8v12z"
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
export class SiOfflineShareIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
