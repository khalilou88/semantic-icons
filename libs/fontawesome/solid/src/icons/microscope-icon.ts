import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-microscope-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M160 32c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32zM32 448l288 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l0-64c106 0 192 86 192 192c0 49.2-18.5 94-48.9 128l16.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32zm80-64l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
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
export class SiMicroscopeIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}
