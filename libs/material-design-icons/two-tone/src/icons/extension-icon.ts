import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-extension-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19 13h-2V7h-6V5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2H4l.01 2.12C5.76 9.8 7 11.51 7 13.5c0 1.99-1.25 3.7-3 4.38V20h2.12c.68-1.75 2.39-3 4.38-3 1.99 0 3.7 1.25 4.38 3H17v-6h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"
      opacity=".3"
    />
    <svg:path
      d="M19 11V7c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H4c-1.1 0-1.99.9-1.99 2v3.8h.29c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-.3c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7v.3H17c1.1 0 2-.9 2-2v-4a2.5 2.5 0 0 0 0-5zm0 3h-2v6h-2.12a4.71 4.71 0 0 0-4.38-3 4.71 4.71 0 0 0-4.38 3H4v-2.12c1.75-.68 3-2.39 3-4.38 0-1.99-1.24-3.7-2.99-4.38L4 7h6V5c0-.28.22-.5.5-.5s.5.22.5.5v2h6v6h2c.28 0 .5.22.5.5s-.22.5-.5.5z"
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
export class SiExtensionIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
