import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-newspaper-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m21.15 3.85-.82.82-.95-.96c-.39-.39-1.02-.39-1.42 0l-.96.96-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96-.96-.96a.996.996 0 0 0-1.41 0l-.96.96-.96-.96c-.39-.39-1.02-.39-1.42 0L7 4.67l-.96-.96c-.39-.39-1.03-.39-1.42 0l-.95.96-.82-.82a.5.5 0 0 0-.85.36V19c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4.21a.5.5 0 0 0-.85-.36zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z"
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
export class SiNewspaperIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
