import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-microchip-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c-35.3 0-64 28.7-64 64l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 56-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0c0 35.3 28.7 64 64 64l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 56 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c35.3 0 64-28.7 64-64l40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-56 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40-56 0 0-40zM160 128l192 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32zm192 32l-192 0 0 192 192 0 0-192z"
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
export class SiMicrochipIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
