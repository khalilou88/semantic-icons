import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-recent-actors-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13 7H3v10h10V7zM8 8c1.07 0 1.95.87 1.95 1.95 0 1.07-.87 1.95-1.95 1.95s-1.95-.87-1.95-1.95S6.93 8 8 8zm3.89 8H4.11v-.65c0-1.3 2.59-1.95 3.89-1.95s3.89.65 3.89 1.95V16z"
      opacity=".3"
    />
    <svg:path
      d="M21 5h2v14h-2zm-4 0h2v14h-2zm-3 14c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12zM3 7h10v10H3V7z"
    />
    <svg:circle cx="8" cy="9.94" r="1.95" />
    <svg:path
      d="M8 13.4c-1.3 0-3.89.65-3.89 1.95V16h7.78v-.65c0-1.3-2.59-1.95-3.89-1.95z"
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
export class SiRecentActorsIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
