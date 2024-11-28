import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pe-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-pe"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#D91023" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
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
export class SvgPeIcon {
  readonly class = input('');
}
