import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pageview-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.5 9a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.92 13.5-2.2-2.2c-.9.58-2.03.84-3.22.62-1.88-.35-3.38-1.93-3.62-3.83a4.505 4.505 0 0 1 5.21-5.04c1.88.3 3.39 1.84 3.7 3.71a4.43 4.43 0 0 1-.64 3.12l2.2 2.19a1.011 1.011 0 0 1-1.43 1.43z"
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
export class SiPageviewIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
