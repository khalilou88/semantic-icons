import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-gauge-simple-high-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-15.9-5.8-30.4-15.3-41.6l76.6-147.4c6.1-11.8 1.5-26.3-10.2-32.4s-26.2-1.5-32.4 10.2L262.1 288.3c-2-.2-4-.3-6.1-.3c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGaugeSimpleHighIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
