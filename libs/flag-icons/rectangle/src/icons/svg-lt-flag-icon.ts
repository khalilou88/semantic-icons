import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lt-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-lt"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        transform="scale(.64143 .96773)"
      >
        <rect
          width="1063"
          height="708.7"
          fill="#006a44"
          rx="0"
          ry="0"
          transform="scale(.93865 .69686)"
        />
        <rect
          width="1063"
          height="236.2"
          y="475.6"
          fill="#c1272d"
          rx="0"
          ry="0"
          transform="scale(.93865 .69686)"
        />
        <path fill="#fdb913" d="M0 0h997.8v164.6H0z" />
      </g>
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
export class SvgLtFlagIcon {
  readonly class = input('');
}