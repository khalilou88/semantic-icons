import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-image-aspect-ratio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 18h16V6H4v12zm10-8h2v2h-2v-2zm0 4h2v2h-2v-2zm-4-4h2v2h-2v-2zm-4 0h2v2H6v-2z"
      opacity=".3"
    />
    <svg:path
      d="M14 10h2v2h-2zm0 4h2v2h-2zm-8-4h2v2H6zm4 0h2v2h-2zm10-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"
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
export class SiImageAspectRatioIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
