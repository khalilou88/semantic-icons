import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-wine-glass-empty-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M64 0C47.4 0 33.5 12.8 32.1 29.3l-14 168.4c-6 72 42.5 135.2 109.9 150.6l0 99.6-48 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0 80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0-99.6c67.4-15.4 115.9-78.6 109.9-150.6l-14-168.4C286.5 12.8 272.6 0 256 0L64 0zM81.9 203.1L93.4 64l133.1 0 11.6 139.1C242 248.8 205.9 288 160 288s-82-39.2-78.1-84.9z"
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
export class SiWineGlassEmptyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 320 512');
}
