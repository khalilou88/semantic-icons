import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ve-flag-icon',
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
          fill="#0052b4"
          d="m0 144.7 255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"
        />
        <path fill="#ffda44" d="M0 0h512v144.7H0z" />
        <path fill="#d80027" d="M0 367.3h512V512H0z" />
        <path
          fill="#eee"
          d="M443.4 306.4 429.8 317l6 16.1-14.3-9.6-13.5 10.7 4.7-16.5-14.2-9.6 17.1-.6 4.7-16.5 6 16.1zm-34.7-60-9 14.5 11 13.2L394 270l-9 14.6-1.3-17-16.6-4.3 15.9-6.4-1.2-17 11 13zm-53-44.5-3.6 16.8 14.9 8.4-17 1.8-3.6 16.8-7-15.7-17 1.8 12.7-11.5-7-15.6 14.8 8.6zm-65-23.7 2.3 17 17 3-15.5 7.5 2.4 17-12-12.4-15.4 7.6 8-15.2-11.8-12.3 16.9 3zm-69.3 0 8 15.1 17-3-12 12.4 8 15.2-15.4-7.6-11.9 12.4 2.4-17-15.4-7.5 16.9-3zm-65 23.7 12.7 11.5 14.8-8.6-7 15.7 12.8 11.4-17-1.8-7 15.7-3.7-16.7-17-1.8 14.8-8.5zm-53.1 44.5 15.9 6.4 11-13-1.2 17 16 6.4-16.7 4.2-1.2 17L118 270l-16.7 4.2 11-13.2zm-34.7 60 17.2.5 5.9-16 4.7 16.4 17.1.6-14.2 9.6 4.7 16.6-13.5-10.6-14.2 9.6 5.9-16z"
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
export class SvgVeFlagIcon {
  readonly class = input('');
}
