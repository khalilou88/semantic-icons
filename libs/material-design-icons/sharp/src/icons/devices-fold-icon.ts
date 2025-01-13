import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-devices-fold-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 3V-.03l-7 3V21h12V3h-5zm3 16h-5.33L17 18V5h3v14zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDevicesFoldIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
