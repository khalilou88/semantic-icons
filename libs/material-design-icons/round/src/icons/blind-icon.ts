import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-blind-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="11.41" cy="3.5" r="2" />
    <svg:path
      d="M12.04 7.12c-.17-.35-.44-.65-.8-.85a1.98 1.98 0 0 0-1.93-.03v-.01l-4.39 2.5c-.62.35-1.01 1.01-1.01 1.73V13c0 .55.45 1 1 1s1-.45 1-1v-2.54l1.5-.85c-.32 1.1-.5 2.24-.5 3.39v5.33l-2 2.67c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2l2.04-2.72c.23-.31.37-.69.4-1.08l.18-2.94L10.91 18v4c0 .55.45 1 1 1s1-.45 1-1v-4.87c0-.41-.13-.81-.36-1.15l-1.6-2.29v-.01c-.11-1.16.07-2.32.46-3.4.75 1.14 1.88 1.98 3.2 2.41l5.7 9.87c.14.24.44.32.68.18.24-.14.32-.44.18-.68L15.92 13c.54 0 .98-.44.98-.98v-.05c0-.5-.37-.94-.87-.99-.95-.1-2.37-.52-3.21-2.18"
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
export class SiBlindIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
