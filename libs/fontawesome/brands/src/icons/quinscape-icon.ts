import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-quinscape-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M313.6 474.6h-1a158.1 158.1 0 0 1 0-316.2c94.9 0 168.2 83.1 157 176.6 4 5.1 8.2 9.6 11.2 15.3 13.4-30.3 20.3-62.4 20.3-97.7C501.1 117.5 391.6 8 256.5 8S12 117.5 12 252.6s109.5 244.6 244.5 244.6a237.36 237.36 0 0 0 70.4-10.1c-5.2-3.5-8.9-8.1-13.3-12.5zm-.1-.1l.4.1zm78.4-168.9a99.2 99.2 0 1 0 99.2 99.2 99.18 99.18 0 0 0-99.2-99.2z"
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
export class SiQuinscapeIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
