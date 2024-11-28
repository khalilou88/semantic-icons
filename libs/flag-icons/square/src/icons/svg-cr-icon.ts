import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cr-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-cr"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#0000b4" d="M0 0h512v512H0z" />
        <path fill="#fff" d="M0 80.5h512v343.7H0z" />
        <path fill="#d90000" d="M0 168.2h512v168.2H0z" />
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
export class SvgCrIcon {
  readonly class = input('');
}
