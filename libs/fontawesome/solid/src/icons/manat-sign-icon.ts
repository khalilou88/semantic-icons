import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-manat-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M192 32c-17.7 0-32 14.3-32 32l0 34.7C69.2 113.9 0 192.9 0 288L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-59.6 40.8-109.8 96-124l0 284c0 17.7 14.3 32 32 32s32-14.3 32-32l0-284c55.2 14.2 96 64.3 96 124l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-95.1-69.2-174.1-160-189.3L224 64c0-17.7-14.3-32-32-32z"
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
export class SiManatSignIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 384 512');
}
