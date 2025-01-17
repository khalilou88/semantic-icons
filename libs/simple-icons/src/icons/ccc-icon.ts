import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ccc-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>CCC</svg:title>
    <svg:path
      d="M12 3.4C5.814 3.4.8 7.253.8 12c0 4.75 5.014 8.6 11.2 8.6s11.2-3.85 11.2-8.6c0-4.747-5.015-8.6-11.2-8.6M24 12c0 5.19-5.374 9.4-12 9.4S0 17.19 0 12s5.374-9.4 12-9.4S24 6.81 24 12M10 7c-2.83 0-5.026 2.229-5.026 5 0 2.882 2.487 4.997 5.026 4.997V15.44c-1.708 0-3.442-1.36-3.445-3.44C6.547 9.65 8.476 8.544 10 8.544zm3.8 0c-2.83 0-5.026 2.229-5.026 5 0 2.882 2.484 4.997 5.026 4.997V15.44c-1.705 0-3.442-1.36-3.447-3.44-.007-2.35 1.923-3.456 3.447-3.456zm3.8.003c-2.83 0-5.026 2.23-5.026 4.997 0 2.886 2.487 5 5.026 5v-1.56c-1.708 0-3.442-1.358-3.448-3.44-.005-2.35 1.924-3.456 3.448-3.456z"
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
export class SiCccIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
