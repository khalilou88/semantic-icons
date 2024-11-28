import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ga-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-ga"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="#ffe700" d="M512 512H0V0h512z" />
        <path fill="#36a100" d="M512 170.7H0V0h512z" />
        <path fill="#006dbc" d="M512 512H0V341.3h512z" />
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
export class SvgGaIcon {
  readonly class = input('');
}
