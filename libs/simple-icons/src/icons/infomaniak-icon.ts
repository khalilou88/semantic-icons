import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-infomaniak-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Infomaniak</svg:title>
    <svg:path
      d="M2.4 0A2.395 2.395 0 0 0 0 2.4v19.2C0 22.9296 1.0704 24 2.4 24h19.2c1.3296 0 2.4-1.0704 2.4-2.4V2.4C24 1.0704 22.9296 0 21.6 0H10.112v11.7119l3.648-4.128h6l-4.58 4.3506 4.868 8.1296h-5.52l-2.5938-5.0211L10.112 16.8v3.264H5.12V0Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInfomaniakIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#0098FF');
}
