import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ws-flag-icon',
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
        <path fill="#d80027" d="M0 256 256 0h256v512H0z" />
        <path fill="#0052b4" d="M0 0h256v256H0z" />
        <path
          fill="#eee"
          d="m205 167 4.2 12.7h13.4l-10.8 7.9 4.1 12.7-10.8-7.8-10.9 7.8 4.1-12.7-10.8-7.9h13.4zM137.8 66.8l7 21.2H167l-18.1 13.2 6.9 21.2-18.1-13.1-18 13.1 6.8-21.2-18-13.2h22.3zM204.5 89l6.9 21.3h22.3l-18 13.1 6.9 21.3-18.1-13.1-18.1 13.1 7-21.3-18.2-13.1h22.4zm-52.8 89 6.9 21.3H181l-18.1 13.2 6.9 21.2-18.1-13.1-18 13.1 6.8-21.2-18-13.2h22.3zm-58.5-55.6 6.9 21.3h22.3l-18 13.1 6.9 21.3-18.1-13.2L75 178.1l6.9-21.3-18-13.1h22.3z"
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
export class SvgWsFlagIcon {
  readonly class = input('');
}