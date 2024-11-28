import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mf-circle-flag-icon',
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
        <path fill="#eee" d="M0 128V0h512v128L299 512h-86z" />
        <circle cx="256" cy="213" r="57" fill="#ffda44" />
        <path fill="#eee" d="M185 213h142l-71 128Z" />
        <path fill="#d80027" d="M256 341 142 235h228z" />
        <path fill="#0052b4" d="m0 128 213 213v171H0Zm512 0L299 341v171h213z" />
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
export class SvgMfCircleFlagIcon {
  readonly class = input('');
}
