import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-lv-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-lv"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <g fill-rule="evenodd">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z" />
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
export class SvgLvIcon {
  readonly class = input('');
}
