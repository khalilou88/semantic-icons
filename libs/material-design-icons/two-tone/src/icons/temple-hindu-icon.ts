import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-temple-hindu-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.51 5h-3.02l-.6 2h4.22zm1.2 4H9.29l-.6 2h6.62zm1.2 4H8.09l-.6 2H4v5h5v-5h6v5h5v-5h-3.49z"
      opacity=".3"
    />
    <svg:path
      d="M20 11v2h-2L15 3V1h-2v2h-2.03V1h-2v2.12L6 13H4v-2H2v11h9v-5h2v5h9V11h-2zm-9.51-6h3.02l.6 2H9.89l.6-2zm-1.2 4h5.42l.6 2H8.69l.6-2zM20 20h-5v-5H9v5H4v-5h3.49l.6-2h7.82l.6 2H20v5z"
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
export class SiTempleHinduIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
