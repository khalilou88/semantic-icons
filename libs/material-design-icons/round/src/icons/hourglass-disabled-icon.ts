import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hourglass-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l8.19 8.19-3 3.01c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c.86 0 1.58-.54 1.87-1.3l1.91 1.91a.996.996 0 1 0 1.41-1.41L2.81 2.81zM16 19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l2.84-2.84L16 18.83V19zM8 5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5l-2.84 2.84 1.25 1.25 3-2.99c.38-.38.59-.89.59-1.42V4a2 2 0 0 0-2-2H8c-.86 0-1.58.54-1.87 1.3L8 5.17V5z"
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
export class SiHourglassDisabledIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
