import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mark-unread-chat-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 17.17 5.17 16H20V7.9c-.32.06-.66.1-1 .1s-.68-.04-1-.1V8H6V6h9.03c-.44-.58-.77-1.26-.92-2H4v13.17zM6 9h12v2H6V9zm0 3h8v2H6v-2z"
      opacity=".3"
    />
    <svg:circle cx="19" cy="3" r="3" />
    <svg:path
      d="M20 16H5.17L4 17.17V4h10.1a5 5 0 0 1 0-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V6.97c-.58.44-1.26.77-2 .92V16z"
    />
    <svg:path
      d="M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1A5.013 5.013 0 0 1 15.03 6H6v2z"
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
export class SiMarkUnreadChatAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
