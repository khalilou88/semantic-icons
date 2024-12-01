import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cr-flag-icon',
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
          d="M0 0h512v89l-66.3 167.5L512 423v89H0v-89l69.7-167.3L0 89z"
        />
        <path
          fill="#eee"
          d="M0 89h512v78l-39.7 91.1L512 345v78H0v-78l36.3-85.6L0 167z"
        />
        <path fill="#d80027" d="M0 167h512v178H0z" />
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
export class SvgCrFlagIcon {
  readonly class = input('');
}
