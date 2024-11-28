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
      viewBox="0 0 512 512"
    >
      <g fill-rule="evenodd">
        <path fill="red" d="M340.6 0H512v512H340.6z" />
        <path fill="#009a00" d="M0 0h170.3v512H0z" />
        <path fill="#ff0" d="M170.3 0h171.2v512H170.3z" />
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