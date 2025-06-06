import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-screen-search-desktop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 19H2c-.55 0-1 .45-1 1s.45 1 1 1h20c.55 0 1-.45 1-1s-.45-1-1-1zM4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2zm4.59-9.95a3.497 3.497 0 0 1 5.38-.52c1.18 1.18 1.34 3 .47 4.36L16 13.44c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-1.55-1.55c-1.57 1-3.76.64-4.87-1.11-.73-1.14-.69-2.67.07-3.79z"
    />
    <svg:circle cx="11.5" cy="10" r="2" />
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
export class SiScreenSearchDesktopIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
