import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-zen-browser-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Zen Browser</svg:title>
    <svg:path
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-12 9.846c5.438 0 9.846-4.408 9.846-9.846S17.438 2.154 12 2.154 2.154 6.562 2.154 12 6.562 21.846 12 21.846zM20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-8 6.462a6.462 6.462 0 1 0 0-12.924 6.462 6.462 0 0 0 0 12.924zm0-1.847a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23zM15.692 12a3.692 3.692 0 1 1-7.384 0 3.692 3.692 0 0 1 7.384 0z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiZenBrowserIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#F76F53');
}
