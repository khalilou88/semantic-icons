import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-az-circle-flag-icon',
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
          fill="#d80027"
          d="m0 166.9 253-31.8 259 31.8v178l-257.5 37.4L0 345z"
        />
        <path fill="#338af3" d="M0 0h512v166.9H0z" />
        <path fill="#6da544" d="M0 344.9h512V512H0z" />
        <g fill="#eee">
          <path
            d="M261.6 328.2a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7z"
          />
          <path
            d="m317.2 206 9.6 26.8 25.8-12.3-12.2 25.8 26.9 9.6-27 9.6 12.3 25.8-25.8-12.3-9.6 27-9.6-27-25.8 12.3 12.3-25.8-27-9.6 27-9.6-12.3-25.8 25.8 12.3z"
          />
        </g>
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
export class SvgAzCircleFlagIcon {
  readonly class = input('');
}
