import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-signal-cellular-nodata-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 13h-7c-1.1 0-2 .9-2 2v7H4.41c-.89 0-1.34-1.08-.71-1.71L20.29 3.71c.63-.63 1.71-.19 1.71.7V13zm-1.7 1.71a.996.996 0 0 0-1.41 0L17.5 16.1l-1.39-1.39a.996.996 0 1 0-1.41 1.41l1.39 1.39-1.39 1.39a.996.996 0 1 0 1.41 1.41l1.39-1.38 1.39 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.39 1.38-1.39a.996.996 0 0 0 0-1.41z"
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
export class SiSignalCellularNodataIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
