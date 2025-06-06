import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-photography-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.94 8.12 8.9 6.07 9.88 5h4.24l1.83 2H20v10.17l-3.12-3.12c.08-.34.12-.69.12-1.05 0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12zM12 18c-2.76 0-5-2.24-5-5 0-.91.25-1.76.68-2.49L4.17 7H4v12h12.17l-1.68-1.68c-.73.43-1.58.68-2.49.68z"
      opacity=".3"
    />
    <svg:path
      d="M8.9 6.07 7.48 4.66 9 3h6l1.83 2H20c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16L20 17.17V7h-4.05l-1.83-2H9.88L8.9 6.07zm11.59 17.24L18.17 21H4c-1.1 0-2-.9-2-2V7c0-.59.27-1.12.68-1.49l-2-2L2.1 2.1 7 7l2.01 2.01 1.43 1.43 4.1 4.1 1.43 1.43L19 19l1.82 1.82 1.08 1.08-1.41 1.41zM9.19 12.02c-.11.31-.19.63-.19.98 0 1.65 1.35 3 3 3 .35 0 .67-.08.98-.19l-3.79-3.79zM16.17 19l-1.68-1.68c-.73.43-1.58.68-2.49.68-2.76 0-5-2.24-5-5 0-.91.25-1.76.68-2.49L4.17 7H4v12h12.17zm-1.36-7.02 2.08 2.08c.07-.35.11-.7.11-1.06 0-2.76-2.24-5-5-5-.36 0-.71.04-1.06.12l2.08 2.08a3 3 0 0 1 1.79 1.78z"
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
export class SiNoPhotographyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
