import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-code-commit-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M320 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm156.8-48C462 361 397.4 416 320 416s-142-55-156.8-128L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l131.2 0C178 151 242.6 96 320 96s142 55 156.8 128L608 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-131.2 0z"
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
export class SiCodeCommitIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 512');
}
