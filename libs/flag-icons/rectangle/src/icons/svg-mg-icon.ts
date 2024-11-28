import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mg-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-mg"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fc3d32" d="M213.3 0H640v240H213.3z" />
        <path fill="#007e3a" d="M213.3 240H640v240H213.3z" />
        <path fill="#fff" d="M0 0h213.3v480H0z" />
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
export class SvgMgIcon {
  readonly class = input('');
}
