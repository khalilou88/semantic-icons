import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-crop-rotate-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.95 24c.23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11zm.1-24c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 6h-6v2h6v6h2V8a2 2 0 0 0-2-2zm2 12h2v-2H8V4H6v2H4v2h2v8a2 2 0 0 0 2 2h8v2h2v-2z"
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
export class SiCropRotateIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
