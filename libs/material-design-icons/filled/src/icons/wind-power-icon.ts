import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wind-power-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3zm10.73-8.39c.75.23 1.3.78 1.57 1.46l4.27-7.11a2.28 2.28 0 0 0-3.51-2.84l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.93c.36-.15.98-.33 1.73-.1zm-3.12 1.66c.16-.52.48-.96.89-1.27H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.53.15 1.1.08 1.58-.21l2.69-1.61a2.487 2.487 0 0 1-.82-2.67zm11.6 6.34-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-3.18-.8c.03.32 0 .66-.1.99A2.478 2.478 0 0 1 13 15.5c-.61 0-.99-.22-1-.22V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.89.89 2.33.89 3.22 0 .72-.72.88-1.83.38-2.72z"
    />
    <svg:path
      d="M12.56 14.43c.79.24 1.63-.2 1.87-1 .24-.79-.2-1.63-1-1.87-.79-.24-1.63.2-1.87 1-.24.79.21 1.63 1 1.87z"
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
export class SiWindPowerIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
