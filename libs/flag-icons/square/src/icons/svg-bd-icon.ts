import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bd-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      id="flag-icons-bd"
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#006a4e" d="M0 0h512v512H0z" />
      <circle cx="230" cy="256" r="170.7" fill="#f42a41" />
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
export class SvgBdIcon {
  readonly class = input('');
}
