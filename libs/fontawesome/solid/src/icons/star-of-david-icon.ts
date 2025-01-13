import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-star-of-david-icon]',
  standalone: true,
  imports: [],
  template: `
    <!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. -->
    <svg:path
      d="M404.2 309.5L383.1 344l42.3 0-21.1-34.5zM371.4 256l-54-88-122.8 0-54 88 54 88 122.8 0 54-88zm65.7 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4l-109.8 0-56.2 91.5C284.8 504.3 270.9 512 256 512s-28.8-7.7-36.6-20.5L163.3 400 53.4 400C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6C16 128.8 32.8 112 53.4 112l109.8 0 56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112l109.8 0c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6l-53.4 87zm-54-88l21.1 34.5L425.4 168l-42.3 0zM283 112L256 68l-27 44 54 0zM128.9 168l-42.3 0 21.1 34.5L128.9 168zM107.8 309.5L86.6 344l42.3 0-21.1-34.5zM229 400l27 44 27-44-54 0z"
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
export class SiStarOfDavidIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
