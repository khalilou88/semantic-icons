import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-contact-emergency-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9 14c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.54 0 1 .46 1 1s-.46 1-1 1-1-.46-1-1 .46-1 1-1z"
    />
    <svg:path
      d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM4.54 19c1.1-1.22 2.69-2 4.46-2s3.36.78 4.46 2H4.54zM22 19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54 1.61-6.92 4H2V5h20v14z"
    />
    <svg:path
      d="m15.78 11.15 1.47-.85V12h1.5v-1.7l1.47.85.75-1.3L19.5 9l1.47-.85-.75-1.3-1.47.85V6h-1.5v1.7l-1.47-.85-.75 1.3L16.5 9l-1.47.85z"
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
export class SiContactEmergencyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
