import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-chess-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16L96 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 0 32L60.2 96C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208 72 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l4 0L60 384l136 0L180 256l4 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-1.8 0 32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2L144 96l0-32 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24l208 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416 48 416zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416l-128 0zM304 208l0 51.9c0 7.8 2.8 15.3 8 21.1L339.2 312 337 384l125.5 0-3.3-72 28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7l0-51.5c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 16-24 0 0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 16-24 0 0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16l0 32-32 0 0-32z"
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
export class SiChessIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
