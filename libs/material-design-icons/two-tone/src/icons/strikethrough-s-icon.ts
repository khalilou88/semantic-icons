import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-strikethrough-s-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.44 5.88c.19-.15.43-.27.72-.36.29-.09.64-.13 1.03-.13.4 0 .76.06 1.06.16.3.11.55.25.75.44s.35.41.44.68c.1.26.15.54.15.85h3.01c0-.66-.13-1.26-.38-1.81s-.61-1.03-1.08-1.43a4.94 4.94 0 0 0-1.69-.94c-.67-.23-1.4-.34-2.21-.34-.79 0-1.52.1-2.18.29-.65.2-1.22.48-1.7.83-.48.36-.85.79-1.11 1.29-.27.51-.4 1.06-.4 1.67 0 .64.13 1.19.39 1.67.04.08.1.17.15.25H12c-.64-.22-1.03-.45-1.41-.7-.49-.33-.74-.73-.74-1.21 0-.23.05-.45.15-.66s.25-.39.44-.55zM3 12h9.62c.18.07.4.14.55.2.37.17.66.34.87.51.21.17.35.36.43.57.07.2.11.43.11.69 0 .23-.05.45-.14.66-.09.2-.23.38-.42.53-.19.15-.42.26-.71.35-.29.08-.63.13-1.01.13-.43 0-.83-.04-1.18-.13s-.66-.23-.91-.42-.45-.44-.59-.75-.25-.76-.25-1.21H6.4c0 .55.08 1.13.24 1.58.16.45.37.85.65 1.21.28.35.6.66.98.92.37.26.78.48 1.22.65s.9.3 1.38.39c.48.08.96.13 1.44.13.8 0 1.53-.09 2.18-.28.65-.19 1.21-.45 1.67-.79.46-.34.82-.77 1.07-1.27s.38-1.07.38-1.71c0-.6-.1-1.14-.31-1.61-.05-.11-.11-.23-.17-.33H21V10H3v2z"
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
export class SiStrikethroughSIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
