import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-vest-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M207.1 237.4L151.2 69.7C168.6 79.7 192.6 88 224 88s55.4-8.3 72.8-18.3L226.5 280.6c-1.6 4.9-2.5 10-2.5 15.2L224 464c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48l0-193.5c0-9.5-2.8-18.7-8.1-26.6l-47.9-71.8c-5.3-7.9-8.1-17.1-8.1-26.6l0-17.5 0-73.7 0-6.3c0-26.5-21.5-48-48-48l-4.5 0c-.2 0-.4 0-.6 0c-.4 0-.8 0-1.2 0C311 0 295.7 9.7 285.7 18.8C276.4 27.2 257.2 40 224 40s-52.4-12.8-61.7-21.2C152.3 9.7 137 0 118.3 0c-.4 0-.8 0-1.2 0c-.2 0-.4 0-.6 0L112 0C85.5 0 64 21.5 64 48l0 6.3L64 128l0 17.5c0 9.5-2.8 18.7-8.1 26.6L8.1 243.9C2.8 251.8 0 261.1 0 270.5L0 464c0 26.5 21.5 48 48 48l128 0c9.9 0 19-3 26.7-8.1C195.9 492.2 192 478.5 192 464l0-168.2c0-8.6 1.4-17.1 4.1-25.3l11-33.1zM347.3 356.7l48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-48-48c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zm-294.6 48l48-48c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"
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
export class SiVestIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 448 512');
}
