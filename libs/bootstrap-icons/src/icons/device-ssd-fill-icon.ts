import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-device-ssd-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M5 8V4h6v4z" />
    <svg:path
      d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M3.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m9.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4.75 3h6.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-6.5A.75.75 0 0 1 4 8.25v-4.5A.75.75 0 0 1 4.75 3M5 12h6a1 1 0 0 1 1 1v2h-1v-2h-.75v2h-1v-2H8.5v2h-1v-2h-.75v2h-1v-2H5v2H4v-2a1 1 0 0 1 1-1"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDeviceSsdFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('16');

  readonly height = input<string | number>('16');

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
