import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flash-auto-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3v10c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9a.995.995 0 0 0-.86-1.5H9l3.38-7.59c.29-.67-.2-1.41-.92-1.41H4c-.55 0-1 .45-1 1zm15-1c-.6 0-1.13.38-1.34.94L14.22 9.8c-.2.59.23 1.2.85 1.2.38 0 .72-.24.84-.6L16.4 9h3.2l.49 1.4c.13.36.46.6.84.6.62 0 1.05-.61.84-1.19l-2.44-6.86C19.13 2.38 18.6 2 18 2zm-1.15 5.65L18 4l1.15 3.65h-2.3z"
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
export class SiFlashAutoIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
