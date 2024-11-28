import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-hu-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-hu"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#fff" d="M512 512H0V0h512z" />
        <path fill="#388d00" d="M512 512H0V341.3h512z" />
        <path fill="#d43516" d="M512 170.8H0V.1h512z" />
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
export class SvgHuIcon {
  readonly class = input('');
}
