import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-square-odnoklassniki-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M224 137.1a39.9 39.9 0 1 0 0 79.7 39.9 39.9 0 1 0 0-79.7zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM224 95.9A81 81 0 1 1 224 258a81 81 0 1 1 0-162.1zm59.3 168.3c16.8-13.2 29.5-5.5 34.1 3.6c7.8 16-1.1 23.7-21.5 37c-17.1 10.9-40.7 15.2-56.2 16.8l13 12.9 47.7 47.7c17.4 17.9-11 45.8-28.6 28.6c-12-12.2-29.5-29.7-47.7-47.9l0 0-47.7 47.9c-17.7 17.2-46-11-28.4-28.6c3.7-3.7 7.9-7.9 12.5-12.5c10.4-10.4 22.6-22.7 35.2-35.2l12.9-12.9c-15.4-1.6-39.3-5.7-56.6-16.8c-20.3-13.3-29.3-20.9-21.4-37c4.6-9.1 17.3-16.8 34.1-3.6c0 0 22.7 18 59.3 18s59.3-18 59.3-18z"
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
export class SiSquareOdnoklassnikiIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
