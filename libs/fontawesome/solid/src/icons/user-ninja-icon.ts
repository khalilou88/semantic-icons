import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-user-ninja-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M224 256c-57.2 0-105.6-37.5-122-89.3c-1.1 1.3-2.2 2.6-3.5 3.8c-15.8 15.8-38.8 20.7-53.6 22.1c-8.1 .8-14.6-5.7-13.8-13.8c1.4-14.7 6.3-37.8 22.1-53.6c5.8-5.8 12.6-10.1 19.6-13.4c-7-3.2-13.8-7.6-19.6-13.4C37.4 82.7 32.6 59.7 31.1 44.9c-.8-8.1 5.7-14.6 13.8-13.8c14.7 1.4 37.8 6.3 53.6 22.1c4.8 4.8 8.7 10.4 11.7 16.1C131.4 28.2 174.4 0 224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zM0 482.3C0 399.5 56.4 330 132.8 309.9c6-1.6 12.2 .9 15.9 5.8l62.5 83.3c6.4 8.5 19.2 8.5 25.6 0l62.5-83.3c3.7-4.9 9.9-7.4 15.9-5.8C391.6 330 448 399.5 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM160 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L160 96z"
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
export class SiUserNinjaIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
