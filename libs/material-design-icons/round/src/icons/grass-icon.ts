import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-grass-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.64 11.02a10.02 10.02 0 0 1 2.56-3.83c.38-.36.04-1-.46-.85-3.32.98-5.75 4.05-5.74 7.69.95-1.28 2.2-2.31 3.64-3.01zm-4.22-2.17a8.556 8.556 0 0 0-2.96-3.87c-.42-.3-.96.19-.72.65C8.54 7.15 9 8.88 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29zM12 20H3c-.55 0-1-.45-1-1s.45-1 1-1h4.75a8.027 8.027 0 0 0-4-5.06.486.486 0 0 1-.26-.44c0-.27.22-.49.49-.5H4c4.42 0 8 3.58 8 8zm8.26-7.06a7.995 7.995 0 0 0-4 5.06H21c.55 0 1 .45 1 1s-.45 1-1 1h-7c0-.68-.07-1.35-.2-2-.15-.72-.38-1.42-.67-2.07A7.97 7.97 0 0 1 20 12h.02a.5.5 0 0 1 .49.5c.01.19-.1.35-.25.44z"
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
export class SiGrassIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
