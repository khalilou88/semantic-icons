import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ml-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-ml"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="red" d="M425.8 0H640v480H425.7z" />
        <path fill="#009a00" d="M0 0h212.9v480H0z" />
        <path fill="#ff0" d="M212.9 0h214v480h-214z" />
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
export class SvgMlFlagIcon {
  readonly class = input('');
}
