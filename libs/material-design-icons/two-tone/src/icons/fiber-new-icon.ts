import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-fiber-new-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.12 14.47V9.53H8.09v2.88L6.03 9.53H5v4.94h1.03v-2.88l2.1 2.88zm4.12-3.9V9.53h-3.3v4.94h3.3v-1.03h-2.06v-.91h2.06v-1.04h-2.06v-.92zm.82-1.04v4.12c0 .45.37.82.82.82h3.29c.45 0 .82-.37.82-.82V9.53h-1.03v3.71h-.92v-2.89h-1.03v2.9h-.93V9.53h-1.02z"
    />
    <svg:path d="M4 6h16v12H4z" opacity=".3" />
    <svg:path
      d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"
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
export class SiFiberNewIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
