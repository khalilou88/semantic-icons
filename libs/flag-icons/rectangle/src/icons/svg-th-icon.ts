import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-th-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-th"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#f4f5f8" d="M0 0h640v480H0z" />
        <path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
        <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
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
export class SvgThIcon {
  readonly class = input('');
}
