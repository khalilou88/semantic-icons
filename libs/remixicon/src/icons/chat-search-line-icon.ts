import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chat-search-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.76282 17H13.083C13.0284 17.3252 13 17.6593 13 18C13 18.3407 13.0284 18.6748 13.083 19H6.45455L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V12.8027C21.3926 12.4513 20.7179 12.2034 20 12.083V5H4V18.3851L5.76282 17ZM23.9497 21.5355L22.4462 20.032C22.7981 19.4365 23 18.7418 23 18C23 15.7909 21.2091 14 19 14C16.7909 14 15 15.7909 15 18C15 20.2091 16.7909 22 19 22C19.7418 22 20.4365 21.7981 21.032 21.4462L22.5355 22.9497L23.9497 21.5355ZM21 18C21 19.1046 20.1046 20 19 20C17.8954 20 17 19.1046 17 18C17 16.8954 17.8954 16 19 16C20.1046 16 21 16.8954 21 18Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChatSearchLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
