import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-jar-wheat-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M32 32C32 14.3 46.3 0 64 0L256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 64C46.3 64 32 49.7 32 32zM0 160c0-35.3 28.7-64 64-64l192 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 160zm112 0l-42.2 0c-3.2 0-5.8 2.6-5.8 5.8C64 198 90 224 122.2 224l21.8 0 32 0 21.8 0c32.1 0 58.2-26 58.2-58.2c0-3.2-2.6-5.8-5.8-5.8L208 160c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7zm48 117.7c-11.7-13.3-28.9-21.7-48-21.7l-42.2 0c-3.2 0-5.8 2.6-5.8 5.8C64 294 90 320 122.2 320l21.8 0 32 0 21.8 0c32.1 0 58.2-26 58.2-58.2c0-3.2-2.6-5.8-5.8-5.8L208 256c-19.1 0-36.3 8.4-48 21.7zM112 352l-42.2 0c-3.2 0-5.8 2.6-5.8 5.8C64 390 90 416 122.2 416l21.8 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 21.8 0c32.1 0 58.2-26 58.2-58.2c0-3.2-2.6-5.8-5.8-5.8L208 352c-19.1 0-36.3 8.4-48 21.7c-11.7-13.3-28.9-21.7-48-21.7z"
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
export class SiJarWheatIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 320 512');
}
