import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-square-letterboxd-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM105.1 187C66.4 187 35 218.3 35 257s31.4 70 70.1 70c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5c0-13.6 3.9-26.3 10.6-37.1c-12.4-19.8-34.4-32.9-59.5-32.9zM224 187c-24.8 0-46.5 12.8-59 32.2l-.5 .7 .4 .6c6.5 10.6 10.2 23.1 10.2 36.5c0 13.6-3.9 26.3-10.6 37.1C176.9 313.8 198.9 327 224 327c24.8 0 46.5-12.8 59-32.2l.5-.7-.4-.6c-6.5-10.6-10.2-23.1-10.2-36.5c0-13.6 3.9-26.3 10.6-37.1C271.1 200.2 249.1 187 224 187zm118.9 0c-24.8 0-46.5 12.8-59 32.2l-.5 .7 .4 .6c6.5 10.6 10.2 23.1 10.2 36.5c0 13.6-3.9 26.3-10.6 37.1c12.4 19.8 34.4 32.9 59.5 32.9c38.7 0 70.1-31.3 70.1-70s-31.4-70-70.1-70z"
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
export class SiSquareLetterboxdIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
