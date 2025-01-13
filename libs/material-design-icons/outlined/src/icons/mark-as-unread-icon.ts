import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mark-as-unread-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2 2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4l5.73 3z"
    />
    <svg:path
      d="M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm0 11H7v-7l6.5 3.33L20 12v7zm-6.5-5.67L7 10h13l-6.5 3.33z"
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
export class SiMarkAsUnreadIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
