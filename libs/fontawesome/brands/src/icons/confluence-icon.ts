import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-confluence-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M2.3 412.2c-4.5 7.6-2.1 17.5 5.5 22.2l105.9 65.2c7.7 4.7 17.7 2.4 22.4-5.3 0-.1.1-.2.1-.2 67.1-112.2 80.5-95.9 280.9-.7 8.1 3.9 17.8.4 21.7-7.7.1-.1.1-.3.2-.4l50.4-114.1c3.6-8.1-.1-17.6-8.1-21.3-22.2-10.4-66.2-31.2-105.9-50.3C127.5 179 44.6 345.3 2.3 412.2zm507.4-312.1c4.5-7.6 2.1-17.5-5.5-22.2L398.4 12.8c-7.5-5-17.6-3.1-22.6 4.4-.2.3-.4.6-.6 1-67.3 112.6-81.1 95.6-280.6.9-8.1-3.9-17.8-.4-21.7 7.7-.1.1-.1.3-.2.4L22.2 141.3c-3.6 8.1.1 17.6 8.1 21.3 22.2 10.4 66.3 31.2 106 50.4 248 120 330.8-45.4 373.4-112.9z"
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
export class SiConfluenceIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
