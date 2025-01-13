import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-helmet-un-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M479.5 224C471.2 98.9 367.2 0 240 0C107.5 0 0 107.5 0 240l0 56.3C0 344.8 39.2 384 87.7 384L200 384l14.9 0L343.5 505.4c4.5 4.2 10.4 6.6 16.5 6.6l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-86.5 0-1.5-1.5L368 288l80 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-.5 0zM320 417.2l-78-73.7L274.4 288l45.6 0 0 129.2zM285.3 103.1l34.7 52 0-43.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52 0 43.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4zM160 112l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z"
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
export class SiHelmetUnIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
