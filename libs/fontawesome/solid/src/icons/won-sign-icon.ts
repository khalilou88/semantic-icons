import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-won-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M62.4 53.9C56.8 37.1 38.6 28.1 21.9 33.6S-3.9 57.4 1.6 74.1L51.6 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l40.9 0 56.7 170.1c4.5 13.5 17.4 22.4 31.6 21.9s26.4-10.4 29.8-24.2L233 288l46 0L321 455.8c3.4 13.8 15.6 23.7 29.8 24.2s27.1-8.4 31.6-21.9L439.1 288l40.9 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-19.6 0 50-149.9c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2L392.9 224l-64 0L287 56.2C283.5 42 270.7 32 256 32s-27.5 10-31 24.2L183 224l-64 0L62.4 53.9zm78 234.1l26.6 0-11.4 45.6L140.4 288zM249 224l7-28.1 7 28.1-14 0zm96 64l26.6 0-15.2 45.6L345 288z"
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
export class SiWonSignIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
