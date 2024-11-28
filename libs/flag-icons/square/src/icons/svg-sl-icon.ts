import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sl-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-sl"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="sl-a">
          <rect width="384" height="512" rx="4.6" ry="7.6" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        clip-path="url(#sl-a)"
        transform="scale(1.33333 1)"
      >
        <path fill="#0000cd" d="M0 341.7h512V512H0z" />
        <path fill="#fff" d="M0 171.4h512v170.3H0z" />
        <path fill="#00cd00" d="M0 0h512v171.4H0z" />
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
export class SvgSlIcon {
  readonly class = input('');
}
