import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-es-pv-circle-flag-icon',
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
          d="M0 47.2 47.2 0h175.4L256 27.3 289.4 0H465l47 47.3v175.3l-24.2 35.2 24.2 31.6v175.4L464.8 512H289.4l-32-26.4-34.8 26.4H47.2L0 464.8V289.4L25 257 0 222.6z"
        />
        <path
          fill="#496e2d"
          d="M0 0v47.2L208.8 256 0 464.8V512h47.2L256 303.2 464.8 512H512v-47.2L303.2 256 512 47.3V0h-47L256 208.8 47.2 0H0z"
        />
        <path
          fill="#eee"
          d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0h-66.8z"
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
export class SvgEsPvCircleFlagIcon {
  readonly class = input('');
}
