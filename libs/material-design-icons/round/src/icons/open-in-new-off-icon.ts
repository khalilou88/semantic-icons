import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-open-in-new-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m16.79 5.8-1.94-1.94a.506.506 0 0 1 .36-.86h5.29c.28 0 .5.22.5.5v5.29c0 .45-.54.67-.85.35L18.21 7.2l-4.09 4.09-1.41-1.41 4.08-4.08zM19 13v3.17l2 2V13c0-.55-.45-1-1-1s-1 .45-1 1zm.07 8.9-.9-.9H5a2 2 0 0 1-2-2V5.83l-.9-.9a.996.996 0 1 1 1.41-1.41l16.97 16.97a.996.996 0 1 1-1.41 1.41zm-2.9-2.9-4.88-4.88-.88.88A.996.996 0 1 1 9 13.59l.88-.88L5 7.83V19h11.17zM7.83 5H11c.55 0 1-.45 1-1s-.45-1-1-1H5.83l2 2z"
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
export class SiOpenInNewOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
