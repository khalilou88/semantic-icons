import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-square-binary-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm144 4c-24.3 0-44 19.7-44 44l0 48c0 24.3 19.7 44 44 44l32 0c24.3 0 44-19.7 44-44l0-48c0-24.3-19.7-44-44-44l-32 0zm-4 44c0-2.2 1.8-4 4-4l32 0c2.2 0 4 1.8 4 4l0 48c0 2.2-1.8 4-4 4l-32 0c-2.2 0-4-1.8-4-4l0-48zm140-44c-11 0-20 9-20 20c0 9.7 6.9 17.7 16 19.6l0 76.4c0 11 9 20 20 20s20-9 20-20l0-96c0-11-9-20-20-20l-16 0zM132 296c0 9.7 6.9 17.7 16 19.6l0 76.4c0 11 9 20 20 20s20-9 20-20l0-96c0-11-9-20-20-20l-16 0c-11 0-20 9-20 20zm96 24l0 48c0 24.3 19.7 44 44 44l32 0c24.3 0 44-19.7 44-44l0-48c0-24.3-19.7-44-44-44l-32 0c-24.3 0-44 19.7-44 44zm44-4l32 0c2.2 0 4 1.8 4 4l0 48c0 2.2-1.8 4-4 4l-32 0c-2.2 0-4-1.8-4-4l0-48c0-2.2 1.8-4 4-4z"
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
export class SiSquareBinaryIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
