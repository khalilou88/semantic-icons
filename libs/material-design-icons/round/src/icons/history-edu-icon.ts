import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-history-edu-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9 5v.38c-.83-.33-1.72-.5-2.61-.5-1.42 0-2.84.43-4.05 1.29-.51.36-.57 1.09-.13 1.53l2.57 2.57h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H7c-.55 0-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V5c0-.55-.45-1-1-1H10c-.55 0-1 .45-1 1zm-1.11 5.41V8.26H5.61L4.57 7.22a5.07 5.07 0 0 1 1.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2a2.7 2.7 0 0 1-1.92.8c-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-1c0-.55-.45-1-1-1h-5v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z"
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
export class SiHistoryEduIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
