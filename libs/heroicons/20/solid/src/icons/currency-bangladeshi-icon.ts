import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-currency-bangladeshi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM5.94 5.5c.944-.945 2.56-.276 2.56 1.06V8h5.75a.75.75 0 0 1 0 1.5H8.5v4.275c0 .296.144.455.26.499a3.5 3.5 0 0 0 4.402-1.77h-.412a.75.75 0 0 1 0-1.5h.537c.462 0 .887.21 1.156.556.278.355.383.852.184 1.337a5.001 5.001 0 0 1-6.4 2.78C7.376 15.353 7 14.512 7 13.774V9.5H5.75a.75.75 0 0 1 0-1.5H7V6.56l-.22.22a.75.75 0 1 1-1.06-1.06l.22-.22Z"
      clip-rule="evenodd"
    />
  `,
  host: {
    'aria-hidden': 'true',
    'data-slot': 'icon',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCurrencyBangladeshiIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 20 20');

  readonly fill = input<string>('currentColor');
}
