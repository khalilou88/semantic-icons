import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tungsten-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 19c-.56 0-1 .45-1 1v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55-.45-1-1-1zm-6.01-1.91-.71.71a.996.996 0 1 0 1.41 1.41l.71-.71a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.41 0zM5 12c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1zm16-1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c.55 0 1-.45 1-1s-.45-1-1-1zm-2.99 6.09a.996.996 0 1 0-1.41 1.41l.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71zM15 8.02V5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3.02c-1.43 1.08-2.28 2.9-1.91 4.91.36 1.95 1.9 3.55 3.84 3.95C14.16 17.56 17 15.11 17 12c0-1.63-.79-3.06-2-3.98zm-2-.92c-.32-.06-.66-.1-1-.1s-.68.04-1 .1V5h2v2.1z"
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
export class SiTungstenIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
