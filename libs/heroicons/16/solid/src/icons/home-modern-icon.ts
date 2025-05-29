import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-home-modern-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.536 3.444a.75.75 0 0 0-.571-1.387L3.5 4.719V3.75a.75.75 0 0 0-1.5 0v1.586l-.535.22A.75.75 0 0 0 2 6.958V12.5h-.25a.75.75 0 0 0 0 1.5H4a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3.664l.536-.22ZM11.829 5.802a.75.75 0 0 0-.333.623V8.5c0 .027.001.053.004.08V13a1 1 0 0 0 1 1h.5a1 1 0 0 0 1-1V7.957a.75.75 0 0 0 .535-1.4l-2.004-.826a.75.75 0 0 0-.703.07Z"
    />
  `,
  host: {
    'aria-hidden': 'true',
    'data-slot': 'icon',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHomeModernIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 16 16');

  readonly fill = input<string>('currentColor');
}
