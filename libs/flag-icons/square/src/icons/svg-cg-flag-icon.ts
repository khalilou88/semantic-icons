import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cg-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-cg"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="cg-a">
          <path fill-opacity=".7" d="M115.7 0h496.1v496h-496z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        stroke-width="1pt"
        clip-path="url(#cg-a)"
        transform="translate(-119.5)scale(1.032)"
      >
        <path fill="#ff0" d="M0 0h744v496H0z" />
        <path fill="#00ca00" d="M0 0v496L496 0z" />
        <path fill="red" d="M248 496h496V0z" />
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
export class SvgCgFlagIcon {
  readonly class = input('');
}
