import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-hexlet-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Hexlet</svg:title>
    <svg:path
      d="M16.732 7.099v6.422H7.268V7.099L4.563 6.085V24h2.705v-7.775h9.464V24h2.705V6.085l-2.705 1.014Zm3.043-4.057L12 0 4.225 3.042 12 5.746l7.775-2.704Z"
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
export class SiHexletIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#116EF5');
}
