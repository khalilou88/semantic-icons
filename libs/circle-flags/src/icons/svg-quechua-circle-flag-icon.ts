import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-quechua-circle-flag-icon',
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
        <path fill="#4a1f63" d="M0 512h512v-70l-256-32L0 442Z" />
        <path fill="#0052b4" d="M0 442h512v-70l-256-32L0 372Z" />
        <path fill="#d80027" d="M0 0h512v70l-256 32L0 70Z" />
        <path fill="#ffda44" d="M0 70h512v70l-256 32L0 140Z" />
        <path
          fill="#eee"
          d="M0 140h512v70l-32 46 32 46v70H0v-70l32-46-32-46Z"
        />
        <path fill="#496e2d" d="M0 210h512v92H0z" />
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
export class SvgQuechuaCircleFlagIcon {
  readonly class = input('');
}
