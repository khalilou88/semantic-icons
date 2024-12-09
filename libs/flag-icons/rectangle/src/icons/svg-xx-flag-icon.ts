import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-xx-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-xx"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#adb5bd"
        stroke-width="1.1"
        d="M.5.5h638.9v478.9H.5z"
      />
      <path
        fill="none"
        stroke="#adb5bd"
        stroke-width="1.1"
        d="m.5.5 639 479m0-479-639 479"
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
export class SvgXxFlagIcon {
  readonly class = input('');
}
