import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-timer-10-select-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 8v8h-3V8h3m0-3h-3C8.34 5 7 6.34 7 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM2.5 8H3v9.5c0 .83.67 1.5 1.5 1.5S6 18.33 6 17.5V7c0-1.1-.9-2-2-2H2.5C1.67 5 1 5.67 1 6.5S1.67 8 2.5 8zm16 3c-.83 0-1.5.68-1.5 1.5v2c0 .82.67 1.5 1.5 1.5H21v1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5H19v-1h3c.55 0 1-.45 1-1s-.45-1-1-1h-3.5z"
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
export class SiTimer10SelectIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
