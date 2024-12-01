import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sb-flag-icon',
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
        <path fill="#496e2d" d="M512 512V23.6L256 255.9 23.6 512z" />
        <path fill="#0052b4" d="M0 0h488.4L256 256 0 488.4z" />
        <path fill="#ffda44" d="M488.4 0 0 488.4V512h23.6L512 23.6V0z" />
        <path
          fill="#eee"
          d="m107.8 89 5.5 17h18l-14.6 10.5 5.5 17L108 123l-14.5 10.6 5.5-17L84.4 106h17.8zm91.3 0 5.5 17h18L208 116.4l5.6 17L199 123l-14.5 10.6 5.6-17-14.5-10.6h18zm-91.3 89 5.5 17h18l-14.6 10.5 5.5 17-14.4-10.5-14.5 10.5 5.5-17L84.4 195h17.8zm91.3 0 5.5 17h18L208 205.5l5.6 17-14.5-10.5-14.5 10.5 5.6-17-14.5-10.5h18zm-45.7-44.5 5.6 17h17.8L162.4 161l5.5 17-14.5-10.5L139 178l5.5-17-14.5-10.5h18z"
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
export class SvgSbFlagIcon {
  readonly class = input('');
}