import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ba-circle-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path
          fill="#ffda44"
          d="M0 0h445.3l33.9 255-33.9 257-323.7-134.3L0 66.8z"
        />
        <path fill="#0052b4" d="M0 66.8V512h445.4z" />
        <path fill="#0052b4" d="M445.3 0H512v512h-66.7z" />
        <path
          fill="#eee"
          d="m354.6 456-8.3 25.6h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.5 21.7-15.8h-26.8zm-55-55.4-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.5 21.7-15.8h-26.8zM244.4 345l-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.5 21.7-15.8h-26.8zm-55.1-55.7-8.3 25.5h-26.8l21.7 15.8-8.3 25.5 21.7-15.8L211 356l-8.3-25.5 21.7-15.8h-26.8zm-55.4-55.7-8.3 25.5H98.8l21.7 15.8-8.3 25.5 21.7-15.8 21.7 15.8-8.3-25.5L169 259h-26.8zM78.7 178l-8.3 25.5H43.6l21.7 15.8-8.3 25.5L78.7 229l21.7 15.8-8.3-25.5 21.7-15.8H87zm-55.2-55.7-8.3 25.5h-26.8l21.7 15.8L1.8 189l21.7-15.8L45.2 189l-8.3-25.5 21.7-15.8H31.8z"
        />
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
export class SvgBaCircleFlagIcon {
  readonly class = input('');
}
