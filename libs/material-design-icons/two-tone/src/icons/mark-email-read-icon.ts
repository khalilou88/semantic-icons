import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mark-email-read-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20 8v4.08c-.33-.05-.66-.08-1-.08-3.53 0-6.43 2.61-6.92 6H4V8l8 5 8-5zm0-2H4l8 5 8-5z"
      opacity=".3"
    />
    <svg:path
      d="M12.08 18H4V8l8 5 8-5v4.08c.71.1 1.38.31 2 .6V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h8.08c-.05-.33-.08-.66-.08-1s.03-.67.08-1zM20 6l-8 5-8-5h16zm-2.66 16-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 16.34 17.34 22z"
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
export class SiMarkEmailReadIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
