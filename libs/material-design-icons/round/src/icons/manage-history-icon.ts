import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-manage-history-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.75 19c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02a.488.488 0 0 0-.59-.22l-1.06.36c-.32-.27-.68-.48-1.08-.63l-.22-1.09a.503.503 0 0 0-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09c-.4.15-.76.36-1.08.63l-1.06-.36a.496.496 0 0 0-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36c.32.27.68.48 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09c.4-.15.76-.36 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63zM19 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM12 7c-.55 0-1 .45-1 1v4c0 .27.11.52.29.71l2.07 2.07 1.04-1.79-1.4-1.4V8c0-.55-.45-1-1-1zm-7.74 6c-.65 0-1.14.61-.98 1.24C4.28 18.13 7.8 21 12 21h.07l-1.21-2.09a7.01 7.01 0 0 1-5.64-5.18.976.976 0 0 0-.96-.73zM4 10c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1s1 .45 1 1v1.36C6.65 4.32 9.17 3 12 3a9 9 0 0 1 9 9h-2c0-3.86-3.14-7-7-7a7.01 7.01 0 0 0-5.74 3H8c.55 0 1 .45 1 1s-.45 1-1 1H4z"
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
export class SiManageHistoryIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
