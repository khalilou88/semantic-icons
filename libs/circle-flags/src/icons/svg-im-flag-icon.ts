import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-im-flag-icon',
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
        <path fill="#d80027" d="M0 0h512v512H0z" />
        <path
          fill="#eee"
          d="m350.8 171.6-18.1 64.6-54.3-10-35-72-94.4 33.4-7.4-21-24.7-3 18.6 52.5 65-16.7 18.4 52-44.9 66.3 76.3 65-14.5 17 9.7 22.9 36.1-42.3-46.8-48 35.8-42 79.8 5.8 18.2-98.6 22 4 15-19.8-54.8-10zM256 256z"
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
export class SvgImFlagIcon {
  readonly class = input('');
}
