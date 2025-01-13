import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-hand-lizard-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M72 112c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-104 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l152 0c4.5 0 8.9 1.3 12.7 3.6l64 40c7 4.4 11.3 12.1 11.3 20.4l0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-10.7L281.1 384 136 384c-39.8 0-72-32.2-72-72s32.2-72 72-72l104 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L72 208c-39.8 0-72-32.2-72-72S32.2 64 72 64l209.6 0c46.7 0 90.9 21.5 119.7 58.3l78.4 100.1c20.9 26.7 32.3 59.7 32.3 93.7L512 424c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-107.9c0-23.2-7.8-45.8-22.1-64.1L363.5 151.9c-19.7-25.2-49.9-39.9-81.9-39.9L72 112z"
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
export class SiHandLizardIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
