import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-ramen-dining-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 2.84c0-.45-.39-.79-.83-.75L4.89 3.9c-.51.05-.89.48-.89.99V12h-.92c-.6 0-1.08.53-1 1.13.44 3.2 2.75 5.87 5.92 7.12V21c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-.75c3.17-1.25 5.48-3.92 5.92-7.12.08-.6-.4-1.13-1-1.13H10.5V8h10.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H10.5V4.78l10.83-1.19c.38-.05.67-.37.67-.75zM6.5 5.22V6.5h-1V5.34l1-.12zM5.5 8h1v4h-1V8zM9 12H8V8h1v4zm0-5.5H8V5.06l1-.11V6.5z"
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
export class SiRamenDiningIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
