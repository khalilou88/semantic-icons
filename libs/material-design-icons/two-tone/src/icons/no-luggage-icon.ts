import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-no-luggage-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m16.17 19-3.42-3.42V18h-1.5v-3.92L9.5 12.33V18H8v-7.17l-1-1V19h9.17zM17 8v6.17l-1-1V9h-1.5v2.67l-1.75-1.75V9h-.92l-1-1H17z"
      opacity=".3"
    />
    <svg:path
      d="m16 13.17-1.5-1.5V9H16v4.17zm3.78 9.44-1.85-1.85c-.28.15-.59.24-.93.24 0 .55-.45 1-1 1s-1-.45-1-1H9c0 .55-.45 1-1 1s-1-.45-1-1c-1.1 0-2-.9-2-2V8c0-.05.02-.1.02-.15L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zM16.17 19l-3.42-3.42V18h-1.5v-3.92L9.5 12.33V18H8v-7.17l-1-1V19h9.17zM12.75 9h-.92l.92.92V9zM19 8v8.17l-2-2V8h-6.17l-.99-.99L9 6.17V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v3h2c1.1 0 2 .9 2 2zm-8.5-2h3V3.5h-3V6z"
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
export class SiNoLuggageIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
