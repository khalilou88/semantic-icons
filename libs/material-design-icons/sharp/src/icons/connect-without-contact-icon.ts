import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-connect-without-contact-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11 14H9a9 9 0 0 1 9-9v2c-3.87 0-7 3.13-7 7zm7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3zM7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm4.45.5h-2A2.99 2.99 0 0 1 6.5 7H2v4h6V8.74a4.97 4.97 0 0 0 3.45-4.24zM19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm-1.5 1a2.99 2.99 0 0 1-2.95-2.5h-2A4.97 4.97 0 0 0 16 19.74V22h6v-4h-4.5z"
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
export class SiConnectWithoutContactIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
