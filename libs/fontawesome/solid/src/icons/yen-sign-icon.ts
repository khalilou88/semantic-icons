import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-yen-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M58.6 46.3C48.8 31.5 29 27.6 14.2 37.4S-4.4 67 5.4 81.8L100.2 224 48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0 0 32-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0-32 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-52.2 0L314.6 81.8c9.8-14.7 5.8-34.6-8.9-44.4s-34.6-5.8-44.4 8.9L160 198.3 58.6 46.3z"
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
export class SiYenSignIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 320 512');
}
