import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-align-horizontal-left-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 22c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1s1 .45 1 1v18c0 .55-.45 1-1 1zM20.5 7h-13C6.67 7 6 7.67 6 8.5S6.67 10 7.5 10h13c.83 0 1.5-.67 1.5-1.5S21.33 7 20.5 7zm-6 7h-7c-.83 0-1.5.67-1.5 1.5S6.67 17 7.5 17h7c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"
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
export class SiAlignHorizontalLeftIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
