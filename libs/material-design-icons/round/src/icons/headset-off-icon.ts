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
      d="M12 4c3.87 0 7 3.13 7 7v1h-2c-.6 0-1.13.27-1.49.68L21 18.17V11a9 9 0 0 0-9-9c-2.02 0-3.88.67-5.38 1.8l1.43 1.43A6.878 6.878 0 0 1 12 4zm9.19 17.19L2.81 2.81a.996.996 0 0 0-1.41 0C1 3.2 1 3.83 1.39 4.22l2.63 2.63A8.909 8.909 0 0 0 3 11v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1c0-.94.19-1.83.52-2.65L15 17.83V18c0 1.1.9 2 2 2h.17l1 1H13c-.55 0-1 .45-1 1s.45 1 1 1h6c.36 0 .68-.1.97-.26.38.23.89.2 1.22-.13.39-.39.39-1.03 0-1.42z"
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
