import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mars-stroke-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M208 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm174.4-88C370.7 365.8 297.1 432 208 432c-97.2 0-176-78.8-176-176s78.8-176 176-176c89.1 0 162.7 66.2 174.4 152l33.6 0 0-56c0-13.3 10.7-24 24-24s24 10.7 24 24l0 56 32 0 0-56c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2l0-56-32 0 0 56c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-56-33.6 0z"
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
export class SiMarsStrokeRightIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 512');
}
