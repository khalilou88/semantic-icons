import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-clean-hands-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m14.99 7 1.37-.63.63-1.37.63 1.37 1.37.63-1.37.63L16.99 9l-.63-1.37L14.99 7zM20 14c1.1 0 2-.9 2-2s-2-4-2-4-2 2.9-2 4 .9 2 2 2zM1 22h4V11H1v11zM9.24 9.5 15 11.65V11a5 5 0 0 0-4-4.9V4h2c.57 0 1.1.17 1.55.45l1.43-1.43A4.899 4.899 0 0 0 13 2H7.5v2H9v2.11c-1.78.37-3.2 1.68-3.75 3.39h3.99zM22 17h-9l-2.09-.73.33-.94L13 16h4v-2l-8.03-3H7v9.02L14 22l8-3v-2z"
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
export class SiCleanHandsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
