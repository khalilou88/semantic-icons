import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-home-mini-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 7c-7.91 0-8 4.8-8 5h16c-.01-.49-.36-5-8-5zM9.14 17h5.72c2.1 0 3.92-1.24 4.71-3H4.42c.8 1.76 2.62 3 4.72 3z"
      opacity=".3"
    />
    <svg:path
      d="M12 5C4.19 5 2 9.48 2 12c0 3.86 3.13 7 6.99 7h6.02C17.7 19 22 16.92 22 12c0 0 0-7-10-7zm2.86 12H9.14c-2.1 0-3.92-1.24-4.71-3h15.15c-.8 1.76-2.62 3-4.72 3zM4 12c0-.2.09-5 8-5 7.64 0 7.99 4.51 8 5H4z"
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
export class SiHomeMiniIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
