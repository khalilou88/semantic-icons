import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'svg-square-rounded-letter-z-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-letter-z"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m2.324 4.999h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h2.382l-3.276 6.553a1 1 0 0 0 .894 1.447h4a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-2.382l3.276 -6.553a1 1 0 0 0 -.894 -1.447"
      />
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
export class SvgSquareRoundedLetterZIcon {
  readonly class = input('');
}
