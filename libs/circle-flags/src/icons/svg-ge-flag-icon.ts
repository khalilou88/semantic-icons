import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ge-flag-icon',
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
          fill="#eee"
          d="M0 0h224l32 32 32-32h224v224l-32 32 32 32v224H288l-32-32-32 32H0V288l32-32-32-32Z"
        />
        <path
          fill="#d80027"
          d="M224 0v224H0v64h224v224h64V288h224v-64H288V0h-64zm-96 96v32H96v32h32v32h32v-32h32v-32h-32V96h-32zm224 0v32h-32v32h32v32h32v-32h32v-32h-32V96h-32zM128 320v32H96v32h32v32h32v-32h32v-32h-32v-32h-32zm224 0v32h-32v32h32v32h32v-32h32v-32h-32v-32h-32z"
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
export class SvgGeFlagIcon {
  readonly class = input('');
}