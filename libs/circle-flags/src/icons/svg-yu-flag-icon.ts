import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-yu-flag-icon',
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
        <path fill="#eee" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
        <path fill="#d80027" d="M0 345h512v167H0Z" />
        <path fill="#0052b4" d="M0 0h512v167H0Z" />
        <path fill="#ffda44" d="m137 413 309-222H66l309 222L256 51Z" />
        <path fill="#d80027" d="m183 350 189-136H140l188 136-72-221z" />
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
export class SvgYuFlagIcon {
  readonly class = input('');
}