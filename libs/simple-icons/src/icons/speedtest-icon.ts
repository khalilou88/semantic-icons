import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-speedtest-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Speedtest</svg:title>
    <svg:path
      d="M11.628 16.186l-2.047-2.14 6.791-5.953 1.21 1.302zm8.837 6.047c2.14-2.14 3.535-5.117 3.535-8.466 0-6.604-5.395-12-12-12s-12 5.396-12 12c0 3.35 1.302 6.326 3.535 8.466l1.674-1.675c-1.767-1.767-2.79-4.093-2.79-6.79A9.568 9.568 0 0 1 12 4.185a9.568 9.568 0 0 1 9.581 9.581c0 2.605-1.116 5.024-2.79 6.791Z"
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
export class SiSpeedtestIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#141526');
}
