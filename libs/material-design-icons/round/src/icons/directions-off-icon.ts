import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-directions-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m21.71 11.29-9-9a.996.996 0 0 0-1.41 0L8.21 5.38 13 10.17V7.5l3.15 3.15c.2.2.2.51 0 .71l-.98.98 3.45 3.45 3.09-3.09c.38-.38.38-1.01 0-1.41zM6.79 6.79 3.51 3.51A.996.996 0 1 0 2.1 4.92L5.38 8.2l-3.09 3.09a.996.996 0 0 0 0 1.41l9 9c.39.39 1.02.39 1.41 0l3.09-3.09 3.28 3.28a.996.996 0 1 0 1.41-1.41L6.79 6.79zM9.99 14c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.05.02-.1.03-.15l1.97 1.97V14z"
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
export class SiDirectionsOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
