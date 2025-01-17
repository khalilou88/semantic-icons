import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-hyperskill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Hyperskill</svg:title>
    <svg:path
      d="M22 22.6a1.4 1.4 0 0 1-1.4 1.4h-1.2a1.4 1.4 0 0 1-1.4-1.4V1.4A1.4 1.4 0 0 1 19.4 0h1.2A1.4 1.4 0 0 1 22 1.4zm-8-14a1.4 1.4 0 0 1-1.4 1.4h-1.2A1.4 1.4 0 0 1 10 8.6V3.4A1.4 1.4 0 0 1 11.4 2h1.2A1.4 1.4 0 0 1 14 3.4zm-8.001 8a1.4 1.4 0 0 1-1.4 1.4H3.4A1.4 1.4 0 0 1 2 16.6V7.4A1.4 1.4 0 0 1 3.4 6h1.2A1.4 1.4 0 0 1 6 7.4v9.2zm8.001 4a1.4 1.4 0 0 1-1.4 1.4h-1.2a1.4 1.4 0 0 1-1.4-1.4v-5.2a1.4 1.4 0 0 1 1.4-1.4h1.2a1.4 1.4 0 0 1 1.4 1.4z"
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
export class SiHyperskillIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#8C5AFF');
}
