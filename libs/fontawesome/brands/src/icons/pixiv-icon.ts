import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-pixiv-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm171.5 84c41 0 76.3 12.9 101.4 35.2l0 0c25.2 22.2 39.8 54.1 39.8 88.8c.1 35.3-16.6 66.3-42.4 87c-25.9 20.8-60.6 32.4-98.8 32.4c-43.5 0-83.8-16.1-83.8-16.1v51.8c7.4 2.2 19.7 7 11.9 14.8H104.8c-7.7-7.8 3.6-12.4 12.1-14.8V175.5C97.1 190.9 87 204.3 81.8 214.2c6 19.4-5.3 18.5-5.3 18.5L56 199.7s72.7-83.7 179.5-83.7zm-3.6 222.9c30 0 56-11.3 73.9-29.2c17.9-18.1 27.9-41.6 28-70.2c-.1-29.3-9.5-54.6-26.7-73.6c-17.2-18.9-42.7-31.3-75.2-31.4c-26.7-.1-59.8 9-80.2 23.7V323.1c18.6 9.3 46.8 15.9 80.2 15.8z"
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
export class SiPixivIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
