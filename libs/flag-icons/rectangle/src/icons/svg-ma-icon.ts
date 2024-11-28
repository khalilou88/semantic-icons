import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ma-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-ma"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#c1272d" d="M640 0H0v480h640z" />
      <path
        fill="none"
        stroke="#006233"
        stroke-width="11.7"
        d="M320 179.4 284.4 289l93.2-67.6H262.4l93.2 67.6z"
      />
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
export class SvgMaIcon {
  readonly class = input('');
}
