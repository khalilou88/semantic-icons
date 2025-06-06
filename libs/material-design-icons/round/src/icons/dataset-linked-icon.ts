import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-dataset-linked-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.09 17H7v-4h3.69c.95-.63 2.09-1 3.31-1h6c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81C8.3 20.12 8 19.09 8 18c0-.34.04-.67.09-1zM13 7h4v4h-4V7zM7 7h4v4H7V7z"
    />
    <svg:path
      d="M12.03 17.66c.16-.98 1.09-1.66 2.08-1.66H15c.55 0 1-.45 1-1s-.45-1-1-1h-.83c-2.09 0-3.95 1.53-4.15 3.61A3.998 3.998 0 0 0 14 22h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-1.21 0-2.18-1.09-1.97-2.34zm7.8-3.66H19c-.55 0-1 .45-1 1s.45 1 1 1h.89c1 0 1.92.68 2.08 1.66.21 1.25-.76 2.34-1.97 2.34h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c2.34 0 4.21-2.01 3.98-4.39-.2-2.08-2.06-3.61-4.15-3.61z"
    />
    <svg:path
      d="M15 19h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1z"
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
export class SiDatasetLinkedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
