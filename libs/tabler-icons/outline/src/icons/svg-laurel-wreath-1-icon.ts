import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-laurel-wreath-1-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-laurel-wreath-1"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6.436 8a8.6 8.6 0 0 0 -.436 2.727c0 4.017 2.686 7.273 6 7.273s6 -3.256 6 -7.273a8.6 8.6 0 0 0 -.436 -2.727"
      />
      <path d="M14.5 21s-.682 -3 -2.5 -3s-2.5 3 -2.5 3" />
      <path
        d="M18.52 5.23c.292 1.666 -1.02 2.77 -1.02 2.77s-1.603 -.563 -1.895 -2.23c-.292 -1.666 1.02 -2.77 1.02 -2.77s1.603 .563 1.895 2.23"
      />
      <path
        d="M21.094 12.14c-1.281 1.266 -3.016 .76 -3.016 .76s-.454 -1.772 .828 -3.04c1.28 -1.266 3.016 -.76 3.016 -.76s.454 1.772 -.828 3.04"
      />
      <path
        d="M17.734 18.826c-1.5 -.575 -1.734 -2.19 -1.734 -2.19s1.267 -1.038 2.767 -.462c1.5 .575 1.733 2.19 1.733 2.19s-1.267 1.038 -2.767 .462"
      />
      <path
        d="M6.267 18.826c1.5 -.575 1.733 -2.19 1.733 -2.19s-1.267 -1.038 -2.767 -.462c-1.5 .575 -1.733 2.19 -1.733 2.19s1.267 1.038 2.767 .462"
      />
      <path
        d="M2.906 12.14c1.281 1.266 3.016 .76 3.016 .76s.454 -1.772 -.828 -3.04c-1.281 -1.265 -3.016 -.76 -3.016 -.76s-.454 1.772 .828 3.04"
      />
      <path
        d="M5.48 5.23c-.292 1.666 1.02 2.77 1.02 2.77s1.603 -.563 1.895 -2.23c.292 -1.666 -1.02 -2.77 -1.02 -2.77s-1.603 .563 -1.895 2.23"
      />
      <path d="M11 9l1 -1v6" />
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLaurelWreath1Icon {
  readonly class = input('');
}
