import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-save-as-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m20.41 6.41-2.83-2.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7.4l8.6-8.6V7.83c0-.53-.21-1.04-.59-1.42zM12 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-9c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h7c.55 0 1 .45 1 1v2zm4.99 7.25 1.77 1.77-4.84 4.84c-.1.09-.23.14-.36.14H15.5c-.28 0-.5-.22-.5-.5v-1.06c0-.13.05-.26.15-.35l4.84-4.84zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71z"
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
export class SiSaveAsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
