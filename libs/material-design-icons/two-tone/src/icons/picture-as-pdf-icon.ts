import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-picture-as-pdf-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" />
    <svg:path
      d="M10 9h1v1h-1zm4 0h1v3h-1zm-6 7h12V4H8v12zm9-8h2v1h-1v1h1v1h-1v2h-1V8zm-4 0h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2V8zM9 8h2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v2H9V8z"
      opacity=".3"
    />
    <svg:path
      d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-4-4V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1zm-2-3h1v3h-1V9zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1v-2zm0-2h1v1h-1V9z"
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
export class SiPictureAsPdfIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
