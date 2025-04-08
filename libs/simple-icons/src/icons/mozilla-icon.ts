import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mozilla-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Mozilla</svg:title>
    <svg:path
      d="M4.819 24H1.75V0H4.82zM7.33 12.242H19.48v-.69L11.562 8.67V6.25l7.918-2.872v-.7H10.1V0h12.149v4.89l-6.445 2.224v.69l6.445 2.224v4.89H7.33zm0-9.565h2.77v2.77H7.33z"
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
export class SiMozillaIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#161616');
}
