import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-object-ungroup-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M48.2 66.8c-.1-.8-.2-1.7-.2-2.5l0-.2c0-8.8 7.2-16 16-16c.9 0 1.9 .1 2.8 .2C74.3 49.5 80 56.1 80 64c0 8.8-7.2 16-16 16c-7.9 0-14.5-5.7-15.8-13.2zM0 64c0 26.9 16.5 49.9 40 59.3l0 105.3C16.5 238.1 0 261.1 0 288c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40l201.3 0c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3l0-105.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40L123.3 40C113.9 16.5 90.9 0 64 0C28.7 0 0 28.7 0 64zm368 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM324.7 88c6.5 16 19.3 28.9 35.3 35.3l0 105.3c-16 6.5-28.9 19.3-35.3 35.3l-201.3 0c-6.5-16-19.3-28.9-35.3-35.3l0-105.3c16-6.5 28.9-19.3 35.3-35.3l201.3 0zM384 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 288c0 7.9-5.7 14.5-13.2 15.8c-.8 .1-1.7 .2-2.5 .2l-.2 0c-8.8 0-16-7.2-16-16c0-.9 .1-1.9 .2-2.8C49.5 277.7 56.1 272 64 272c8.8 0 16 7.2 16 16zm391.3-40l45.4 0c6.5 16 19.3 28.9 35.3 35.3l0 105.3c-16 6.5-28.9 19.3-35.3 35.3l-201.3 0c-6.5-16-19.3-28.9-35.3-35.3l0-36.7-48 0 0 36.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64c26.9 0 49.9-16.5 59.3-40l201.3 0c9.5 23.5 32.5 40 59.3 40c35.3 0 64-28.7 64-64c0-26.9-16.5-49.9-40-59.3l0-105.3c23.5-9.5 40-32.5 40-59.3c0-35.3-28.7-64-64-64c-26.9 0-49.9 16.5-59.3 40L448 200l0 16.4c9.8 8.8 17.8 19.5 23.3 31.6zm88.9-26.7a16 16 0 1 1 31.5 5.5 16 16 0 1 1 -31.5-5.5zM271.8 450.7a16 16 0 1 1 -31.5-5.5 16 16 0 1 1 31.5 5.5zm307-18.5a16 16 0 1 1 -5.5 31.5 16 16 0 1 1 5.5-31.5z"
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
export class SiObjectUngroupIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
