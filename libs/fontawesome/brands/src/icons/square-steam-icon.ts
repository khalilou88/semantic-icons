import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-square-steam-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M165.6 309.1c18.6 7.7 27.3 28.9 19.6 47.4s-29 27.2-47.6 19.4l-28.5-11.8c5 10.6 13.8 19.4 25.4 24.2c25.2 10.5 54.1-1.4 64.6-26.5c5.1-12.1 5.1-25.5 .1-37.7c-5.1-12.1-14.5-21.6-26.7-26.7c-12.1-5-25-4.8-36.4-.5l29.5 12.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V240.7l116.6 48.1c12-8.2 26.2-12.1 40.7-11.3l55.4-80.2v-1.1c0-48.2 39.3-87.5 87.6-87.5s87.6 39.3 87.6 87.5c0 49.2-40.9 88.7-89.6 87.5l-79 56.3c1.6 38.5-29.1 68.8-65.7 68.8c-31.8 0-58.5-22.7-64.5-52.7L0 319.2V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM241.9 196.2a58.4 58.4 0 1 0 116.8 0 58.4 58.4 0 1 0 -116.8 0zm14.6-.1a43.9 43.9 0 1 1 87.8 0 43.9 43.9 0 1 1 -87.8 0z"
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
export class SiSquareSteamIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
