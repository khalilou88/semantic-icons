import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sports-soccer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7.01 9.49 11 6.7V5.3l-1.35-.95a8.103 8.103 0 0 0-4.38 3.34l.39 1.34 1.35.46zm-2 1.43-1 .73c0 .12-.01.23-.01.35 0 1.99.73 3.81 1.94 5.21l1.14-.1.79-1.37L6.4 11.4l-1.39-.48zm13.33-1.89.39-1.34a8.067 8.067 0 0 0-4.38-3.34L13 5.3v1.4l3.99 2.79 1.35-.46zm-9.97 1.95L9.73 15h4.54l1.36-4.02L12 8.44zM9.45 17l-.64 1.11.69 1.49c.79.25 1.63.4 2.5.4s1.71-.15 2.5-.41l.69-1.49-.64-1.1h-5.1zm10.53-5.35-1-.73-1.38.48-1.46 4.34.79 1.37 1.14.1C19.27 15.81 20 13.99 20 12c0-.12-.01-.23-.02-.35z"
      opacity=".3"
    />
    <svg:path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.3 1.35-.95a8.01 8.01 0 0 1 4.38 3.34l-.39 1.34-1.35.46L13 6.7V5.3zm-3.35-.95L11 5.3v1.4L7.01 9.49l-1.35-.46-.39-1.34a8.103 8.103 0 0 1 4.38-3.34zM7.08 17.11l-1.14.1A7.938 7.938 0 0 1 4 12c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34-.78 1.37zm7.42 2.48c-.79.26-1.63.41-2.5.41s-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11-.7 1.48zM14.27 15H9.73l-1.35-4.02L12 8.44l3.63 2.54L14.27 15zm3.79 2.21-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21z"
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
export class SiSportsSoccerIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
