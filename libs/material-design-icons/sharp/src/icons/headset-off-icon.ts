import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-headset-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 4c3.87 0 7 3.13 7 7v1h-4v.17l6 6V11a9 9 0 0 0-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.878 6.878 0 0 1 12 4zM2.1 2.1.69 3.51l3.33 3.33A8.98 8.98 0 0 0 3 11v9h6v-8H5v-1c0-.94.19-1.83.52-2.65L15 17.83V20h2.17l1 1H12v2h8.17l.31.31 1.41-1.41L2.1 2.1z"
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
export class SiHeadsetOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
