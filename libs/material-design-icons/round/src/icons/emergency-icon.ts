import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-emergency-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m20.29 8.37-1-1.73a1.01 1.01 0 0 0-1.37-.37L14 8.54V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4.54L6.07 6.27a.993.993 0 0 0-1.36.36l-1 1.73c-.28.48-.12 1.1.36 1.37L8 12l-3.93 2.27c-.48.28-.64.89-.37 1.37l1 1.73c.28.48.89.64 1.37.37L10 15.46V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4.54l3.93 2.27c.48.28 1.09.11 1.37-.37l1-1.73c.28-.48.11-1.09-.37-1.37L16 12l3.93-2.27c.48-.27.64-.89.36-1.36z"
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
export class SiEmergencyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
