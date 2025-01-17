import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-wagmi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Wagmi</svg:title>
    <svg:path
      d="M2.7391 13.2065c0 .7564.6132 1.3696 1.3696 1.3696h2.7391c.7564 0 1.3696-.6132 1.3696-1.3696V7.7283c0-.7564.6132-1.3696 1.3696-1.3696s1.3695.6132 1.3695 1.3696v5.4782c0 .7564.6132 1.3696 1.3696 1.3696h2.7391c.7564 0 1.3696-.6132 1.3696-1.3696V7.7283c0-.7564.6131-1.3696 1.3695-1.3696s1.3696.6132 1.3696 1.3696v8.2174c0 .7564-.6132 1.3695-1.3696 1.3695H1.3696C.6132 17.3152 0 16.7021 0 15.9457V7.7283c0-.7564.6132-1.3696 1.3696-1.3696s1.3695.6132 1.3695 1.3696zm19.4348 4.4348c1.0085 0 1.8261-.8176 1.8261-1.826 0-1.0086-.8176-1.8262-1.826-1.8262-1.0086 0-1.8262.8176-1.8262 1.8261 0 1.0085.8176 1.826 1.8261 1.826z"
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
export class SiWagmiIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#000000');
}
