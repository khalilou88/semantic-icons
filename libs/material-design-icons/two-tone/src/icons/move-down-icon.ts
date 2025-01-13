import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-move-down-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M15 6h5v3h-5z" opacity=".3" />
    <svg:path
      d="M3 11c0 2.45 1.76 4.47 4.08 4.91l-1.49-1.49L7 13l4 4.01L7 21l-1.41-1.41 1.58-1.58v-.06A7.007 7.007 0 0 1 1 11c0-3.87 3.13-7 7-7h3v2H8c-2.76 0-5 2.24-5 5zm19 0V4h-9v7h9zm-2-2h-5V6h5v3zm-7 4h9v7h-9z"
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
export class SiMoveDownIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
