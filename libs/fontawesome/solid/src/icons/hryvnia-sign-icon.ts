import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hryvnia-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M121.9 116.2C138.3 103.1 158.7 96 179.6 96L223 96c27.1 0 49 21.9 49 49c0 11.5-4 22.4-11.1 31L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l123.5 0-50.6 28.9c-1.7 1-3.4 2-5.1 3.1L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l20.3 0c-2.8 9.9-4.3 20.4-4.3 31c0 62.4 50.6 113 113 113l43.4 0c35.5 0 70-12.1 97.7-34.3L308 441c13.8-11 16-31.2 5-45s-31.2-16-45-5l-5.9 4.7c-16.4 13.1-36.7 20.2-57.7 20.2L161 416c-27.1 0-49-21.9-49-49c0-11.5 4-22.4 11.1-31L352 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-123.5 0 50.6-28.9c1.7-1 3.4-2 5.1-3.1l67.8 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-20.3 0c2.8-10 4.3-20.4 4.3-31c0-62.4-50.6-113-113-113l-43.4 0c-35.5 0-70 12.1-97.7 34.3L76 71c-13.8 11-16 31.2-5 45s31.2 16 45 5l5.9-4.7z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHryvniaSignIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 384 512');
}
