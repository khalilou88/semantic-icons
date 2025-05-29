import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mode-night-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.93 2.3c-2.04-.5-4.02-.35-5.77.28-.72.26-.91 1.22-.31 1.71A9.94 9.94 0 0 1 9.5 12a9.94 9.94 0 0 1-3.65 7.71c-.59.49-.42 1.45.31 1.7 1.04.38 2.17.59 3.34.59 6.05 0 10.85-5.38 9.87-11.6-.61-3.92-3.59-7.16-7.44-8.1z"
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
export class SiModeNightIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
