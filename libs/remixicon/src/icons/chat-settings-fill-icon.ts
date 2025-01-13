import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chat-settings-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM8.14499 12.071L7.16987 12.634L8.16987 14.366L9.1459 13.8025C9.64746 14.3133 10.2851 14.69 11 14.874V16H13V14.874C13.7149 14.69 14.3525 14.3133 14.8541 13.8025L15.8301 14.366L16.8301 12.634L15.855 12.071C15.9495 11.7301 16 11.371 16 11C16 10.629 15.9495 10.2699 15.855 9.92901L16.8301 9.36602L15.8301 7.63397L14.8541 8.19748C14.3525 7.68674 13.7149 7.31003 13 7.12602V6H11V7.12602C10.2851 7.31003 9.64746 7.68674 9.1459 8.19748L8.16987 7.63397L7.16987 9.36602L8.14499 9.92901C8.0505 10.2699 8 10.629 8 11C8 11.371 8.0505 11.7301 8.14499 12.071ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"
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
export class SiChatSettingsFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
