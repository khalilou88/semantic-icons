import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-r-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M64 32C28.7 32 0 60.7 0 96L0 288 0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 95.3 0L261.8 466.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6L230.1 309.5C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144L64 32zM176 256L64 256 64 96l112 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z"
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
export class SiRIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 320 512');
}
