import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flip-to-front-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3a2 2 0 0 0 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 12h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-7 6h2v-2h-2v2zm-4 0h2v-2H7v2z"
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
export class SiFlipToFrontIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
