import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-trademark-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M345.6 108.8c-8.3-11-22.7-15.5-35.7-11.2S288 114.2 288 128l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 86.4 115.2c6 8.1 15.5 12.8 25.6 12.8s19.6-4.7 25.6-12.8L576 224l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-13.8-8.8-26-21.9-30.4s-27.5 .1-35.7 11.2L464 266.7 345.6 108.8zM0 128c0 17.7 14.3 32 32 32l64 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 96C14.3 96 0 110.3 0 128z"
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
export class SiTrademarkIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
