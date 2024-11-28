import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bw-circle-flag-icon',
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
          fill="#338af3"
          d="M0 0h512v178l-31 76.9 31 79.1v178H0V334l37-80.7L0 178z"
        />
        <path
          fill="#333"
          d="m0 211.5 256-19.2 256 19.2v89l-254.6 20.7L0 300.5z"
        />
        <path fill="#eee" d="M0 178h512v33.5H0zm0 122.5h512V334H0z" />
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
export class SvgBwCircleFlagIcon {
  readonly class = input('');
}
