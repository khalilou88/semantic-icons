import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-child-care-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 10c-.1 0-.19.02-.29.03-.2-.67-.49-1.29-.86-1.86C16.6 6.26 14.45 5 12 5S7.4 6.26 6.15 8.17c-.37.57-.66 1.19-.86 1.86-.1-.01-.19-.03-.29-.03-1.1 0-2 .9-2 2s.9 2 2 2c.1 0 .19-.02.29-.03.2.67.49 1.29.86 1.86C7.4 17.74 9.55 19 12 19s4.6-1.26 5.85-3.17c.37-.57.66-1.19.86-1.86.1.01.19.03.29.03 1.1 0 2-.9 2-2s-.9-2-2-2zm-4.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 17c-2.01 0-3.74-1.23-4.5-3h9c-.76 1.77-2.49 3-4.5 3z"
      opacity=".3"
    />
    <svg:circle cx="14.5" cy="10.5" r="1.25" />
    <svg:circle cx="9.5" cy="10.5" r="1.25" />
    <svg:path
      d="M12 17c2.01 0 3.74-1.23 4.5-3h-9c.76 1.77 2.49 3 4.5 3zm10.94-5.66a4.008 4.008 0 0 0-2.81-3.17 9.114 9.114 0 0 0-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91a3.994 3.994 0 0 0-2.81 3.17c-.04.21-.06.43-.06.66 0 .23.02.45.06.66a4.008 4.008 0 0 0 2.81 3.17 8.977 8.977 0 0 0 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89a3.998 3.998 0 0 0 2.8-3.17c.04-.21.06-.43.06-.66 0-.23-.02-.45-.06-.66zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChildCareIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
