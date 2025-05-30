import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-backpack-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.98 4.15c.01 0 .01-.01.02-.01V3.5C7 2.67 7.67 2 8.5 2s1.5.67 1.5 1.5V4h4v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.64c1.72.45 3 2 3 3.86v9.17l-2.03-2.03c.01-.05.03-.09.03-.14v-2c0-.55-.45-1-1-1h-2.17L6.98 4.15zM20.49 21.9a.996.996 0 0 1-1.41 0l-.14-.14c-.29.15-.6.24-.94.24H6c-1.1 0-2-.9-2-2V8c0-.36.06-.69.15-1.02L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM11.17 14l-2-2H7c-.55 0-1 .45-1 1s.45 1 1 1h4.17z"
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
export class SiNoBackpackIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
