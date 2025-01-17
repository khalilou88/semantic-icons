import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-kip-sign-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M340.8 88.3c13.4-11.5 15-31.7 3.5-45.1s-31.7-15-45.1-3.5L128 186.4 128 64c0-17.7-14.3-32-32-32S64 46.3 64 64l0 160-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-122.4L299.2 472.3c13.4 11.5 33.6 9.9 45.1-3.5s9.9-33.6-3.5-45.1L182.5 288 352 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-169.5 0L340.8 88.3z"
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
export class SiKipSignIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 384 512');
}
